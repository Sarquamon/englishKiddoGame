import React from "react";
import P5Wrapper from "react-p5-wrapper";
import Sketch from "./Sketch";

const Level1 = () => {
  return (
    <div>
      <P5Wrapper sketch={Sketch}></P5Wrapper>
    </div>
  );
};

export default Level1;
