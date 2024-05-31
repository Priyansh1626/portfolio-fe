import React from "react";
import Particle from "./Particle";

export default function Home() {
  return (
    <>
      <Particle />
      <section className="homeSection" id="home">
        <div className="homeMain_box">
          <div className="mid" data-aos="fade-in" data-aos-mirror="true">
            <p>
              Hello, I am <span>Priyansh Pandey</span>
              <br />
              I'm a <span className="typeHome">full-stack</span> web developer.
            </p>
            <div
              className="project_btn"
              data-aos="zoom-in"
              data-aos-mirror="true"
            >
              <a href="#about" className="myWorkBtn">
                View my work <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
