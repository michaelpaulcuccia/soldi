"use client";
import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import { mobileBreakpoint } from "../constants";

const Root = styled.div`
  width: 100vw;
  background-color: ${({ $bg }) => ($bg === "dark" ? "black" : "white")};

  @media (max-width: ${mobileBreakpoint}) {
    background-color: ${({ $bgshouldchangemobile }) =>
      $bgshouldchangemobile === "yes" ? "white" : "black"};
  }
`;

export default function FullBleedContainer({
  children,
  bg,
  bgshouldchangemobile,
}) {
  return (
    <Root $bg={bg} $bgshouldchangemobile={bgshouldchangemobile}>
      <Container maxWidth="xl">{children}</Container>
    </Root>
  );
}
