import AppTypeWritter from "@/core/components/modules/typewriter";
import "./styles.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="about-hero__background"></div>
        <div className="about-hero__content glass">
          <h1 title={`Console.WriteLine("hello world")`}>
            hello world, <br />
            <AppTypeWritter
              texts={["my name is Aaron", "i'm a backend developer "]}
            />
          </h1>
        </div>
      </div>
      <div className="about-content">
        <section className="about-section about-section__info">
          <h1>Common Info</h1>
        </section>
        <hr />
        <section className="about-section about-section__timeline">
          Timeline
        </section>
      </div>
    </div>
  );
};

export default About;
