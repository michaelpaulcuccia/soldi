"use client";
import React from "react";
import styled from "styled-components";
import { Fira_Code } from "next/font/google";
import { mobileBreakpoint } from "../../constants";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["700"],
});

const StyledSymbolText = styled.h2`
  font-weight: bold;
  font-size: 56px;
  line-height: 56px;
  letter-spacing: 1.5px;
  margin: 16px 0 8px 0;
  color: #444444;
  text-align: center;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 46px;
    line-height: 46px;
  }
`;

export function SymbolText({ children }) {
  return (
    <StyledSymbolText className={firaCode.className}>
      {children}
    </StyledSymbolText>
  );
}

const StyledStockText = styled.p`
  font-weight: bold;
  font-size: 22px;
  line-height: 24px;
  margin: 16px 0;
  color: #444444;
  text-align: center;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export function StockText({ children }) {
  return <StyledStockText>{children}</StyledStockText>;
}
