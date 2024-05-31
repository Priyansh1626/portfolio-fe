import React from "react";
import Contactform from "./Contactform";
import Title from "./Title";

export default function Contact() {
  return (
    <>
      <section className="contactSection" id="contact">
        <br />
        <br />
        <br />
        <Title title="CONTACT" />
        <div
          className="ask"
          data-aos="slide-left"
          data-aos-offset="0"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <p>Have a question or want to work together?</p>
        </div>
        <Contactform />
      </section>
    </>
  );
}
