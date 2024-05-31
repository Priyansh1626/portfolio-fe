import React from "react";

export default function ProjectCard(prop) {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-0">
        <div className="projectCard">
          <img src={prop.img} alt="" />
          <div className="hoverDivBox">
            <div className="top">{prop.top}</div>
            <div className="bottom">{prop.bottom}</div>
          </div>
          <div className="hoverButtonBox">
            <a href={prop.btnLink} target="_black">
              {prop.btn}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
