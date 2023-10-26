import React from "react";
import Logo from "../images/enactus-logo-gray.png";

const ContactUs = () => {
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
            <div className="p-2">
              <img src={Logo} alt="logo" className="" />
            </div>
          </div>
          <p className="header-text">ENACTUS VIT CHENNAI</p>
        </div>
        <div className="compalinace-content">
          <div className="content-container">
            <p className="content-head">Contact us</p>
            <div className="content-seprater" />
            <p className="updated-date">Last updated on Oct 27th 2023</p>
            <p className="content-text">
              You may contact us using the information below:
            </p>
            <p className="content-text">
              Merchant Legal entity name: Enactus VIT Chennai
              <br />
              Registered Address: Kelambakkam - Vandalur Rd, Rajan Nagar,
              Chennai, Tamil Nadu 600127 Chennai TAMIL NADU 600127
              <br />
              Telephone No: <br />
              E-Mail ID: enactus.vitc@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
