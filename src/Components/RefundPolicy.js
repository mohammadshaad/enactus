import React from "react";
import Logo from "../images/enactus-logo-gray.png";

const RefundPolicy = () => {
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
            <div className="">
              <img src={Logo} alt="logo" className="" />
            </div>
          </div>
          <p className="header-text">ENACTUS VIT CHENNAI</p>
        </div>
        <div className="compalinace-content">
          <div className="content-container">
            <p className="content-head">Cancellation &amp; Refund Policy</p>
            <div className="content-seprater" />
            <p className="updated-date">Last updated on Oct 27th 2023</p>
            <p className="content-text">
              Enactus VIT Chennai believes in helping its customers as far as
              possible, and has therefore a liberal cancellation policy. Under
              this policy:
            </p>
            <ul className="unorder-list">
              <li className="list-item">
                <p className="content-text list-text">
                  Cancellations will be considered only if the request is made
                  immediately after placing the order. However, the cancellation
                  request may not be entertained if the orders have been
                  communicated to the vendors/merchants and they have initiated
                  the process of shipping them.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  Enactus VIT Chennai does not accept cancellation requests for
                  perishable items like flowers, eatables etc. However,
                  refund/replacement can be made if the customer establishes
                  that the quality of product delivered is not good.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  In case of receipt of damaged or defective items please report
                  the same to our Customer Service team. The request will,
                  however, be entertained once the merchant has checked and
                  determined the same at his own end. This should be reported
                  within 2 days of receipt of the products.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  In case you feel that the product received is not as shown on
                  the site or as per your expectations, you must bring it to the
                  notice of our customer service within 2 days of receiving the
                  product. The Customer Service Team after looking into your
                  complaint will take an appropriate decision.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  In case of complaints regarding products that come with a
                  warranty from manufacturers, please refer the issue to them.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  In case of any Refunds approved by the Enactus VIT Chennai,
                  it’ll take 1-2 days for the refund to be processed to the end
                  customer.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
