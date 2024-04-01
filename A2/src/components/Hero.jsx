import React, { useState } from "react";
import Card from "./card";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";

const Hero = () => {
  const initialShoes = [
    { img: img1, name: "LOGO 9540 BKA", price: "Rs. 17,500", isSold: false },
    { img: img2, name: "LOGO 9539 BKA", price: "Rs. 10,500", isSold: false },
    { img: img3, name: "LOGO 9539 BKA", price: "Rs. 13,500", isSold: false },
    { img: img4, name: "LOGO 9539 BKA", price: "Rs. 20,500", isSold: true },
  ];

  const [shoes, setShoes] = useState(initialShoes);

  const handleChangeAllShoes = () => {
    // Update shoe details with new shoes
    const newShoes = [
      { img: img2, name: "New Shoe 1", price: "Rs. 1500", isSold: true },
      { img: img4, name: "New Shoe 2", price: "Rs. 2000", isSold: false },
      { img: img3, name: "New Shoe 3", price: "Rs. 2500", isSold: false },
      { img: img1, name: "New Shoe 4", price: "Rs. 3000", isSold: true },
    ];
    setShoes(newShoes);
  };

  return (
    <>
      <button onClick={handleChangeAllShoes}>Change All Shoes</button>
      <div
        className="hero"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {shoes.map((shoe, index) => (
          <Card key={index} data={shoe} />
        ))}
      </div>
    </>
  );
};

export default Hero;
