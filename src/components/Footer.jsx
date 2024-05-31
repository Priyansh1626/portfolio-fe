import React from "react";

export default function Footer() {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="footerBox" id="section5">
        <div className="upLinkBox">
          <button onClick={goToTop}>
            <i className="fa-solid fa-angles-up"></i>
          </button>
        </div>
        <div className="socialLinkBox">
          <div className="box">
            <a
              href="https://www.linkedin.com/in/priyansh-pandey-22401a219/"
              target="_black"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div className="box">
            <a
              href="https://github.com/Priyansh1626"
              target="_black"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="box" id="box3">
            <a
              href="https://www.instagram.com/priyansh__1605_"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="copyrightBox">
          Priyansh Pandey<span>&copy;2022 </span>
        </div>
      </section>
    </>
  );
}
