import React from "react";

export default function Contactform() {
  return (
    <>
      <div className="formbox">
        <div className="formContainer">
          <form
            action="https://formspree.io/f/maykqkva"
            method="POST"
            data-aos="fade-in"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-offset="130"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              autoComplete="off"
              required
            />
            <div
              className="btnBox"
              data-aos="zoom-up"
              data-aos-offset="50"
              data-aos-mirror="true"
            >
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
