"use client";
import React from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { mobileBreakpoint } from "../constants";

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
      <DesktopRoot>
        <div>Planning</div>
        <div>Advisory</div>
        <div>Individuals and Families</div>
        <div>Business</div>
        <div>Our Company</div>
        <div>Support</div>
      </DesktopRoot>
      <MobileRoot>
        <RxHamburgerMenu color="white" fontSize={32} />
      </MobileRoot>
    </>
  );
}
