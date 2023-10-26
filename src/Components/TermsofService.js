import React from "react";
import Logo from "../images/enactus-logo-gray.png";

const TermsofService = () => {
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
            <p className="content-head">Terms &amp; Conditions</p>
            <div className="content-seprater" />
            <p className="updated-date">Last updated on Oct 27th 2023</p>
            <p className="content-text">
              The Website Owner, including subsidiaries and affiliates
              (“Website” or “Website Owner” or “we” or “us” or “our”) provides
              the information contained on the website or any of the pages
              comprising the website (“website”) to visitors (“visitors”)
              (cumulatively referred to as “you” or “your” hereinafter) subject
              to the terms and conditions set out in these website terms and
              conditions, the privacy policy and any other relevant terms and
              conditions, policies and notices which may be applicable to a
              specific section or module of the website.
            </p>
            <p className="content-text">
              Welcome to our website. If you continue to browse and use this
              website you are agreeing to comply with and be bound by the
              following terms and conditions of use, which together with our
              privacy policy govern Enactus VIT Chennai''s relationship with you
              in relation to this website.
            </p>
            <p className="content-text">
              The term 'Enactus VIT Chennai' or 'us' or 'we' refers to the owner
              of the website whose registered/operational office is Kelambakkam
              - Vandalur Rd, Rajan Nagar, Chennai, Tamil Nadu 600127 Chennai
              TAMIL NADU 600127. The term 'you' refers to the user or viewer of
              our website.
            </p>
            <p className="content-text">
              <strong>
                The use of this website is subject to the following terms of
                use:
              </strong>
            </p>
            <ul className="unorder-list">
              <li className="list-item">
                <p className="content-text list-text">
                  The content of the pages of this website is for your general
                  information and use only. It is subject to change without
                  notice.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  Neither we nor any third parties provide any warranty or
                  guarantee as to the accuracy, timeliness, performance,
                  completeness or suitability of the information and materials
                  found or offered on this website for any particular purpose.
                  You acknowledge that such information and materials may
                  contain inaccuracies or errors and we expressly exclude
                  liability for any such inaccuracies or errors to the fullest
                  extent permitted by law.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  Your use of any information or materials on this website is
                  entirely at your own risk, for which we shall not be liable.
                  It shall be your own responsibility to ensure that any
                  products, services or information available through this
                  website meet your specific requirements.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  This website contains material which is owned by or licensed
                  to us. This material includes, but is not limited to, the
                  design, layout, look, appearance and graphics. Reproduction is
                  prohibited other than in accordance with the copyright notice,
                  which forms part of these terms and conditions.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  All trademarks reproduced in this website which are not the
                  property of, or licensed to, the operator are acknowledged on
                  the website.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  Unauthorized use of this website may give rise to a claim for
                  damages and/or be a criminal offense.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  From time to time this website may also include links to other
                  websites. These links are provided for your convenience to
                  provide further information.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  You may not create a link to this website from another website
                  or document without Enactus VIT Chennai’s prior written
                  consent.
                </p>
              </li>
              <li className="list-item">
                <p className="content-text list-text">
                  Your use of this website and any dispute arising out of such
                  use of the website is subject to the laws of India or other
                  regulatory authority.
                </p>
              </li>
            </ul>
            <p className="content-text">
              We as a merchant shall be under no liability whatsoever in respect
              of any loss or damage arising directly or indirectly out of the
              decline of authorization for any Transaction, on Account of the
              Cardholder having exceeded the preset limit mutually agreed by us
              with our acquiring bank from time to time
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsofService;
