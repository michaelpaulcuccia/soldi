"use client";
import React from "react";
import Image from "next/image";
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

const StyledSentimentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
  }

  h3 {
    @media (max-width: ${mobileBreakpoint}) {
      margin-bottom: 12px;
    }
  }

  div {
    display: flex;
    align-items: center;

    @media (max-width: ${mobileBreakpoint}) {
      margin-bottom: 6px;
    }

    p {
      margin-right: 6px;
      font-size: 12px;
    }
  }
`;

export function SentimentContainer() {
  return (
    <>
      <StyledSentimentContainer>
        <h3>
          <strong>Sentiment Key:</strong>
        </h3>

        <div>
          <p>Somewhat-Bullish</p>

          <Image src="/images/bull.svg" height={20} width={20} alt="" />
          <Image src="/images/plusminus.svg" height={20} width={20} alt="" />
        </div>

        <div>
          <p>Bullish</p>
          <Image src="/images/bull.svg" height={20} width={20} alt="" />
        </div>
        <div>
          <p> Somewhat-Bearish</p>

          <Image src="/images/bear.svg" height={20} width={20} alt="" />
          <Image src="/images/plusminus.svg" height={20} width={20} alt="" />
        </div>
        <div>
          <p>Bearish</p>
          <Image src="/images/bear.svg" height={20} width={20} alt="" />
        </div>
        <div>
          <p> Neutral</p>
          <Image src="/images/neutral.svg" height={20} width={20} alt="" />
        </div>
      </StyledSentimentContainer>
    </>
  );
}
