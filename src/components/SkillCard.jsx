import React from "react";
// import reactImg from "../images/reactImg.png";

export default function SkillCard(prop) {
  return (
    <>
      <div className="cardContainer">
        <div className="card">
          <div className="imgBoxShape">
            <img src={prop.img} alt=" " className="skillCardImg" />
          </div>
        </div>
        <div className="cardName text-center">{prop.language}</div>
      </div>
    </>
  );
}
