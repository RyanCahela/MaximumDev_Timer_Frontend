import React, { useReducer } from "react";
import styled from "styled-components";
import timerReducer from "../../store/timerReducer";
import TimerOutput from "./TimerOutput";
import TimerControls from "./TimerControls";

const TimerStyles = styled.div`
  outline: 2px solid #333;
  padding: 2rem 3rem;

  //Adds margin to every element preceded by an element
  & > * + * {
    margin-block-start: 1rem;
  }
`;

const Timer = () => {
  const [state, dispatch] = useReducer(timerReducer, {
    currentState: "IDLE",
    startTime: null,
    currentTime: null,
  });

  return (
    <TimerStyles>
      <TimerOutput />
      <TimerControls />
    </TimerStyles>
  );
};

export default Timer;
