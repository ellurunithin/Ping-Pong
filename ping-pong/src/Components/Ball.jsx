import React from "react";

const Ball = ({ x, y }) => {
  const ballStyle = {
    position: "absolute",
    width: "20px",
    height: "20px",
    background: "#fff",
    borderRadius: "50%",
    top: `${y}px`,
    left: `${x}px`,
  };

  return <div style={ballStyle}></div>;
};

export default Ball;
