import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">Thank you for your purchase. Your payment was successful.</p>
        <div className="flex items-center justify-center">
          <Link to="/" className="pay-btn text-center">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
