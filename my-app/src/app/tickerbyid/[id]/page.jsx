"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { fetchByTicker } from "../../../../utils";
import { SymbolText, StockText } from "../../../../Components/TickerByIDText";
import MyLineChart from "../../../../Components/MyLineChart";

export default function page() {
  const { id } = useParams();
  const [overviewData, setOverviewData] = useState(null);
  const [overviewApiError, setOverviewApiError] = useState(false);
  const [newsData, setNewsData] = useState(null);
  const [newsDataApiError, setNewsDataApiError] = useState(false);
  const [newsFeed, setNewsFeed] = useState(null);
  const [earningsData, setEarningsData] = useState(null);
  const [earningsApiError, setEarningsApiError] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      try {
        const item = await fetchByTicker(id);
        const { overviewJSON, newsJSON, earningsJSON } = item;
        setOverviewData(overviewJSON);
        //Shows in DOM if there are any news articles and if so, how many articles "Displaying NuM articles."
        setNewsData(newsJSON);
        const { feed } = newsJSON;
        //IF there are news articles
        if (feed) {
          setNewsFeed(feed);
        }
        const { annualEarnings } = earningsJSON;
        setEarningsData(annualEarnings);
      } catch (error) {
        setOverviewApiError(!overviewApiError);
        setNewsDataApiError(!newsDataApiError); //also handles newsFeed Errors
        setEarningsApiError(!earningsApiError);
        console.error("Error Fetching: " + error);
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

      {earningsData && earningsData.length > 0 && (
        <MyLineChart data={earningsData} />
      )}

      {newsFeed && newsFeed.length > 0 && !newsDataApiError ? (
        <div>Displaying {newsData.items} articles.</div>
      ) : (
        <h2 style={{ marginBottom: "48px" }}>No news articles were found</h2>
      )}

      {newsFeed && newsFeed.length > 0 && !newsDataApiError ? (
        <>
          {newsFeed.map((article, i) => (
            <div key={i} style={{ margin: "16px 0" }}>
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.title}
              </Link>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
