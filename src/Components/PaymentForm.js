// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import axios from "axios";
// import React, { useState } from "react";

// export default function PaymentForm() {
//   const [success, setSuccess] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (!error) {
//       try {
//         const { id } = paymentMethod;
//         const response = await axios.post("http://localhost:8000/payment", {
//           amount: 10000,
//           id,
//         });

//         if (response.data.requiresAction) {

//           const { error: confirmError } = await stripe.confirmPayment(
//             response.data.clientSecret,
//             {
//               payment_method: {
//                 card: elements.getElement(CardElement),
//               },
//             }
//           );

//           if (confirmError) {
//             console.log("Error confirming payment", confirmError);
//           } else {
//             console.log("Payment confirmed successfully");
//             setSuccess(true);
//           }
//         } else if (response.data.success) {
//           console.log("Successful payment");
//           setSuccess(true);
//         }
//       } catch (error) {
//         console.log("Error", error);
//       }
//     } else {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white">
//       {!success ? (
//         <form onSubmit={handleSubmit} className="space-y-4 h-full">
//           <div className="space-y-2">
//             <CardElement className="p-2 border rounded-md" />
//           </div>
//           <button className="w-full px-4 py-2 pay-btn transition duration-300 ease-in-out">
//             Pay
//           </button>
//         </form>
//       ) : (
//         <div className="text-center">
//           <h2 className="text-xl font-semibold">
//             You just bought a sweet product! Congratulations, this is the best
//             decision of your life.
//           </h2>
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";
import axios from "axios";
import logo from "../images/enactus-logo-gray.png";

function PaymentForm() {

  function loadScript(src) {
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
  }
  
  async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );
  
    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }
  
    // creating a new order
    const result = await axios.post("http://localhost:8080/payment/orders");
  
    if (!result) {
        alert("Server error. Are you online?");
        return;
    }
  
    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;
  
    const options = {
        key: "rzp_test_r6FiJfddJh76SI", // Enter the Key ID generated from the Dashboard
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
  
            const result = await axios.post("http://localhost:8080/payment/success", data);
  
            alert(result.data.msg);
        },
        prefill: {
            name: "Mohammad Shaad",
            email: "shaad@google.com",
            contact: "123456789",
        },
        notes: {
            address: "Shaad Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Buy React now!</p>
        <button className="App-link" onClick={displayRazorpay}>
          Pay ₹500
        </button>
      </header>
    </div>
  );
}

export default PaymentForm;
