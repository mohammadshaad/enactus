import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-#17191b text-#fff p-4">
      <h1 className="text-3xl font-bold text-#fecf3e mb-6">Terms of Service</h1>

      <div className="bg-#000814 p-4 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-#fecf3e mb-4">Acceptance of Terms</h2>
        <p className="text-#fff">
          By using our website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
        </p>
      </div>

      <div className="bg-#000814 p-4 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-#fecf3e mb-4">User Conduct</h2>
        <p className="text-#fff">
          You agree not to use the website for any unlawful purpose or any purpose prohibited by these terms. You may not use the website in any manner that could damage, disable, or impair the website.
        </p>
      </div>

      <div className="bg-#000814 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-#fecf3e mb-4">Intellectual Property</h2>
        <p className="text-#fff">
          The content of this website is protected by copyright and other laws, and you may not copy or use the content without written permission.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
