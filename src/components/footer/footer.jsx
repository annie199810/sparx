import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="featured-in">
        <div className="feature">
          <h1>Featured IN</h1>
        </div>
        <div className="box1">
          <img
            src="https://www.sparxitsolutions.com/assets-style/images/guardian.svg"
            alt=""
            width="148"
            height="48"
          ></img>
        </div>
        <div className="box2">
          <img
            src="https://www.sparxitsolutions.com/assets-style/images/forbes.svg"
            alt=""
            width="130px"
            height="50px"
          ></img>
        </div>
        <div className="box3">
          <img
            src="https://www.sparxitsolutions.com/assets-style/images/telegraph.svg"
            alt=""
            width="145px"
            height="24px"
          ></img>
        </div>
      </div>
      <div className="bottom-hr"></div>
      <div className="footer-logo">
        <div className="footer-img">
          <img
            src="https://www.sparxitsolutions.com/assets-style/images/main-logo.svg"
            alt=""
            width="110px"
            height="45px"
          />
        </div>
        <div className="footer-content">
          <div className="who-we-are-menu">
            <p>WHO WE ARE</p>
            <a href="#">About Us</a>
            <a href="#">Founder</a>
            <a href="#">Testimonals</a>
            <a href="#">Life At Sparx</a>
            <div className="carrer">
              <a href="#">Careers</a>
              <button className="hire">Hiring</button>
            </div>
            <a href="#">FAQs</a>
          </div>

          <div className="resources">
            <p>RESOURCES</p>
            <a href="#">Blog</a>
            <a href="#">Guides</a>
            <a href="#">Case Studies</a>
            <a href="#">Portfolio</a>
          </div>

          <div className="dedicated">
            <p>DEDICATED HIRING</p>
            <a href="#">
              Looking to hire for long-term <br /> or full-time assignments?
            </a>
          </div>

          <div className="guide">
            <p>LET US GUIDE YOU</p>
            <a href="#">Prototyping</a>
            <a href="#">MVP</a>
            <a href="#">Startup Incubation Services</a>
            <a href="#">Branding</a>
          </div>
        </div>
        <div className="services-app">
          <p>SERVICES</p>
          <a href="#">Mobile App Development</a>
          <a href="#">iOS App Development </a>
          <a href="#">Android App Development</a>
          <a href="#">React Native App Development</a>
          <a href="#">Flutter App Development</a>
          <a href="#">Web Design</a>
          <a href="#">eCommerce Development</a>
          <a href="#">Magento Development</a>
          <a href="#">PHP Development</a>
          <a href="#">WordPress Development</a>
          <a href="#">Blockchain Development</a>
          <a href="#">Internet of Things(IoT)</a>
        </div>

        <div className="contact-menu">
          <p>CONTACT</p>
          <div className="country-india">
            <img
              src="https://www.sparxitsolutions.com/assets-style/images/india-flag.svg"
              alt=""
              width="20"
              height="13.3"
            />
            <h4>India Office</h4>
          </div>
          <h5>
            H-21, First Floor, Sector-63, Noida,
            <br /> Uttar Pradesh 201301,
          </h5>
          <a href="#">tel:+919810230650</a>

          <div className="country-usa">
            <img
              src="https://www.sparxitsolutions.com/assets-style/images/us-flag.svg"
              alt=""
              width="20"
              height="13.3"
            />
            <h4>USA Office</h4>
          </div>
          <h5>
            PMB #6020, 477 Madison Ave 6th FL,
            <br />
            New York, NY 10022,
          </h5>
          <a href="#">tel:+19177759550</a>

          <div className="country-uk">
            <img
              src="https://www.sparxitsolutions.com/assets-style/images/uk-flag.svg"
              alt=""
              width="20"
              height="13.3"
            />
            <h4>UK Office</h4>
          </div>
          <h5>
            Kemp House, 152 - 160 City Road,
            <br />
            London EC1V 2NX UK
          </h5>
          <a href="#">tel:+442032397499</a>
        </div>
      </div>
      <div className="bottom-footer"></div>
      <div className="bottom">
        <div className="copyright">
          <h6>
            ©2007-2022 Sparx IT Solutions. <br />
            All Rights Reserved.
          </h6>
        </div>
        <div className="use">
          <h6>Term Of Use</h6>
        </div>
        <div className="policy">
          <h6>Privacy Policy</h6>
        </div>
        <div className="linkedin">
          <img src="" alt=" " width="20px" height="21px" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
