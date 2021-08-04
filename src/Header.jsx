import React from "react";
import "./header.css";
import { Link, useHistory } from "react-router-dom";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const history = useHistory();
  const [{ basket, user }] = useStateValue();
  const logout = () => {
    if (user) {
      let permission = prompt("For Security🚨🚨, Type any word to logout");
      if (permission) {
        auth.signOut();
        history.push("/login");
      }
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        <div className="dilever_to">
          <span className="spanOne">Deliver to</span>
          <br />
          <span className="spanTwo">
            <LocationOnOutlinedIcon />
            <p className="deliver__text">India</p>
          </span>
        </div>

        <div className="header__searchBox">
          <input type="text" className="header__input" />
          <SearchIcon className="header__search" />
        </div>

        <div className="header__right">
          <Link to={!user && "/login"} className="header__link">
            <div className="header__right__option">
              <span className="header__option__Line__One">
                Hello: {user ? user?.email : "User"}
              </span>
              <span onClick={logout} className="header__option__Line__Two">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <div className="header__link ">
            <div className="header__right__option">
              <span className="header__option__Line__One">Returns</span>
              <span className="header__option__Line__Two">& Orders</span>
            </div>
          </div>

          <Link to="/login" className="header__link">
            <div className="header__right__option">
              <span className="header__option__Line__One">Your</span>
              <span className="header__option__Line__Two">Prime</span>
            </div>
          </Link>
        </div>

        <Link to={!user ? "/login" : "/checkout"} className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__option__Line__Two header__basketCount">
              {user ? basket.length : "0"}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
