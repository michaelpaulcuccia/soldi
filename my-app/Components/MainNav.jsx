"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { mobileBreakpoint } from "../constants";
import { RiLoginCircleLine } from "react-icons/ri";
import { GiGears } from "react-icons/gi";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  width: 100%;
`;

const LogoContainer = styled.div``;

const ResourceContainer = styled.div`
  display: flex;
  gap: 18px;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: flex-end;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

export default function SecondaryNav() {
  return (
    <Root>
      <LogoContainer>
        <Image src="/images/logo.svg" height={100} width={100} alt="logo" />
        <div>Pelosi Stock Management</div>
        <small>Economic Advisory. Fiscal Planning.</small>
      </LogoContainer>
      <ResourceContainer>
        <div>
          <RiLoginCircleLine />
          Login
        </div>
        <div>
          <GiGears />
          Demo
        </div>
      </ResourceContainer>
    </Root>
  );
}
