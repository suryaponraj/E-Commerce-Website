import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Welcome to Antony's DreamDeals! Discover a seamless online shopping
            experience with us. We offer a wide range of high-quality products,
            from fashion and beauty to home essentials and electronics. Happy shopping!
          </span>
        </div>
        <div className="item">
          <h1>Content</h1>
          <span>
            Join our community of happy customers and indulge in the joy of
            online shopping. With Antony's DreamDeals, you can trust in our
            reliable service, extensive product range, and commitment to your
            satisfaction. Start exploring now and experience the convenience and
            excitement of finding the perfect products right at your fingertips.
            Happy shopping!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Antony's DreamDeals</span>
          <span className="copyright">
            © Copyright 2023.All rights reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/gateway.png" alt="" style={{ width: "200px" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
