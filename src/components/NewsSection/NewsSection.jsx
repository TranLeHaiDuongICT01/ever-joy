import React from "react";
import "./NewsSection.css";
import PartnersCarousel from "../PartnersCarousel/PartnersCarousel";

const NewsSection = () => {
  const newsItems = [
    {
      title: "ROAD TO ESSEN 2025",
      description: "At Fitness Evolution, we have built a meaningful",
      date: "15 Mar 2025",
      image: "/images/news1.jpg",
    },
    {
      title: "ROAD TO ESSEN 2025",
      description: "At Fitness Evolution, we have built a meaningful",
      date: "15 Mar 2025",
      image: "/images/news2.jpg",
    },
    {
      title: "ROAD TO ESSEN 2025",
      description: "At Fitness Evolution, we have built a meaningful",
      date: "15 Mar 2025",
      image: "/images/news3.jpg",
    },
    {
      title: "ROAD TO ESSEN 2025",
      description: "At Fitness Evolution, we have built a meaningful",
      date: "15 Mar 2025",
      image: "/images/news4.jpg",
    },
  ];

  return (
    <section className="news-section">
      <h2 className="news-title">NEWS</h2>

      <div className="news-container">
        {/* Main news item */}
        <div className="news-main">
          <div className="news-main-image"></div>
          <p className="news-main-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* News list */}
        <div className="news-list">
          {newsItems.map((item, index) => (
            <div className="news-item" key={index}>
              <div className="news-thumb"></div>
              <div className="news-info">
                <h4 className="news-item-title">{item.title}</h4>
                <p className="news-item-desc">{item.description}</p>
                <span className="news-item-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PartnersCarousel />
    </section>
  );
};

export default NewsSection;
