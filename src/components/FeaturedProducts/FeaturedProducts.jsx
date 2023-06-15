import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/eb/15/bb/eb15bb02b4deb091e3492d8026bb0db7.jpg",
      img2: "https://i.pinimg.com/736x/e0/07/97/e00797f1763323120c91d17caaf95ce3.jpg",
      title: "Combo Dresses",
      isNew: true,
      oldPrice: 800,
      price: 720,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/f0/47/11/f047112b624a10501e1c3c9c6eb54328.jpg",
      img2: "https://i.pinimg.com/564x/2d/15/cd/2d15cd6ae032ffb7d03552e141c90aed.jpg",
      title: "Winter Bag",
      isNew: false,
      oldPrice: 1500,
      price: 1400,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/3c/b0/7e/3cb07ebe6ee4e6f52ecf166b00a553fe.jpg",
      img2: "https://i.pinimg.com/564x/00/dd/d8/00ddd838b519084802c7a9ba8f8231bf.jpg",
      title: "Animal Hooded Towels",
      isNew: false,
      oldPrice: 800,
      price: 720,
    },
    {
        id: 4,
        img: "https://i.pinimg.com/564x/14/5c/69/145c69659e58e90b9da6e77eb1c01a3f.jpg",
        img2: "https://i.pinimg.com/564x/bb/14/b0/bb14b0ef76eab6f52375862b7407152d.jpg",
        title: "Baby BeanBag",
        isNew: true,
        oldPrice: 800,
        price: 720,
      },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Discover the latest trending products that are taking the market by
          storm! Embrace fashion-forward trends with our chic
          clothing and accessories that make a statement. Explore our range of
          unique home decor pieces that add a touch of elegance to any space.
          Don't miss out on these must-have items that are capturing the
          attention of trendsetters worldwide. Shop now and be part of the
          latest trends!
        </p>
      </div>
      <div className="bottom">
        {data.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
