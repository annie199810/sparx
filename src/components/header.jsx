import React from "react";
import { useEffect } from "react";
// import amdoc from "../assets/icons/amdoc.svg";
// import bpl from "../assets/icons/bpl.svg";
// import bupa from "../assets/icons/bupa.svg";
// import cairn from "../assets/icons/cairn.svg";
// import circle from "../assets/icons/circle.svg";
// import cleartrip from "../assets/icons/cleartrip.svg";
// import dlink from "../assets/icons/dlink.svg";
// import energy from "../assets/icons/energy.svg";
// import hisense from "../assets/icons/hisence.svg";
// import hp from "../assets/icons/hp.svg";
// import huawei from "../assets/icons/huawei.svg";
// import intel from "../assets/icons/intel.svg";
// import motorola from "../assets/icons/motorola.svg";
// import necco from "../assets/icons/necco.svg";
// import suzuki from "../assets/icons/suzuki.svg";
// import vedanta from "../assets/icons/vedanta.svg";

// const icon = [
//   amdoc,
//   bpl,
//   bupa,
//   cairn,
//   circle,
//   cleartrip,
//   dlink,
//   energy,
//   hisense,
//   hp,
//   huawei,
//   intel,
//   motorola,
//   necco,
//   suzuki,
//   vedanta,
// ];
// const delay = 2500;
const Head = () => {
  return (
    <div className="header">
      <div className="main-logo">
        <img
          src="https://www.sparxitsolutions.com/assets-style/images/main-logo.svg"
          alt=""
          width="110px"
          height="45px"
        ></img>
        <p className="para">
          Over 500+ satisfied customers from SMB`s to Fortune 500 companies
        </p>
        <div className="brand"></div>

        {/* <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {icon.map((icon, index) => (
              <div className="slide" key={index} style={{ icon }}></div>
            ))}
          </div>

          <div className="slideshowDots">
            {icon.map((_, idx) => (
              <div key={idx} className="slideshowDot"></div>
            ))}
          </div>
        </div> */}
        <div className="services">
          <button className="service-btn">Services</button>
          <div className="service-content">
            <div className=" show-service-content">
              <div className="app">
                <h4>App Development</h4>
                <a href="#"> Mobile App Development</a>
                <a href="#">Hybrid App</a>
                <a href="#">Wearable App</a>
                <a href="#"> App maintenance</a>
                <a href="#">Quality Assurance</a>
              </div>
              <div className="blockchain">
                <h4>Blockchain</h4>
                <a href="#"> Blockchain Development</a>
                <a href="#"> DApp</a>
                <a href="#"> Smart Contracts</a>
                <a href="#">DeFi</a>
                <a href="#"> Enterprise Blockchain</a>
                <a href="#"> Wallets</a>
                <a href="#"> Exchanges</a>
                <a href="#"> NFT</a>
                <a href="#">Metaverse</a>
              </div>
              <div className="startup">
                <h4>Startup Services</h4>
                <a href="#"> Prototyping</a>
                <a href="#">MVP</a>
                <a href="#"> Startup Incubation Services</a>
                <a href="#">Branding</a>
              </div>
              <div className="side-grid">
                <div className="data">
                  <h4>Data Intelligence</h4>
                </div>
                <div className="sales">
                  <h4>Salesforce Development</h4>
                </div>
                <div className="dev">
                  <h4>DevOps Automation</h4>
                </div>
                <div className="GDPR">
                  <h4>GDPR</h4>
                </div>
              </div>
              <div className="ecom">
                <h4>eCommerce Development</h4>
                <a href="#">eCommerce Web Development</a>
                <a href="#">eCommerce App development </a>
              </div>
              <div className="design">
                <h4>Website Design & Development </h4>
                <a href="#">Web Design</a>
                <a href="#">Website Development</a>
              </div>
            </div>
          </div>
        </div>
        <div className="technologies">
          <button className="tech-btn">Tehnologies</button>
          <div className="tech-content">
            <div className=" show-tech-content">
              <div className="mobile">
                <h4>Mobile</h4>
                <a href="#"> iOS App </a>
                <a href="#"> Android App</a>
                <a href="#"> React Native App</a>
                <a href="#"> Flutter</a>
                <a href="#"> Progressive Web App</a>
              </div>
              <div className="web">
                <h4>Web 3.0</h4>
                <a href="#"> Blockchain</a>
                <a href="#"> Aritifical Intelligence</a>
                <a href="#"> Argumented Reality</a>
                <a href="#"> Virtual Reality</a>
                <a href="#"> Machine Learning</a>
              </div>
              <div className="CMS">
                <h4>CMS</h4>
                <a href="#">Shopify</a>
                <a href="#">WordPress</a>
                <a href="#">Magento</a>
                <a href="#"> Prestashop</a>
                <a href="#"> Drupal</a>
                <a href="#"> Fronted</a>
                <a href="#"> React js</a>
                <a href="#">Angular js</a>
              </div>
              <div className="backend">
                <h4>Backend</h4>
                <a href="#"> Node js</a>
                <a href="#"> Python</a>
                <a href="#"> PHP</a>
                <a href="#">Java</a>
              </div>
              <div className="cloud">
                <h4>Cloud</h4>
                <a href="#"> AWS</a>
                <a href="#"> Azure</a>
                <a href="#"> Bitrix</a>
              </div>
              <div className="fullstack">
                <h4>Full Stack</h4>
                <a href="#"> MERN Stack</a>
                <a href="#"> MEAN Stack</a>
                <a href="#">ROR</a>
              </div>
            </div>
          </div>
        </div>

        <div className="offshore">
          <button className="off-btn">Offshore DS ®</button>
          <div className="off-content">
            <div className=" show-off-content">
              <div className="Hire-App">
                <h4>Hire App Developer</h4>
                <a href="#">iOS </a>
                <a href="#"> Android </a>
                <a href="#"> App Developer</a>
                <a href="#"> Swift</a>
                <a href="#"> React Native</a>
                <a href="#">Flutter</a>
                <a href="#"> PWA</a>
              </div>
              <div className="Hire-Web">
                <h4>Hire Web Developer</h4>
                <a href="#"> Shopify</a>
                <a href="#"> WordPress</a>
                <a href="#"> Magento</a>
                <a href="#"> Prestashop</a>
                <a href="#"> Drupal</a>
                <a href="#"> Web Developer</a>
                <a href="#"> PHP</a>
                <a href="#"> Python</a>
              </div>
              <div className="Hire-JS">
                <h4>Hire JS Developer</h4>
                <a href="#"> Node JS </a>
                <a href="#"> React JS </a>
                <a href="#"> Angular JS </a>
                <a href="#"> Javascript Developer</a>
              </div>
              <div className="offshore">
                <h4>Offshore Development</h4>
                <a href="#"> offshore Developer Service</a>
                <a href="#"> Team Outsourcing</a>
                <a href="#"> Staff Augmentation</a>
                <a href="#"> Virtual CTO</a>
                <a href="#">Developer Cost Optimization</a>
              </div>
              <div className="Hire-Full">
                <h4>Hire Full Stack Developer</h4>
                <a href="#"> MERN </a>
                <a href="#"> MEAN</a>
                <a href="#"> Full Stack</a>
              </div>
              <div className="Hire-Block">
                <h4>Hire Blockchain Developer</h4>
                <a href="#">Blockchain Developer</a>
              </div>
              <div className="AR">
                <a href="#"> AR Developers </a>
                <a href="#"> VR Developers </a>
                <a href="#"> ML Developers </a>
                <a href="#"> Salesforce Developer </a>
              </div>
              <div className="UI">
                <h4>Hire UI/UX Designer</h4>
                <a href="#"> Hire Web Designer </a>
                <a href="#"> Interface Designer </a>
                <a href="#"> UI/UX Designer </a>
              </div>
            </div>
          </div>
        </div>

        <div className="industries">
          <button className="industries-btn">Industries</button>
          <div className="industries-content">
            <div className=" show-industries-content">
              <div className="ind">
                <a href="#"> FinTech</a>
                <a href="#"> Edtech </a>
                <a href="#"> HealthCare </a>
                <a href="#"> Logistics</a>
                <a href="#"> ecommerce</a>
                <a href="#"> Saas</a>
                <a href="#"> Entertainment</a>
                <a href="#"> Travel</a>
                <a href="#"> Wellness</a>
                <a href="#"> Social Media</a>
              </div>
            </div>
          </div>
        </div>
        <div className="work">
          <button className="work-btn">Work</button>
          <div className="work-content">
            <div className=" work-off-content">
              <a href="#w1">
                <h4>Portfolio</h4>
              </a>
              <a href="#w2">
                <h4>Case Studies</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="who-we-are">
          <button className="who-we-are-btn">Who We Are</button>
          <div className="who-we-are-content">
            <div className=" show-who-content">
              <div className="who">
                <a href="#"> About</a>
                <a href="#"> Founder </a>
                <a href="#"> Blog </a>
                <a href="#"> Carrer</a>
                <a href="#"> Testimonals</a>
              </div>
            </div>
          </div>
        </div>
        <div className="btn">
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Head;
