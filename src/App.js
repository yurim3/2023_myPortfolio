import React from "react";
import myPortFolio from "img/myPortFolio.jpg";

function LeftSection() {
  return (
    <div
      className="left-section"
      style={{ backgroundColor: "#081B4B", width: "400px" }}
    >
      <img src={myPortFolio} alt="My Portfolio" />
      {/* ... */}
    </div>
  );
}

export default LeftSection;
