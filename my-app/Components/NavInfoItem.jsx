"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";
import { Alumni_Sans } from "next/font/google";
import { mobileBreakpoint } from "../constants";

const alumni = Alumni_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 64px; //TO DO - remove eventually
`;

const PageName = styled.div`
  font-size: 65px;
  line-heigth: 65px;
  font-weight: 600;
  letter-spacing: 0.75px;
  align-self: flex-start;
  margin-bottom: 12px;
`;

const StatementContainer = styled.div`
  font-size: 35px;
  line-heigth: 35px;
  font-weight: 400;
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  margin-top: 32px;

  @media (max-width: ${mobileBreakpoint}) {
    text-align: center;
    font-weight: 500;
    padding: 18px 12px;
  }
`;

export default function NavInfoItem({ statement, image, companyStatement }) {
  const pathname = usePathname();

  const transformString = (str) => {
    if (str === "/individualsandfamilies") {
      const individualsAndFamilies = "Individuals and Families";
      return individualsAndFamilies;
    } else {
      const withoutSlash = str.startsWith("/") ? str.slice(1) : str;
      const capitalized =
        withoutSlash.charAt(0).toUpperCase() + withoutSlash.slice(1);
      return capitalized;
    }
  };

  const formattedPathName = transformString(pathname);

  return (
    <>
      <Root className={alumni.className}>
        <PageName>{formattedPathName}</PageName>
        <Image
          src={image}
          height={800}
          width={800}
          layout="intrinsic"
          alt="planning"
        />
        <StatementContainer>{statement}</StatementContainer>
        <StatementContainer>{companyStatement}</StatementContainer>
      </Root>
    </>
  );
}
