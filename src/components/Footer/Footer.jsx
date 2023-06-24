import React from "react";
import "./Footer.css"
import { FaTwitter, FaFacebook, FaInstagram, FaMap } from "react-icons/fa";


// const Container = styled.div`
//   height: 250px;
// `
// const Container = styled.div`
//   /* width: 100%; */
//   min-height: 250px;
//   background: black;
//   padding: 20px;
//   font-family: sans-serif;
//   /* position: relative; */
// `;
// const SectionWrapper = styled.div`
//   display: flex;
//   color: white;
//   justify-content: center;
//   gap: 100px;
//   flex-wrap: wrap;
// `;
// const FooterSection = styled.div``;
// const SectionHead = styled.h3`
//   margin-bottom: 20px;
//   letter-spacing: 1.2px;
//   font-weight: bold;

//   font-size: 16px;
// `;
// const SectionItems = styled.ul`
//   list-style: none;
// `;
// const SectionItem = styled.li`
//   margin-bottom: 10px;
//   line-height: 18px;
//   font-size: 16px;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;
// const Location = styled.div`
//   color: white;
//   text-align: center;
//   margin-top: 20px;
//   margin-bottom: 40px;
// `;
// const Text = styled.span``;
// const OtherSection = styled.div`
//   display: flex;
//   opacity: 50%;
//   color: #f5f5f5;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 50px;
//   ${Text} {
//     min-width: 300px;
//     text-align: center;
//     cursor: pointer;
//   }
// `;

// const Icon = styled.span`
//   /*    */
//   margin-right: 10px;
// `;
const Footer = () => {
  return (

    <div className="container">
      <div className="section-wrapper">
        <div className="footer-section">
          <h3 className="section-head">COMPANY INFO</h3>
          <ul className="section-items">
            <li className="section-item">About Us</li>
            <li className="section-item">Investors</li>
            <li className="section-item">Other Ventures</li>
            <li className="section-item">Careers</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="section-head">GET HELP</h3>
          <ul className="section-items">
            <li className="section-item">Faqs</li>
            <li className="section-item">Order Canellation</li>
            <li className="section-item">Shipping & Delivery</li>
            <li className="section-item">Return</li>
            <li className="section-item">Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="section-head">JOIN US</h3>
          <ul className="section-items">
            <li className="section-item">Become a Seller</li>
            <li className="section-item">Become a Tutor</li>
            <li className="section-item">Bring Ideas</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="section-head">FOLLOW US</h3 >
          <ul className="section-items">
            <li className="footer-section">
              <span className="icon">
                <FaFacebook />
              </span>
              <span>Facebook</span>
            </li>
            <li className="footer-section">
              <span className="icon">
                <FaInstagram />
              </span>
              <span>Instagram</span>
            </li>
            <li className="footer-section">
              <span className="icon">
                <FaTwitter />
              </span>
              <span>Twitter</span>
            </li>
          </ul>
        </div>
      </div >
      <div className="location">
        <span className="icon">
          <FaMap />
        </span>
        <span>27 Zone 3, Wakajaiye, Ibadan, Nigeria</span>
      </div >
      <div className="other-section">
        <span>&#169; TheFactory, Inc. All Rights Reserved</span>
        <span>Terms of Use</span>
        <span>Privacy and Cookie Policy</span>
      </div >
    </div>
  );
};

export default Footer;
