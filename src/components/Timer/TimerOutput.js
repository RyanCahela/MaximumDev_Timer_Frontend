import React from "react";
import styled from "styled-components";

const TimerOutputStyles = styled.div`
  font-family: monospace;
  display: flex;
  font-size: 3rem;
`;
const TimerOutput = () => {
  return (
    <TimerOutputStyles>
      <div>00</div>
      <div>:</div>
      <div>00</div>
      <div>:</div>
      <div>00</div>
      <div>:</div>
      <div>00</div>
    </TimerOutputStyles>
  );
};

export default TimerOutput;
