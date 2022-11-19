import React from "react";

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
              <div className="ecom">
                <h4>eCommerce Development</h4>
                <p>eCommerce Web Development</p>
                <p>eCommerce App development </p>
              </div>
              <div className="design">
                <h4>Website Design & Development </h4>
                <p>Web Design</p>
                <p>Website Development</p>
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
              <a href="#i111">
                <h4>Hire App Developer</h4>
                <p>iOS </p>
                <p>Android </p>
                <p>App Developer</p>
                <p>Swift</p>
                <p>React Native</p>
                <p>Flutter</p>
                <p>PWA</p>
              </a>
              <a href="#i112">
                <h4>Hire Web Developer</h4>
                <p>Shopify</p>
                <p>WordPress</p>
                <p>Magento</p>
                <p>Prestashop</p>
                <p>Drupal</p>
                <p>web Developer</p>
                <p>PHP</p>
                <p>Python</p>
              </a>
              <a href="#i113">
                <h4>Hire JS Developer</h4>
                <p>Node JS</p>
                <p>React JS</p>
                <p>Angular JS</p>
                <p>Javascript Developer</p>
              </a>
              <a href="#i114">
                <h4>Offshore Development</h4>
                <p>offshore Developer Service</p>
                <p>Team Outsourcing</p>
                <p>Staff Augmentation</p>
                <p>Virtual CTO</p>
                <p>Developer Cost Optimization</p>
              </a>
              <a href="#i115">
                <h4>Hire Full Stack Developer</h4>
                <p>MERN</p>
                <p>MEAN</p>
                <p>Full Stack</p>
              </a>
              <a href="#i116">
                <h4>Hire Blockchain Developer</h4>
                <p>Blockchain Developer</p>
              </a>
              <a href="#i117">
                <p>AR Developers</p>
                <p>VR Developers</p>
                <p>ML Developers</p>
                <p>Salesforce Developer</p>
              </a>
              <a href="#i118">
                <h4>Hire UI/UX Designer</h4>
                <p>Hire Web Designer</p>
                <p>Interface Designer</p>
                <p>UI/UX Designer</p>
              </a>
            </div>
          </div>
        </div>

        <div className="industries">
          <button className="industries-btn">Industries</button>
          <div className="industries-content">
            <div className=" show-industries-content">
              <a href="#ind1">
                <p>FinTech</p>
                <p>Edtech </p>
                <p>HealthCare </p>
                <p>Logistics</p>
                <p>ecommerce</p>
                <p>Saas</p>
                <p>Entertainment</p>
                <p>Travel</p>
                <p>Wellness</p>
                <p>Social Media</p>
              </a>
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
              <a href="#who1">
                <p>About</p>
                <p>Founder </p>
                <p>Blog </p>
                <p>Carrer</p>
                <p>Testimonals</p>
              </a>
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
