"use client";
import React from "react";
import styled from "styled-components";
import { Anton } from "next/font/google";
import { mobileBreakpoint } from "../constants";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  background: url(${(props) => props.bgimage}) no-repeat center center;
  background-size: cover;
  display: flex;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //background: rgba(0, 0, 0, 0.4);
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4) 10%,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.4) 70%,
      rgba(0, 0, 0, 0.4) 90%
    );
    z-index: 0;
  }

  @media (max-width: ${mobileBreakpoint}) {
    height: 210px;
  }
`;

const HeroText = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }

  span {
    font-size: 63px;
    line-height: 67px;
    letter-spacing: 0.75px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
    max-width: 700px;
  }

  p {
    font-size: 43px;
    line-height: 47px;
    letter-spacing: 0.5px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
    max-width: 700px;
    margin-top: 18px;
  }
`;

const MobileHeroText = styled.div`
  display: none;

  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 22px 0;
    color: rgb(35, 35, 35);
  }

  span {
    font-size: 33px;
    line-height: 37px;
    letter-spacing: 0.25px;
  }

  p {
    font-size: 23px;
    line-height: 27px;
    letter-spacing: 0.5px;

    margin-top: 8px;
  }
`;

export default function HeroImage({ bgimage, headline, subtext }) {
  return (
    <>
      <Root bgimage={bgimage}>
        <HeroText className={anton.className}>
          <span>{headline}</span>
          <p>{subtext}</p>
        </HeroText>
      </Root>
      <MobileHeroText className={anton.className}>
        <span>{headline}</span>
        <p>{subtext}</p>
      </MobileHeroText>
    </>
  );
}
