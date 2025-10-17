import React from "react";
import "./Competition.css";
import Header from "../../components/Header/Header";
import competitionBanner from "../../assets/competition-banner.png";
import RoadToEssenOverview from "../../components/RoadToEssenOverview/RoadToEssenOverview";
import JourneyHighlight from "../../components/JourneyHighlight/JourneyHighlight";
import PartnersCarousel from "../../components/PartnersCarousel/PartnersCarousel";
import containerImage from "../../assets/Container.png";
import leftIcon from "../../assets/left-icon.png";
import rightIcon from "../../assets/right-icon.png";
import ledRte from "../../assets/led-rte.png";
import Footer from "../../components/Footer/Footer";

const Competition = () => {
  const finalistData = [
    {
      title: "Free Weights",
      img: containerImage,
    },
    {
      title: "Cardio Machines",
      img: containerImage,
    },
    {
      title: "Group Exercise Classes",
      img: containerImage,
    },
    {
      title: "Personal Training",
      img: containerImage,
    },
    {
      title: "Spin",
      img: containerImage,
    },
    {
      title: "Yoga",
      img: containerImage,
    },
    {
      title: "Free Weights",
      img: containerImage,
    },
    {
      title: "Cardio Machines",
      img: containerImage,
    },
    {
      title: "Group Exercise Classes",
      img: containerImage,
    },
  ];

  return (
    <div className="competition-page">
      <Header />
      <div
        style={{ backgroundImage: `url(${competitionBanner})` }}
        className="competition-banner"
      ></div>
      <div className="year-list">
        <p>
          2025
          <span className="divider"></span>
        </p>
        <p>2026</p>
        <p>2027</p>
        <p>2028</p>
        <p>2029</p>
        <p>2030</p>
      </div>
      <RoadToEssenOverview />
      <JourneyHighlight />
      <PartnersCarousel />
      <div>
        <div className="finalists-road">
          <h1>TOP 20 FINALISTS ROAD TO ESSEN 2025</h1>
          <p>
            Health Clubs with Simplicity. Value. And Your Good health in mind.
            These qualities form the bedrock of Fitness Evolution, the next
            generation of health and fitness centers. With our low-cost, no
            long-term-contract memberships and high-quality equipment, you can
            realize your fitness goals in a comfortable, safe environment.
          </p>
        </div>
        <div className="finalists-list">
          {finalistData.map((finalist, index) => (
            <div className="finalists-item" key={index}>
              <img src={finalist.img} alt="finalists item img" />
              <p className="finalists-item-title">{finalist.title}</p>
            </div>
          ))}
        </div>
        <div className="finalist-arrows">
          <img src={leftIcon} alt="left arrow" />
          <img src={rightIcon} alt="right arrow" />
        </div>
        <h1 className="thank-you-partners">
          ROAD TO ESSEN 2025 EXTENDS ITS SINCERE GRATITUDE TO OUR PARTNERS &
          SPONSORS
        </h1>
        <img className="led-rte" src={ledRte} alt="led rte" />
      </div>
      <Footer />
    </div>
  );
};

export default Competition;
