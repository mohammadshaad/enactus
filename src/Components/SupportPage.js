import React from 'react';

const SupportPage = () => {
  return (
    <div className="bg-#17191b text-#fff p-4">
      <h1 className="text-3xl font-bold text-#fecf3e mb-6">Support</h1>
      
      <div className="bg-#000814 p-4 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-#fecf3e mb-4">Contact Information</h2>
        <p className="text-#fff">
          If you need assistance or have any questions, you can reach out to us using the following contact information:
        </p>
        <ul className="list-disc pl-6 text-#fff mt-4">
          <li>Email: <a className="text-#fecf3e hover:underline" href="mailto:enactus.vitc@gmail.com">enactus.vitc@gmail.com</a></li>
          <li>Phone: <a className="text-#fecf3e hover:underline" href="tel:+918903429618">+91 89034 29618</a></li>
        </ul>
      </div>

      <div className="bg-#000814 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-#fecf3e mb-4">FAQs</h2>
        <p className="text-#fff">
          Here are some frequently asked questions about our services:
        </p>
        <ul className="list-disc pl-6 text-#fff mt-4">
          <li>1. How can I get in touch with your support team?</li>
          <li>2. What are your support hours?</li>
          <li>3. How long does it take to receive a response to my inquiry?</li>
        </ul>
      </div>
    </div>
  );
};

export default SupportPage;
