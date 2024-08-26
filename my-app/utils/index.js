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

export const sentimentHandler = (arg) => {
  switch (arg) {
    case "Somewhat-Bullish":
      return (
        <div>
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
        <div>
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
