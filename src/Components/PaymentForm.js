import React, { useContext } from "react";
import { useAuth } from "../Global/AuthContext";
import { CartContext } from "../Global/CartContext";
import axios from "axios";
import logo from "../images/enactus-logo-gray.png";

function PaymentForm() {
  const { currentUser } = useAuth();
  const { totalPrice } = useContext(CartContext);

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

  const displayRazorpay = async () => {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
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
        alert("Server error while creating order. Are you online?");
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
          contact: "1234567890",
        },
        notes: {
          address: "Enactus Corporate Office",
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
    <div className="">
      <header className="">
        <button className="" onClick={displayRazorpay}>
          Pay Now
        </button>
      </header>
    </div>
  );
}

export default PaymentForm;
