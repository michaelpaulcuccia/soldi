"use client";
import React from "react";
import styled from "styled-components";
//import { mobileBreakpoint } from "../constants";
import { Fira_Code } from "next/font/google";

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
  font-size: 18px;
  line-height: 18px;
  margin: 16px 0;
  color: #444444;
`;

export function StockText({ children }) {
  return (
    <StyledStockText className={firaCode.className}>{children}</StyledStockText>
  );
}
