"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { mobileBreakpoint } from "../constants";
import { Alumni_Sans } from "next/font/google";

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
    justify-content: flex-end;
    padding: 12px 16px;
  }
`;

export default function UtilBar() {
  return (
    <>
      <DesktopRoot className={alumni.className}>
        <StyledLink href="/planning">Planning</StyledLink>
        <StyledLink href="/">Advisory</StyledLink>
        <StyledLink href="/">Individuals and Families</StyledLink>
        <StyledLink href="/">Business</StyledLink>
        <StyledLink href="/">Our Company</StyledLink>
        <StyledLink href="/">Support</StyledLink>
      </DesktopRoot>
      <MobileRoot>
        <RxHamburgerMenu color="white" fontSize={32} />
      </MobileRoot>
    </>
  );
}
