import React, { useState, useEffect } from "react";
import Ball from "./Ball";
import Paddle from "./Paddle";


const GameArea = () => {
  const [ball, setBall] = useState({ x: 290, y: 190, dx: 2, dy: 2 });
  const [paddle1, setPaddle1] = useState(250);
  const [paddle2, setPaddle2] = useState(250);

  useEffect(() => {
    const moveBall = setInterval(() => {    //ball movement in the game
      setBall((prev) => {
        const newX = prev.x + prev.dx;
        const newY = prev.y + prev.dy;

        if (newX <= 0 || newX >= 580) {
          return { ...prev, dx: -prev.dx };
        }

        if (newY >= 370 && newX >= paddle1 && newX <= paddle1 + 100) {
          return { ...prev, dy: -prev.dy };
        }
        if (newY <= 20 && newX >= paddle2 && newX <= paddle2 + 100) {
          return { ...prev, dy: -prev.dy };
        }

        if (newY > 400) {                             //miss  of the paddle
          resetGame();
          return { x: 290, y: 190, dx: 2, dy: 2 };
        }
        if (newY < 0) {
          resetGame();
          return { x: 290, y: 190, dx: 2, dy: 2 };
        }

        return { ...prev, x: newX, y: newY };
      });
    }, 16);

    return () => clearInterval(moveBall);
  }, [ball, paddle1, paddle2]);

  useEffect(() => {      //movement of hge paddle i.e., based on the key event
    const movePaddles = (e) => {
      if (e.key === "ArrowLeft" && paddle1 > 0) {
        setPaddle1((prev) => prev - 20);
      }
      if (e.key === "ArrowRight" && paddle1 < 500) {
        setPaddle1((prev) => prev + 20);
      }
      if (e.key === "A" && paddle2 > 0){
        setPaddle2((prev) => prev - 20);
      }
      if (e.key === "D" && paddle2 < 500) {
        setPaddle2((prev) => prev + 20);
      }
      if (e.key === "a"&& paddle2 > 0) {
        setPaddle2((prev) => prev - 20);
      }
      if (e.key === "d" && paddle2 < 500) {
        setPaddle2((prev) => prev + 20);
      }
    };

    window.addEventListener("keydown", movePaddles);
    return () => window.removeEventListener("keydown", movePaddles);
  }, [paddle1, paddle2]);

  const resetGame = () => {          //game reset
    setBall({ x: 290, y: 190, dx: 2, dy: 2 });
    setPaddle1(250);
    setPaddle2(250);
  };

  const gameAreaStyle = {          //css for the game box or area
    position: "relative",
    width: "600px",
    height: "400px",
    background: "#000",
    margin: "20px auto",
    border: "2px solid #fff",
  };

  return (
    <div>
      <div style={gameAreaStyle}>
        <Ball x={ball.x} y={ball.y} />
        <Paddle position={paddle1} isBottom />
        <Paddle position={paddle2} />
      </div>
    </div>
  );
};

export default GameArea;
