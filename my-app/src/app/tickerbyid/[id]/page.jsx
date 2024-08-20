"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { fetchByTicker } from "../../../../utils";
import { SymbolText, StockText } from "../../../../components/TickerByIDText";

export default function page() {
  const { id } = useParams();
  const [overviewData, setOverviewData] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [newsFeed, setNewsFeed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      try {
        const item = await fetchByTicker(id);
        console.log(item);
        const { overviewJSON, newsJSON } = item;
        //console.log(newsJSON);
        const { feed } = newsJSON;
        const limitedNewsFeed = feed.slice(0, 10);
        //console.log(feed);
        setNewsFeed(limitedNewsFeed);
        setOverviewData(overviewJSON);
        setNewsData(newsJSON);
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

  console.log(overviewData);
  console.log(newsData);

  return (
    <>
      {overviewData.Information ? (
        <div>No data found using {id}.</div>
      ) : (
        <div>
          <SymbolText>
            {overviewData.Symbol ? overviewData.Symbol : { id }}
          </SymbolText>
          <StockText>
            {overviewData.Name}, {overviewData.Address}
          </StockText>
          <StockText>{overviewData.Description}</StockText>
          <StockText>
            {overviewData.Name} exhanges on {overviewData.Exchange} using{" "}
            {overviewData.Currency}
          </StockText>
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
              <span>
                {newsFeed === null ? "Displaying first 10 of" : ""}{" "}
                {newsData.items} articles found
              </span>
            )}
          </div>
        </div>
      )}
      {/* NEWSDATA ITEMS IN ARRAY.feed title/url  */}
      <div>
        {newsFeed !== null ? (
          newsFeed.map((article, index) => (
            <div key={index} style={{ margin: "16px 0" }}>
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.title}
              </Link>
            </div>
          ))
        ) : (
          <div>No news articles found</div>
        )}
      </div>
    </>
  );
}
