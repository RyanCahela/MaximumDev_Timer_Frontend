import React from "react";
import styled from "styled-components";
import Button from "../Button";

const ContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const TimerControls = () => {
  return (
    <ContainerStyles>
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </ContainerStyles>
  );
};

export default TimerControls;
