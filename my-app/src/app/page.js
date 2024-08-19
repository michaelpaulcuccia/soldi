"use client";
import React, { useState, useEffect } from "react";
//import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Alumni_Sans } from "next/font/google";
import PerformersTable from "../../components/PerformersTable";
import { mobileBreakpoint } from "../../constants";

const alumni = Alumni_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const TextContainer = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 400;
    margin-bottom: 8px;

    @media (max-width: ${mobileBreakpoint}) {
      font-size: 38px;
      line-height: 38px;
      text-align: center;
    }

    sup {
      font-size: 16px;
    }
  }
`;

export default function page() {
  const [topLosers, setTopLosers] = useState(null);
  const [topGainers, setTopGainers] = useState(null);
  const [mostActive, setMostActive] = useState(null);
  const [loading, setLoading] = useState(true);
  //const [ticker, setTicker] = useState("");

  //const router = useRouter();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_DOMAIN}/topgainloseactive`
        );

        if (!response.ok) {
          throw new Error("failed to get data");
        }
        const result = await response.json();

        setTopGainers(result.top_gainers);
        setTopLosers(result.top_losers);
        setMostActive(result.most_actively_traded);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/tickerbyid/${ticker}`);
  //   setTicker("");
  // };

  const d = new Date();
  const options = {
    weekday: "short", // Day of the week
    month: "short", // Month name
    day: "2-digit", // Day of the month
    year: "numeric", // Year
    hour: "2-digit", // Hour in 12-hour format
    minute: "2-digit", // Minutes
    hour12: true, // 12-hour time
    timeZoneName: "short", // Time zone name (e.g., "PDT")
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(d);

  return (
    <>
      <TextContainer>
        <h2 className={alumni.className}>
          Top Gainers as of {formattedDate}
          <sup>*</sup>
        </h2>
        <small>* check back every 15 minutes to ensure real-time update</small>
      </TextContainer>
      <PerformersTable item={topGainers} />
      <TextContainer>
        <h2 className={alumni.className}>
          Top losers as of {formattedDate}
          <sup>*</sup>
        </h2>
        <small>* check back every 15 minutes to ensure real-time update</small>
      </TextContainer>
      <PerformersTable item={topLosers} />
      <TextContainer>
        <h2 className={alumni.className}>
          Most Active as of {formattedDate}
          <sup>*</sup>
        </h2>
        <small>* check back every 15 minutes to ensure real-time update</small>
      </TextContainer>
      <PerformersTable item={mostActive} />
      {/* <br />
      <br />
      <br />
      <div>experimental form</div>
      <br />
      <div>Get Info By Ticker ID</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ticker}
          placeholder="Enter Ticker"
          onChange={(event) => setTicker(event.target.value)}
        />
        <input type="submit" placeholder="Submit" />
      </form> */}
    </>
  );
}
