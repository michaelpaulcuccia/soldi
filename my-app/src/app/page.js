"use client";
import React, { useState, useEffect } from "react";

export default function page() {
  const [topLosers, setTopLosers] = useState(null);
  const [loading, setLoading] = useState(true);

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
    </>
  );
}
