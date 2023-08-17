import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProductsContext } from "../Global/ProductsContext";
import { CartContext } from "../Global/CartContext";
import { Loader } from "./Loader";
import { useAuth } from "../Global/AuthContext"; // Assuming you have the AuthContext set up

export const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  const { currentUser, login } = useAuth(); // Using the useAuth hook from your AuthContext

  const history = useHistory();

  const addToCart = (product) => {
    if (currentUser) {
      dispatch({
        type: "ADD_TO_CART",
        id: product.ProductID,
        product,
      });
    } else {
      // Redirect to login and perform the login action after successful login
      history.push("/login");
    }
  };

  return (
    <div className="products-main-container">
      <div className="products-wrapper">
        {products.length !== 0 && <h1>Products</h1>}
        <div className="products-container">
          {products.length === 0 && (
            <div>
              <Loader />
            </div>
          )}
          {products.map((product) => (
            <div className="product-card" key={product.ProductID}>
              <div className="product-img">
                <img src={product.ProductImg} alt="not found" />
              </div>
              <div className="product-name">{product.ProductName}</div>
              <div className="product-price">
                Rs {product.ProductPrice}.00
              </div>
              <button
                className="addcart-btn"
                onClick={() => addToCart(product)}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
