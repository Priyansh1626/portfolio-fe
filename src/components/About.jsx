import React from "react";
import Title from "./Title";
import Priyansh_Image from "../images/Priyansh_Image.jpeg";
import resume from "./Data/Resume_5thSem.pdf";
import AboutDetailsCard from "./AboutDetailsCard";
import aboutData from "./AboutData";

export default function About() {
  return (
    <>
      <section className="aboutSection" id="about">
        <div className="abtclr">
          <br />
          <br />
          <br />
          <Title title="ABOUT" />
          <div className="row m-0 p-0 my-5">
            <div className="col-lg-12 col-xl-6 col-xxl-6 p-0 col-md-12 abtLeft">
              <div
                className="leftBox"
                data-aos="fade-in"
                data-aos-delay="70"
                data-aos-mirror="true"
              >
                <div className="row m-0 p-0">
                  <div className="col-lg-12 p-0">
                    <div className="imgBox text-center">
                      <img src={Priyansh_Image} alt="myImage" />
                    </div>
                  </div>
                  <div className="col-lg-12 p-0">
                    <div className="text-center middleBox">Who's this guy?</div>
                  </div>
                  <div className="col-lg-12 p-0 ">
                    <div className=" text-center bottomBox">
                      <p>
                        I'm a Full-Stack Web Developer studing in
                        <span>
                          <a
                            href="https://kiit.ac.in/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            Kalinga Institute of Industrial Technology{" "}
                          </a>
                        </span>
                        in Bhubneshwar, OD. I have serious passion for UI
                        effects, animations and creating intuitive, dynamic
                        websites.
                        <span>
                          <a href="#contact">Let's make something special.</a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-6 col-xxl-6 p-0 abtRight">
              <div
                className="rightBox"
                data-aos="fade-in"
                data-aos-delay="70"
                data-aos-mirror="true"
              >
                <div className="abtHeading">
                  <p>
                    <span style={{ color: "#e31b6d", fontFamily: "PT Serif" }}>
                      Full-Stack
                    </span>{" "}
                    Developer
                  </p>
                </div>
                <p className="abtPara">
                  {" "}
                  I am passionate about building websites that can solve
                  real-world challenges faced by individual or organisations.
                  Beside my college studies I am trying to build different
                  projects to grab my hand in Web Development. Being a begginer
                  I am sure that I can build fast,working,dynamic and responsive
                  websites. Currently my focus is on BackEnd Development.
                </p>
                <div className="row m-0 p-0">
                  {aboutData.map((curr, index) => {
                    return (
                      <AboutDetailsCard
                        key={index}
                        title={curr.title}
                        desc={curr.desc}
                      />
                    );
                  })}
                </div>
                <p className="my-2 mx-0 abtResumeBtnBox">
                  <a href={resume} download="resume">
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
