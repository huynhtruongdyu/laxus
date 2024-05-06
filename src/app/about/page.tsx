import AppTypeWritter from "@/core/components/modules/typewriter";
import Image from "next/image";
import "./styles.css";
import SkillCard from "@/app/about/_components/skill-card";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="about-hero__background"></div>
        <div className="about-hero__content glass">
          <p title={`Console.WriteLine("hello world")`}>hello world</p>

          <p>
            <AppTypeWritter
              texts={["my name is Duy", "i'm a web development"]}
            />
          </p>
        </div>
      </div>
      <div className="about-content">
        <section className="about-section about-section__info container">
            <h1 className="underline">about</h1>
            <p>
              i'm a backend web development enthusiast from VN, driven to create
              innovative and user-focused web experiences, a quick study when it
              comes to new tech, always eager to integrate it and experiment to
              find the perfect solution. Learning is my daily fuel, keeping me
              on the cutting edge and excited for every new project.
            </p>
        </section>
        <section className="about-section about-section__skills">
          <div className="container">
            <h2>skills</h2>
            <div className="skills">
              <h3 className="skills__title">frontend</h3>
              <div className="skills__container">
                <span className="skill__item">HTML & CSS</span>
                <span className="skill__item">React</span>
                <span className="skill__item">React Native</span>
                <span className="skill__item">Angular</span>
                <span className="skill__item">Vue</span>
              </div>
            </div>
            <div className="skills">
              <h3 className="skills__title">backend</h3>
              <div className="skills__container">
                <span className="skill__item">C#</span>
                <span className="skill__item">ASP.NET Core</span>
                <span className="skill__item">Javascript</span>
                <span className="skill__item">Golang</span>
              </div>
            </div>
            <div className="skills">
              <h3 className="skills__title">orthers</h3>
              <div className="skills__container">
                <span className="skill__item">Hangfire</span>
                <span className="skill__item"></span>
                <span className="skill__item">SignalR</span>
                <span className="skill__item">SocketIO</span>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section about-section__timeline">
          <div className="container">
            <h2>work experiences</h2>
            <div className="jobs">
              <div className="job">
                <h3>fullstack developer</h3>
                <p>@Mediastep Software Viet Nam</p>
                <i>2022 - present</i>
              </div>
              <div className="job">
                <h3>fullstack developer</h3>
                <p>@Bosch Global Software Technologies</p>
                <i>2021 - 2022</i>
              </div>
              <div className="job">
                <h3>backend developer</h3>
                <p>@New Ocean Information System</p>
                <i>2020 - 2021</i>
              </div>
              <div className="job">
                <h3>intern</h3>
                <p>@DEK Technologies</p>
                <i>2020</i>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
