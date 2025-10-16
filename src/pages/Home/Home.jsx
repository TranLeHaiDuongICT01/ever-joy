import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import PartnersCarousel from "../../components/PartnersCarousel/PartnersCarousel";
import essenBackdrop from "../../assets/essen-backdrop.png";
import BestSeller from "../../components/BestSeller/BestSeller";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="left-corner"></div>
        <div className="hero-container">
          {/* Main Hero Section */}
          <section className="hero-content">
            <h1>Highlight Games</h1>
            <div className="highlight-games">
              <div className="highlight-game-img1"></div>
              <div className="highlight-game-img2"></div>
              <div className="highlight-game-img3"></div>
              <div className="highlight-game-img4"></div>
              <div className="highlight-game-img5"></div>
            </div>
          </section>
        </div>
        <div className="right-corner"></div>
      </div>
      <PartnersCarousel />
      <img
        className="essen-backdrop"
        src={essenBackdrop}
        alt="essen-backdrop"
      />
      <BestSeller />
      <Footer />
    </div>
  );
};

export default Home;
