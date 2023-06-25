import React, { useContext, useEffect, useState } from "react";
import logo from "../images/enactus-logo-gray.png";
import { Link } from "react-router-dom";
import { auth, db } from "../Config/Config";
import { Icon } from "react-icons-kit";
import { cart } from "react-icons-kit/entypo/cart";
import { useHistory } from "react-router-dom";
import { CartContext } from "../Global/CartContext";

export const Navbar = () => {
  const history = useHistory();
  const { totalQty } = useContext(CartContext);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Set up an observer on the Auth object
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        db.collection("SignedUpUsersData")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            const userData = snapshot.data();
            if (userData) {
              setCurrentUser(userData.Name); // Update the current user state with the name of the logged in user.
            }
          });
      } else {
        // No user is signed in.
        setCurrentUser(null);
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  // handle logout
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <div className="navbox">
      <Link to="/" className="logo">
        <img src={logo} alt="Enactus Logo" />
      </Link>
      {!currentUser && (
        <div className="rightside">
          <span>
            <Link to="signup" className="navlink sign-up">
              SIGN UP
            </Link>
          </span>
          <span>
            <Link to="login" className="navlink login">
              LOGIN
            </Link>
          </span>
        </div>
      )}
      {currentUser && (
        <div className="rightside">
          <span>
            <Link to="/" className="navlink current-user">
              {currentUser}
            </Link>
          </span>
          <span>
            <Link to="cartproducts" className="navlink">
              <Icon icon={cart} className="cart"/>
              <span className="no-of-products">{totalQty}</span>
            </Link>
          </span>
          <span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </span>
        </div>
      )}
    </div>
  );
};
