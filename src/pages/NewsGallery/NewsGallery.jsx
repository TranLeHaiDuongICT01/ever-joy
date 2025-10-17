import React from "react";
import Header from "../../components/Header/Header";
import NewsSection from "../../components/NewsSection/NewsSection";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";

const NewsGallery = () => {
  return (
    <div className="news-gallery-page">
      <Header />
      <NewsSection />
      <Gallery />
      <Footer />
    </div>
  );
};

export default NewsGallery;
