export const GET = async (request, { params }) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${params.id}&topics=technology&sort=LATEST&apikey=${process.env.MY_API_KEY}`
    );
    const data = await response.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(
      "Error found in app/api/[id]/marketnewsandsentiment/route.js",
      {
        status: 500,
      }
    );
  }
};

//MARKET NEWS AND SENTIMENT
