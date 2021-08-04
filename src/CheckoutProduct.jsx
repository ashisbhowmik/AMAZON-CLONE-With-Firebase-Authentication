import React from "react";
import { useStateValue } from "./StateProvider";
import "./checkoutProduct.css";
import { useSnackbar } from "notistack";
import { motion } from "framer-motion";

const CheckoutProduct = ({ id, title, image, price, description }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [{ basket }, dispatch] = useStateValue();

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_TO_BASKET",
      id: id,
    });
    enqueueSnackbar("Item removed!");
  };
  const list = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <>
      <motion.div
        className="checkoutProduct"
        initial="hidden"
        animate="visible"
        variants={list}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.01 }}
      >
        <img className="checkoutProduct__image" src={image} />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__description">
            {truncate(description, 120)}
          </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          {/* {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )} */}
          <button
            onClick={removeFromBasket}
            className="remove__button"
            style={{ cursor: "pointer" }}
          >
            Remove from Basket
          </button>
        </div>
      </motion.div>
    </>
  );
};
export default CheckoutProduct;
