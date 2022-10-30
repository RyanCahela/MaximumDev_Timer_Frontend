import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #212121;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  padding-inline: 1em;
  padding-block: 0.5em;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
