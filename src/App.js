import { useReducer } from "react";
import Timer from "./components/Timer/TimerIndex";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <h1>Maximum.Dev Timer</h1>
      <Timer />
    </Container>
  );
}

export default App;
