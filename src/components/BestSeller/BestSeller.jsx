import React from "react";
import "./BestSeller.css";

const products = [
  {
    id: 1,
    name: "Group Exercise Classes",
    image: "https://via.placeholder.com/250x200", // replace with real image
  },
  {
    id: 2,
    name: "GALACTIC SUPER BEASTS",
    image: "https://via.placeholder.com/250x200",
  },
  {
    id: 3,
    name: "Yoga",
    image: "https://via.placeholder.com/250x200",
  },
  {
    id: 4,
    name: "HEROES",
    image: "https://via.placeholder.com/250x200",
  },
  {
    id: 5,
    name: "BUNNY 100",
    image: "https://via.placeholder.com/250x200",
  },
  {
    id: 6,
    name: "Spin",
    image: "https://via.placeholder.com/250x200",
  },
];

const BestSeller = () => {
  return (
    <section className="best-seller-section">
      <h2 className="section-title">BEST SELLER</h2>

      <div className="best-seller-grid">
        {products.map((item) => (
          <div key={item.id} className="best-seller-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <button className="more-btn">MORE</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
