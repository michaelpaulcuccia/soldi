"use client";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: black !important;
  color: white !important;
  margin-bottom: 12px;
`;

export default function UtilBar() {
  return <Root>UtilBar</Root>;
}
