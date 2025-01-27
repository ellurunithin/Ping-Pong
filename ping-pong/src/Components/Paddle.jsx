import React from "react";

const Paddle = ({ position, isBottom }) => {
  const paddleStyle = {
    position: "absolute",
    width: "100px",
    height: "20px",
    background: "#fff",
    left: `${position}px`,
    bottom: isBottom ? "10px" : "unset",
    top: isBottom ? "unset" : "10px",
  };

  return <div style={paddleStyle}></div>;
};

export default Paddle;
