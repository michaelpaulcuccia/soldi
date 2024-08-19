"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function page() {
  const { id } = useParams();
  const [overviewData, setOverviewData] = useState(null);
  const [noData, setNoData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      try {
        const item = await fetchByTicker(id);
        const isDataEmpty = item && Object.keys(item).length === 0;
        console.log(item.overviewJSON);
        if (isDataEmpty) {
          setNoData(`${id} not found`);
        } else {
          setOverviewData(item.overviewJSON);
        }
      } catch (error) {
        console.error("Error Fetching");
      } finally {
        setLoading(false);
      }
    };

    if (overviewData === null) {
      getData();
    }
  }, [id]);

  async function fetchByTicker(id) {
    try {
      const overviewRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/companyoverview/${id}`
      );

      const newsAndSentimentRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/marketnewsandsentiment/${id}`
      );

      if (!overviewRes.ok) {
        throw new Error("Failed to fetch overview data");
      }

      if (!newsAndSentimentRes.ok) {
        throw new Error("Failed to fetch news and sentiment data");
      }

      const newsJSON = await newsAndSentimentRes.json();

      const overviewJSON = await overviewRes.json();

      //return overviewRes.json();
      return {
        overviewJSON,
        newsJSON,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {!overviewData ? (
        <div>No data found using {id}.</div>
      ) : (
        <div>
          <div>{overviewData.Symbol}</div>
          <div>{overviewData.Name}</div>
          <div>{overviewData.description}</div>
          <div>
            {overviewData.Name} exhanges on {overviewData.Exchange} using{" "}
            {overviewData.Currency}
          </div>
        </div>
      )}
    </>
  );
}
