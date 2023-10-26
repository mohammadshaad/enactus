import React from "react";
import Logo from "../images/enactus-logo-gray.png";

const PrivacyPolicy = () => {
  return (
    <>
      {/* Responsive meta tag */}
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        body { margin: 0; }\n        .header-conatiner { display: flex; align-items: center; padding: 24px; }\n        .header-text { font-size: 18px; line-height: 24px; color: #fff; margin: 0 0 0 18px; }\n        .compalinace-page { background: #17191b; font-family: Lato, sans-serif; font-style: normal; font-weight: 400; }\n        @media screen and (min-width: 768px) { .content-container { margin: 0 auto; max-width: 1000px; } .header-conatiner { margin: 0 auto; max-width: 1000px; } }\n        .compalinace-content { background: #ffffff; border-radius: 32px 32px 0 0; padding: 32px 24px; }\n        .content-head { font-size: 24px; line-height: 30px; color: #213554; margin: 0; font-weight: 700;}\n        .content-seprater { width: 28px; height: 5px; background-color: #17191b; margin-top: 16px; }\n        .updated-date { margin: 16px 0 0; color: #213554ab; font-weight: 700;}\n        .content-text { color: #515978; margin: 16px 0 0; }\n        .content-text { font-size: 14px; line-height: 20px; }\n        .merchant-logo { width: 74.6px; height: 64px; border-radius: 8px; display: flex; justify-content: center; align-items: center; }\n        @media screen and (max-width: 330px) { .merchant-logo { width: 87px; } }\n        @media all and (min-width: 768px), (min-width: 383px) { .merchant-logo { width: 64px; } }\n        .logo-container { display: flex; justify-content: center; align-items: center; width: 200px; height: 60px; background: white;  border-radius: 100%; }\n        .logo-text {color: #fff; font-weight: 700; font-size: 32px; }\n        .list-item { display: list-item; padding-left: 5px; }\n        .unorder-list { margin: 0; }\n        .list-text { margin-top: 8px; }\n    ",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: "\n            .content-head { font-size: 20px; }\n        ",
        }}
      />
      <div className="compalinace-page">
        <div className="header-conatiner">
          <div className="merchant-logo">
            <div className="logo-container">
              <div className="p-2">
                <img src={Logo} alt="logo" className="" />
              </div>
            </div>
          </div>
          <p className="header-text">ENACTUS VIT CHENNAI</p>
        </div>
        <div className="compalinace-content">
          <div className="content-container">
            <p className="content-head">Privacy Policy</p>
            <div className="content-seprater" />
            <p className="updated-date">Last updated on Oct 26th 2023</p>
            <p className="content-text">
              This privacy policy sets out how Enactus VIT Chennai uses and
              protects any information that you give Enactus VIT Chennai when
              you use this website.
            </p>
            <p className="content-text">
              Enactus VIT Chennai is committed to ensuring that your privacy is
              protected. Should we ask you to provide certain information by
              which you can be identified when using this website, and then you
              can be assured that it will only be used in accordance with this
              privacy statement.
            </p>
            <p className="content-text">
              Enactus VIT Chennai may change this policy from time to time by
              updating this page. You should check this page from time to time
              to ensure that you are happy with any changes.
            </p>
            <p className="content-text">
              <strong>We may collect the following information:</strong>
            </p>
            <ul className="unorder-list">
              <li className="list-item">
                <p className="content-text list-text">Name and job title</p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  Contact information including email address
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  Demographic information such as postcode, preferences and
                  interests
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  Other information relevant to customer surveys and/or offers
                </p>
              </li>
            </ul>
            <p className="content-text">
              <strong>What we do with the information we gather</strong>
            </p>
            <p className="content-text">
              We require this information to understand your needs and provide
              you with a better service, and in particular for the following
              reasons:
            </p>
            <ul className="unorder-list">
              <li className="list-item">
                <p className="content-text list-text">
                  Internal record keeping.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  We may use the information to improve our products and
                  services.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  We may periodically send promotional emails about new
                  products, special offers or other information which we think
                  you may find interesting using the email address which you
                  have provided.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  From time to time, we may also use your information to contact
                  you for market research purposes. We may contact you by email,
                  phone, fax or mail. We may use the information to customise
                  the website according to your interests.
                </p>
              </li>
            </ul>
            <p className="content-text">
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorised access or disclosure we have put in
              suitable measures.
            </p>
            <p className="content-text">
              <strong>How we use cookies</strong>
            </p>
            <p className="content-text">
              A cookie is a small file which asks permission to be placed on
              your computer's hard drive. Once you agree, the file is added and
              the cookie helps analyses web traffic or lets you know when you
              visit a particular site. Cookies allow web applications to respond
              to you as an individual. The web application can tailor its
              operations to your needs, likes and dislikes by gathering and
              remembering information about your preferences.
            </p>
            <p className="content-text">
              We use traffic log cookies to identify which pages are being used.
              This helps us analyses data about webpage traffic and improve our
              website in order to tailor it to customer needs. We only use this
              information for statistical analysis purposes and then the data is
              removed from the system.
            </p>
            <p className="content-text">
              Overall, cookies help us provide you with a better website, by
              enabling us to monitor which pages you find useful and which you
              do not. A cookie in no way gives us access to your computer or any
              information about you, other than the data you choose to share
              with us.
            </p>
            <p className="content-text">
              You can choose to accept or decline cookies. Most web browsers
              automatically accept cookies, but you can usually modify your
              browser setting to decline cookies if you prefer. This may prevent
              you from taking full advantage of the website.
            </p>
            <p className="content-text">
              <strong>Controlling your personal information</strong>
            </p>
            <p className="content-text">
              You may choose to restrict the collection or use of your personal
              information in the following ways:
            </p>
            <ul className="unorder-list">
              <li className="list-item">
                <p className="content-text list-text">
                  whenever you are asked to fill in a form on the website, look
                  for the box that you can click to indicate that you do not
                  want the information to be used by anybody for direct
                  marketing purposes
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  if you have previously agreed to us using your personal
                  information for direct marketing purposes, you may change your
                  mind at any time by writing to or emailing us at
                  enactus.vitc@gmail.com
                </p>
              </li>
            </ul>
            <p className="content-text">
              We will not sell, distribute or lease your personal information to
              third parties unless we have your permission or are required by
              law to do so. We may use your personal information to send you
              promotional information about third parties which we think you may
              find interesting if you tell us that you wish this to happen.
            </p>
            <p className="content-text">
              If you believe that any information we are holding on you is
              incorrect or incomplete, please write to or email us as soon as
              possible, at the above address. We will promptly correct any
              information found to be incorrect.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
