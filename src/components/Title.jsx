import React from "react";

export default function Title(prop) {
  const { title } = prop;

  // data-aos="slide-right" data-aos-duration="600"

  return (
    <>
      <div
        className="headerbox"
        data-aos="slide-right"
        data-aos-once="true"
        data-aos-mirror="false"
        data-aos-offset="90"
      >
        {title}
      </div>
    </>
  );
}
