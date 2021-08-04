import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { SnackbarProvider } from "notistack";
import Payment from "./Payment";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // any cleanup operion go in here
      unsubscribe();
    };
  }, []);

  return (
    <>
      <SnackbarProvider maxSnack={1}>
        <div className="app">
          <Switch>
            <Route path="/payment">
              <Header />
              <Payment />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </SnackbarProvider>
    </>
  );
};

export default App;
