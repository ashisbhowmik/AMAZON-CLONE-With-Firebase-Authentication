import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./product.css";
import { useStateValue } from "./StateProvider";
import { useSnackbar } from "notistack";
import StarIcon from "@material-ui/icons/Star";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, category, title, description, price, image }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const addToBasket = () => {
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          description: description,
          raing: rating,
          price: price,
        },
      });
      enqueueSnackbar("Item added successfully!");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="products">
      <div className="products__catgory">
        <h3>{category}</h3>
      </div>
      <img src={image} />

      <h4>{title}</h4>
      <h5>${price}</h5>

      <div className="products__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon style={{ color: "#f0c14b", marginTop: "6px" }} />
          ))}
      </div>

      <p> {truncate(description, 220)}</p>

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
};

export default Product;
