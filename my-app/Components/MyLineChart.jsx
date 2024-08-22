import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function MyLineChart({ data }) {
  const xValues = data.map((_, index) => index + 1);
  const yValues = data.map((item) => item.reportedEPS);

  return (
    <LineChart
      xAxis={[{ data: xValues }]}
      series={[
        {
          data: yValues,
        },
      ]}
      width={700}
      height={500}
    />
  );
}
