"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  fetchByTicker,
  sentimentHandler,
  formatFiscalDates,
} from "../../../../utils";
import {
  SymbolText,
  StockText,
  SentimentContainer,
  LinkAndSentiment,
  DisplayArticlesText,
  EarningsDateDisplay,
} from "../../../../Components/TickerByID";
import MyLineChart from "../../../../Components/MyLineChart";

export default function page() {
  const { id } = useParams();
  const [overviewData, setOverviewData] = useState(null);
  const [overviewApiError, setOverviewApiError] = useState(false);
  const [newsData, setNewsData] = useState(null);
  const [newsDataApiError, setNewsDataApiError] = useState(false);
  const [newsFeed, setNewsFeed] = useState(null);
  const [earningsData, setEarningsData] = useState(null);
  const [earningsDatesDisplay, setEarningsDatesDisplay] = useState(null);
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

        const formattedEarningDates = formatFiscalDates(annualEarnings);
        const reversedFormattedEarningDates = formattedEarningDates.reverse();
        setEarningsDatesDisplay(reversedFormattedEarningDates);
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

  console.log(earningsData);

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

      {/* // TO DO: display all the dates shared  */}

      {earningsData && earningsData.length > 0 ? (
        <>
          <MyLineChart data={earningsData} />
          <EarningsDateDisplay>
            <span className="description">Fiscal Date Ending:</span>
            {earningsDatesDisplay.map((item, i) => (
              <span key={i}>
                {item}
                {i < earningsDatesDisplay.length - 1 && ", "}{" "}
              </span>
            ))}
          </EarningsDateDisplay>
        </>
      ) : (
        <DisplayArticlesText>No Earnings Data Found</DisplayArticlesText>
      )}

      {newsFeed && newsFeed.length > 0 && !newsDataApiError ? (
        <DisplayArticlesText>
          Displaying {newsData.items} articles.
        </DisplayArticlesText>
      ) : (
        <DisplayArticlesText>No News Articles Found</DisplayArticlesText>
      )}

      {newsFeed && newsFeed.length > 0 && !newsDataApiError ? (
        <>
          <SentimentContainer />
          {newsFeed.map((article, i) => (
            <LinkAndSentiment key={i}>
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.title}
              </Link>
              {sentimentHandler(article.overall_sentiment_label)}
            </LinkAndSentiment>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
