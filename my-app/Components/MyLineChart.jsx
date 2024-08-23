import * as React from "react";
import styled from "styled-components";
import { LineChart } from "@mui/x-charts/LineChart";
import { mobileBreakpoint } from "../constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  color: #444444;

  @media (max-width: ${mobileBreakpoint}) {
    margin-top: 32px;
  }

  h2 {
    text-align: center;
    margin-bottom: 18px;
  }

  .hide-desktop {
    display: none;
    @media (max-width: ${mobileBreakpoint}) {
      display: block;
    }
  }
`;

export default function MyLineChart({ data }) {
  const firstDate = data[0].fiscalDateEnding;
  const lastDate = data[data.length - 1].fiscalDateEnding;

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${month}-${day}-${year}`;
  };

  const formattedFirstDate = formatDate(firstDate);
  const formattedLastDate = formatDate(lastDate);

  const xValues = data.map((_, index) => index + 1); //1, 2, 3, 4...

  //yValues need to be reversed
  const yValues = data.map((item) => item.reportedEPS);
  const yValuesReversed = yValues.slice().reverse();

  return (
    <Wrapper>
      <h2>
        Reported Earnings Per Share from {formattedLastDate}
        <br className="hide-desktop" /> to {formattedFirstDate}
      </h2>
      <LineChart
        xAxis={[
          {
            data: xValues,
          },
        ]}
        series={[
          {
            data: yValuesReversed,
          },
        ]}
        sx={{ width: "100%" }}
        height={500}
      />
      {}
    </Wrapper>
  );
}
