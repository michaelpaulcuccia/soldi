"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { fetchByTicker } from "../../../../utils";
import { SymbolText, StockText } from "../../../../Components/TickerByIDText";

export default function page() {
  const { id } = useParams();
  const [overviewData, setOverviewData] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [newsFeed, setNewsFeed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [overviewApiError, setOverviewApiError] = useState(false);
  const [newsApiError, setNewsApiError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      try {
        const item = await fetchByTicker(id);
        const { overviewJSON, newsJSON } = item;
        const { feed } = newsJSON;
        const limitedNewsFeed = feed.slice(0, 10);
        setNewsFeed(limitedNewsFeed);
        setOverviewData(overviewJSON);
        setNewsData(newsJSON);
      } catch (error) {
        console.error("Error Fetching");
        setOverviewApiError(!overviewApiError);
        setNewsApiError(!newsApiError);
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

  //console.log(overviewData);
  //tickers not working: GSMGW

  return (
    <>
      {!overviewApiError ? (
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
      ) : (
        <div>There was an error with the API, please try another ticker.</div>
      )}

      {!newsApiError ? (
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
      ) : (
        <></>
      )}

      {/* category_within_source, overall_sentiment_label  */}
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
