import React, { useContext, useEffect } from "react";
import { CartContext } from "../Global/CartContext";
import { Navbar } from "./Navbar";
import { Icon } from "react-icons-kit";
import { ic_add } from "react-icons-kit/md/ic_add";
import { ic_remove } from "react-icons-kit/md/ic_remove";
import { iosTrashOutline } from "react-icons-kit/ionicons/iosTrashOutline";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth } from "../Config/Config";
import NotFoundImg from "../images/pagenotfound.png";

export const Cart = ({ user }) => {
  const { shoppingCart, dispatch, totalPrice, totalQty } =
    useContext(CartContext);

  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      }
    });
  });

  return (
    <>
      <Navbar user={user} />
      <>
        <div className="cart-container">
        {shoppingCart.length !== 0 && <h1>Cart</h1>}
          {shoppingCart.length === 0 && (
            <>
              <div className="cart-headline">
                <div>
                  <img
                    src={NotFoundImg}
                    alt="Page Not Found"
                    className="error-headline"
                  />
                </div>
                <h5>
                  No items in your cart or slow internet causing trouble
                  (Refresh the page) or you are not logged in
                </h5>
                <div className="return-to-home">
                  <Link to="/" className="sign-up">
                    Return to Home page
                  </Link>
                </div>
              </div>
            </>
          )}
          {shoppingCart &&
            shoppingCart.map((cart) => (
              <div className="cart-card" key={cart.ProductID}>
                <div className="cart-img">
                  <img src={cart.ProductImg} alt="not found" />
                </div>

                <div className="cart-name">{cart.ProductName}</div>

                <div className="cart-price-orignal">
                  Rs {cart.ProductPrice}.00
                </div>

                <div
                  className="inc"
                  onClick={() =>
                    dispatch({ type: "INC", id: cart.ProductID, cart })
                  }
                >
                  <Icon icon={ic_add} size={24} />
                </div>

                <div className="quantity">{cart.qty}</div>

                <div
                  className="dec"
                  onClick={() =>
                    dispatch({ type: "DEC", id: cart.ProductID, cart })
                  }
                >
                  <Icon icon={ic_remove} size={24} />
                </div>

                <div className="cart-price">Rs {cart.TotalProductPrice}.00</div>

                <button
                  className="delete-btn"
                  onClick={() =>
                    dispatch({ type: "DELETE", id: cart.ProductID, cart })
                  }
                >
                  <Icon icon={iosTrashOutline} size={24} />
                </button>
              </div>
            ))}
          {shoppingCart.length > 0 && (
            <div className="cart-summary">
              <div className="cart-summary-heading">Cart-Summary</div>
              <div className="cart-summary-price">
                <span>Total Price</span>
                <span>{totalPrice}</span>
              </div>
              <div className="cart-summary-price">
                <span>Total Qty</span>
                <span>{totalQty}</span>
              </div>
              <Link to="cashout" className="cashout-link">
                <button
                  className="sign-up"
                  style={{ marginTop: 5 + "px" }}
                >
                  Cash on delivery
                </button>
              </Link>
            </div>
          )}
        </div>
      </>
    </>
  );
};
