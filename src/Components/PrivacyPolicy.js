import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-#17191b text-#fff p-4">
      <h1 className="text-3xl font-bold text-#fecf3e mb-6">Privacy Policy</h1>
      <div className="bg-#000814 p-4 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-#fecf3e mb-4">Information We Collect</h2>
        <p className="text-#fff">
          We collect personal information you voluntarily provide to us, such as your name and email address when you subscribe to our newsletter or fill out a contact form.
        </p>
      </div>

      <div className="bg-#000814 p-4 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-#fecf3e mb-4">How We Use Your Information</h2>
        <p className="text-#fff">
          We may use your information to contact you with newsletters, marketing, or promotional materials. You can opt out of these communications at any time.
        </p>
      </div>

      <div className="bg-#000814 p-4 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-#fecf3e mb-4">Cookies</h2>
        <p className="text-#fff">
          We use cookies to improve your experience on our website. You can set your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>
      </div>

      <div className="bg-#000814 p-4 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-#fecf3e mb-4">Your Rights</h2>
        <p className="text-#fff">
          You have the right to access, update, or delete your personal information. If you would like to do so, please contact us.
        </p>
      </div>

      <div className="bg-#000814 p-4 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-#fecf3e mb-4">Changes to this Privacy Policy</h2>
        <p className="text-#fff">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
      </div>

      <div className="bg-#000814 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-#fecf3e mb-4">Contact Us</h2>
        <p className="text-#fff">
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a className="text-#fecf3e hover:underline" href="mailto:enactus.vitc@gmail.com">enactus.vitc@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
