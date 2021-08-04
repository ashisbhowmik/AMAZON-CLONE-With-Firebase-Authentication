import React from "react";
import { useHistory } from "react-router-dom";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  return (
    <div>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} item): <strong> {value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button onClick={() => history.push("/payment")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Subtotal;
