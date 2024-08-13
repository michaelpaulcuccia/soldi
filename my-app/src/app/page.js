"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const [topLosers, setTopLosers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ticker, setTicker] = useState("");

  const router = useRouter();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/topgainloseactive`
        );

        if (!response.ok) {
          throw new Error("failed to get data");
        }
        const result = await response.json();

        setTopLosers(result.top_losers);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`http://localhost:3000/tickerbyid/${ticker}`);
    setTicker("");
  };

  return (
    <>
      <h2>Here are the top losers:</h2>
      <>
        {topLosers.map((item, i) => (
          <div key={i}>
            <div>
              {item.ticker} currently at {item.price} a change of{" "}
              {item.change_amount}
            </div>
          </div>
        ))}
      </>
      <div>Get Info By Ticker ID</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ticker}
          placeholder="Enter Ticker"
          onChange={(event) => setTicker(event.target.value)}
        />
        <input type="submit" placeholder="Submit" />
      </form>
    </>
  );
}
