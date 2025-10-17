import React from "react";
import "./JourneyHighlight.css";
import journeyImage1 from "../../assets/journey-image-1.png";
import journeyImage2 from "../../assets/journey-image-2.png";
import journeyImage3 from "../../assets/journey-image-3.png";
import journeyImage4 from "../../assets/journey-image-4.png";
import roadToEssen from "../../assets/road-to-essen.png";

const JourneyHighlight = () => {
  return (
    <section className="journey-container">
      <div className="journey-title-container">
        <h2 className="journey-title">JOURNEY HIGHLIGHT</h2>
        <div className="journey-logo">
          <img src={roadToEssen} alt="Road to Essen Logo" />
        </div>
      </div>

      <div className="journey-content">
        {/* Left text content */}
        <div className="journey-text">
          <p>
            The competition aims to discover and celebrate innovative board game
            concepts created by Vietnamese designers, while serving as a
            launchpad for culturally distinctive Vietnamese board games to reach
            international markets, particularly at SPIEL Essen 2025, the world’s
            largest board game fair, scheduled to take place in Germany in
            October 2025.
          </p>
          <p>
            In its first season, Road to Essen received an enthusiastic response
            from both Vietnam’s creative community and overseas Vietnamese, with
            137 qualified entries and participants ranging in age from 11 to 55,
            making this one of the largest board game design contests ever held
            in Vietnam. Beyond competition, the contest provided a valuable
            learning environment where contestants refined their design
            thinking, strategic mindset, and professional presentation skills.
            Through direct jury feedback and community engagement, contestants
            gained essential experience and insights to not only improve their
            game but also support their long-term growth in the dynamic world of
            game design.
          </p>
        </div>

        {/* Right image grid */}
        <div className="journey-images">
          <div className="journey-grid">
            <img src={journeyImage1} alt="Event 1" />
            <img src={journeyImage2} alt="Event 2" />
            <img src={journeyImage3} alt="Event 3" />
            <img src={journeyImage4} alt="Event 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyHighlight;
