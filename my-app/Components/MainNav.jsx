"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { mobileBreakpoint } from "../constants";
import { RiLoginCircleLine } from "react-icons/ri";
import { GiGears } from "react-icons/gi";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
  width: 100%;
`;

const LogoContainer = styled.div`
  .responsive-image {
    @media (max-width: ${mobileBreakpoint}) {
      height: 60px;
      width: 60px;
    }
  }
`;

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
      <Link href="/">
        <LogoContainer>
          <Image
            src="/images/logo.svg"
            className="responsive-image"
            height={100}
            width={100}
            alt="logo"
          />
          <div>Pelosi Stock Management</div>
          <small>Economic Advisory. Fiscal Planning.</small>
        </LogoContainer>
      </Link>
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
