import Image from "next/image";

export async function fetchByTicker(id) {
  try {
    const overviewRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/companyoverview/${id}`
    );

    const newsAndSentimentRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/marketnewsandsentiment/${id}`
    );

    const earningsRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/earnings/${id}`
    );

    if (!overviewRes.ok) {
      throw new Error("Failed to fetch overview data");
    }

    if (!newsAndSentimentRes.ok) {
      throw new Error("Failed to fetch news and sentiment data");
    }

    if (!earningsRes.ok) {
      throw new Error("Failed to fetch earnings data");
    }

    const newsJSON = await newsAndSentimentRes.json();

    const overviewJSON = await overviewRes.json();

    const earningsJSON = await earningsRes.json();

    return {
      overviewJSON,
      newsJSON,
      earningsJSON,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

//sets style on two images to prevent column stacking when page shrinks
export const sentimentHandler = (arg) => {
  switch (arg) {
    case "Somewhat-Bullish":
      return (
        <div style={{ minWidth: "40px" }}>
          <Image src="/images/bull.svg" height={20} width={20} alt="" />
          <Image src="/images/plusminus.svg" height={20} width={20} alt="" />
        </div>
      );
    case "Bullish":
      return (
        <div>
          <Image src="/images/bull.svg" height={20} width={20} alt="" />
        </div>
      );
    case "Somewhat-Bearish":
      return (
        <div style={{ minWidth: "40px" }}>
          <Image src="/images/bear.svg" height={20} width={20} alt="" />
          <Image src="/images/plusminus.svg" height={20} width={20} alt="" />
        </div>
      );
    case "Bearish":
      return (
        <div>
          <Image src="/images/bear.svg" height={20} width={20} alt="" />
        </div>
      );
    case "Neutral":
      return (
        <div>
          <Image src="/images/neutral.svg" height={20} width={20} alt="" />
        </div>
      );
    default:
      return <div>No sentiment.</div>;
  }
};

export function formatFiscalDates(dataArray) {
  return dataArray.map((item) => {
    const date = new Date(item.fiscalDateEnding);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  });
}
