import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const Payment = () => {
  const history = useHistory();
  const [{ user, basket }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Los Angelos</p>
            <p>Us, Heyrf, 739201</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.length > 0 ? (
              basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                />
              ))
            ) : (
              <h4>
                No Item available in your basket
                <Tooltip title="Add Item" arrow>
                  <Fab
                    color="primary"
                    onClick={() => history.push("/")}
                    style={{ marginLeft: "18px", marginTop: "8px" }}
                  >
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </h4>
            )}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* all stripe logic */}
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({basket.length} item): <strong> {value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
