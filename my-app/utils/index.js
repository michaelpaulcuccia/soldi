export async function fetchByTicker(id) {
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

    return {
      overviewJSON,
      newsJSON,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
