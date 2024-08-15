"use client";
import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import { mobileBreakpoint } from "../constants";

// Styled component with destructured props
const Root = styled.div`
  width: 100vw;
  background-color: ${({ bg }) => (bg === "dark" ? "black" : "white")};

  @media (max-width: ${mobileBreakpoint}) {
    background-color: ${({ bgShouldChangeMobile }) =>
      bgShouldChangeMobile === "yes" ? "white" : "black"};
  }
`;

export default function FullBleedContainer({
  children,
  bg,
  bgShouldChangeMobile,
}) {
  console.log(bg); // Debugging line to check the bg prop

  return (
    <Root bg={bg} bgShouldChangeMobile={bgShouldChangeMobile}>
      {" "}
      <Container maxWidth="xl">{children}</Container>
    </Root>
  );
}
