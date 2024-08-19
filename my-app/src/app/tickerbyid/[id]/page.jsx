"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchByTicker } from "../../../../utils";

export default function page() {
  const { id } = useParams();
  const [overviewData, setOverviewData] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      try {
        const item = await fetchByTicker(id);
        setOverviewData(item.overviewJSON);
        setNewsData(item.newsJSON);
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
          {/* NEEDS CONDITIONAL - try 'EJH' ticker */}
          <div>
            {overviewData.Name} exhanges on {overviewData.Exchange} using{" "}
            {overviewData.Currency}
          </div>
        </div>
      )}
      {newsData.Information ? (
        <div>No news found using {id}.</div>
      ) : (
        <div>
          <div>
            {newsData.items === 0 ? (
              <span>No articles found</span>
            ) : (
              <span>{newsData.items} articles found</span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
