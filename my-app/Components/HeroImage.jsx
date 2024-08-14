import React from "react";
import styled from "styled-components";
import { Anton } from "next/font/google";
import { mobileBreakpoint } from "../constants";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 800px; /* Adjust For Mobile */
  background: url(${(props) => props.bgImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  //align-items: center;
  //justify-content: center;

  @media (max-width: ${mobileBreakpoint}) {
    height: 210px;
  }
`;

const HeroText = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }

  span {
    font-size: 63px;
    line-height: 67px;
    letter-spacing: 0.75px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  }
`;

const MobileHeroText = styled.div`
  display: none;

  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    flex-direction: column;
    text-align: left;
    //align-items: center;
    //justify-content: center;
    color: black;
  }

  span {
    font-size: 33px;
    line-height: 37px;
    letter-spacing: 0.25px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  }
`;

export default function HeroImage({ bgImage, children }) {
  return (
    <>
      <Root bgImage={bgImage}>
        <HeroText className={anton.className}>{children}</HeroText>
      </Root>
      <MobileHeroText className={anton.className}>{children}</MobileHeroText>
    </>
  );
}
