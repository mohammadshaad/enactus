import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../Global/AuthContext";
import { CartContext } from "../Global/CartContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logo from "../images/enactus-logo-gray.png";

function PaymentForm() {
  const { currentUser } = useAuth();
  const { totalPrice } = useContext(CartContext);
  const history = useHistory();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Update the signed-in status
    setIsSignedIn(!!currentUser);
  }, [currentUser]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const postTotalPrice = async (totalPrice) => {
    try {
      const response = await axios.post("http://localhost:8080/totalPrice", {
        totalPrice: totalPrice,
      });

      console.log("TotalPrice updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating totalPrice:", error);
    }
  };

  const redirectToLogin = () => {
    // Redirect to the login route
    history.push("/login");
  };

  const handleCheckboxChange = () => {
    // Toggle the checkbox state
    setIsChecked(!isChecked);
  };

  const displayRazorpay = async () => {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      // Check if the user is signed in
      if (!isSignedIn) {
        alert("Please sign in to make a payment.");
        redirectToLogin();
        return;
      }

      // Check if the checkbox is checked
      if (!isChecked) {
        alert("Please accept the terms and services.");
        return;
      }

      // Call the function to post totalPrice before creating a new order
      await postTotalPrice(totalPrice);

      // Creating a new order
      const orderResult = await axios.post(
        "http://localhost:8080/payment/orders",
        {
          totalPrice: totalPrice,
        }
      );

      if (!orderResult) {
        alert("Server error while creating an order. Are you online?");
        return;
      }

      // Getting the order details back
      const { amount, id: order_id, currency } = orderResult.data;

      // Log the order details
      console.log("Order Details:", { amount, order_id, currency });

      const options = {
        key: "rzp_test_xpNrpSoMasXwsy",
        amount: amount.toString(),
        currency: currency,
        name: "Enactus VIT Chennai",
        description: "Test Transaction",
        image: { logo },
        order_id: order_id,
        handler: async function (response) {
          const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          // Log the data before making the POST request
          console.log("Data to be sent:", data);

          const successResult = await axios.post(
            "http://localhost:8080/payment/success",
            data
          );

          // Log the success result
          console.log("Success Result:", successResult.data);

          alert(successResult.data.msg);
        },
        prefill: {
          name: currentUser.name,
          email: currentUser.email,
          contact: currentUser.mobile,
          address: currentUser.address,
        },
        notes: {
          address: currentUser.address,
        },
        theme: {
          color: "#154726",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error in displayRazorpay:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col gap-6 items-start justify-center p-10  md:p-20">
        <div className="instructions flex flex-col items-start justify-center md:p-20 max-w-2xl">
          <h1>Instructions</h1>
          <h5 className="mb-4">Please carefully read through the instructions below.</h5>
          <p>1. Accept the terms and services by checking the box below.</p>
          <p>2. Click on the "Pay Now" button to complete your payment.</p>
          <p>3. After completing the payment fill the form to confirm the shipping address and other details of your order</p>
        </div>
        <div className="w-full flex items-center justify-center ">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">I have read and agree to the </span>
            <a
              href="https://www.enactusvitc.com/terms-of-service"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              terms and services
            </a>
            .
          </label>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="pay-btn" onClick={displayRazorpay}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
