import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function MyLineChart({ data }) {
  const xValues = data.map((_, index) => index + 1); //1, 2, 3, 4...
  //yValues need to be reversed
  const yValues = data.map((item) => item.reportedEPS);
  const yValuesReversed = yValues.slice().reverse();

  return (
    <>
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
        width={700}
        height={500}
      />
      {}
    </>
  );
}
