import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 8 : (prev) => prev - 1); //currentSlide-1
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 8 ? 0 : (prev) => prev + 1); //currentSlide-1
  };

  const data = [
    "https://i.pinimg.com/564x/cd/f5/31/cdf531c99607db2ac15e4915f6b7409e.jpg",
    "https://i.pinimg.com/564x/87/39/1b/87391bb40afb200565a2ab40d0dc7d75.jpg",
    "https://i.pinimg.com/564x/f9/a4/7e/f9a47ec7a3f8af67d3a99548305a35e2.jpg",
    "https://i.pinimg.com/564x/d3/9f/a4/d39fa4971ca47bcf4475b2788a9cd740.jpg",
    "https://i.pinimg.com/564x/13/ed/47/13ed47835c1571af3e498b07dcaf109e.jpg",
    'https://i.pinimg.com/564x/2c/0a/38/2c0a388cdfd2b69dfb3c3253aec631ee.jpg',
    "https://i.pinimg.com/564x/9f/de/e8/9fdee8df15345713071eb1903ea29639.jpg",
    "https://i.pinimg.com/736x/87/79/4c/87794ce2a4024179c7e74a798cb06a4c.jpg",
    'https://i.pinimg.com/564x/3b/0a/f4/3b0af42796dcd1c3948c09e551723721.jpg'
  ];
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 77}vh)` }}
      >
        <img src={data[0]} alt=""></img>
        <img src={data[1]} alt=""></img>
        <img src={data[2]} alt=""></img>
        <img src={data[3]} alt=""></img>
        <img src={data[4]} alt=""></img>
        <img src={data[5]} alt=""></img>
        <img src={data[6]} alt=""></img>
        <img src={data[7]} alt=""></img>
        <img src={data[8]} alt=""></img>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
