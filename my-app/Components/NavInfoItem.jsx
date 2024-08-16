"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";
import { Alumni_Sans } from "next/font/google";

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

const Line = styled.div`
  border-top: 1px solid black;
  margin: 8px 0px 32px 0px;
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
  align-self: flex-start;
  background: #eee;
  border-radius: 16px;
  padding: 12px 18px;
  margin-top: 32px;
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
        <Line />
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
