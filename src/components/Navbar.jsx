import React, { useState } from "react";

window.onscroll = () => {
  //show navbar after certain height
  let header = document.querySelector(".header_container");
  let top = window.scrollY;
  if (top < 650) {
    header.style.opacity = 0;
  } else {
    header.style.opacity = 1;
  }

  //nav link active on particular sections
  let sections = document.querySelectorAll("section");
  let navli = document.querySelectorAll(".nav_link");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (top >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
    }
  });
  navli.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

export default function Navbar() {
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  return (
    <>
      <header
        className={`container-fluid header_container ${
          showMenuIcon && "mob_active"
        }`}
      >
        <input type="checkbox" className="nav_checkbox" id="menu_btn" />
        <label htmlFor="menu_btn" className="mav_menu_icon"></label>
        <div className="nav-icons">
          <button
            onClick={() => {
              setShowMenuIcon(!showMenuIcon);
            }}
          >
            <i className="fa-solid fa-xmark close"></i>
          </button>
          <button
            onClick={() => {
              setShowMenuIcon(!showMenuIcon);
            }}
          >
            <i className="fa-solid fa-bars open"></i>
          </button>
        </div>
        <ul className="navbar_links">
          <li className="nav_link home">
            <a href="#home" id="actHome">
              Home
            </a>
          </li>
          <li className="nav_link about">
            <a href="#about" id="actAbout">
              About
            </a>
          </li>
          <li className="nav_link skill">
            <a href="#skill" id="actSkill">
              Skills
            </a>
          </li>
          <li className="nav_link projects">
            <a href="#projects" id="actProjects">
              Projects
            </a>
          </li>
          <li className="nav_link contact">
            <a href="#contact" id="actContact">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
