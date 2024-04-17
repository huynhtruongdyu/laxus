import React from "react";
import "./styles.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="about-hero__background"></div>
        <div className="about-hero__content glass">
          <h1 title={`Console.WriteLine("hello world")`}>
            i'm a <span>backend developer</span>
          </h1>
        </div>
      </div>
      <div className="about-content">
        {/* Multiple Typing Text Animation */}
        <section className="about-section about-section__info">
          Common Info
        </section>
        <section className="about-section about-section__timeline">
          Timeline
        </section>
      </div>
    </div>
  );
};

export default About;
