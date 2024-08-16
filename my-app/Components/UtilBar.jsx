"use client";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { mobileBreakpoint } from "../constants";
import { Alumni_Sans } from "next/font/google";

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%); /* Start off-screen to the right */
    opacity: 0;
  }
  to {
    transform: translateX(0); /* End at its original position */
    opacity: 1;
  }
`;

const alumni = Alumni_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const DesktopRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: black !important;
  color: white !important;
  margin-bottom: 12px;

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  font-size: 22px;
  letter-spacing: 0.75px;

  &:hover {
    font-weight: bold;
  }
`;

const MobileRoot = styled.div`
  display: none;

  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 12px 16px;
  }
`;

const MobileMenu = styled.div`
  height: 94vh;
  width: 100%;
  background-color: #353333;
  color: white;
  animation: ${slideInFromRight} 0.5s ease forwards;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

export default function UtilBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick = () => {
    setShowMobileMenu(!showMobileMenu);
    console.log("click");
  };
  return (
    <>
      <DesktopRoot className={alumni.className}>
        <StyledLink href="/planning">Planning</StyledLink>
        <StyledLink href="/advisory">Advisory</StyledLink>
        <StyledLink href="/individualsandfamilies">
          Individuals and Families
        </StyledLink>
        <StyledLink href="/business">Business</StyledLink>
        <StyledLink href="/">Our Company</StyledLink>
        <StyledLink href="/">Support</StyledLink>
      </DesktopRoot>
      <MobileRoot>
        <RxHamburgerMenu onClick={handleClick} color="white" fontSize={32} />
        {showMobileMenu && (
          <MobileMenu onClick={handleClick}>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/planning">Planning</StyledLink>
            <StyledLink href="/advisory">Advisory</StyledLink>
            <StyledLink href="/individualsandfamilies">
              Individuals and Families
            </StyledLink>
            <StyledLink href="/business">Business</StyledLink>
            <StyledLink href="/">Our Company</StyledLink>
            <StyledLink href="/">Support</StyledLink>
          </MobileMenu>
        )}
      </MobileRoot>
    </>
  );
}

/*

const slideOutToRight = keyframes`
  from {
    transform: translateX(0); 
    opacity: 1;
  }
  to {
    transform: translateX(100%); 
    opacity: 0;
  }
`;

 animation: ${(props) =>
    props.isOpen
      ? `${slideInFromRight} 0.5s ease forwards`
      : `${slideOutToRight} 0.5s ease forwards`};

             <MobileMenu onClick={handleClick} isOpen={showMobileMenu}>

*/
