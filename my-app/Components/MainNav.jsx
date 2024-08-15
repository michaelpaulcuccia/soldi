"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
`;

const LogoContainer = styled.div``;

const ResourceContainer = styled.div`
  display: flex;
  gap: 18px;
`;

export default function SecondaryNav() {
  return (
    <Root>
      <LogoContainer>
        <Image src="/images/logo.svg" height={100} width={100} alt="logo" />
      </LogoContainer>
      <ResourceContainer>
        <div>AAA</div>
        <div>BBB</div>
      </ResourceContainer>
    </Root>
  );
}
