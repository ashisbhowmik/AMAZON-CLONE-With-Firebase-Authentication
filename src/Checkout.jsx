import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./checkout.css";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="image not found"
          />
          <div>
            <h6 style={{ fontWeight: "bold" }}>Hello, {user?.email}</h6>
            <h2 className="checkout__title">Your shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
