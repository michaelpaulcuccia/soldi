export const GET = async () => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.MY_API_KEY}`
    );
    const data = await response.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response("Error found in app/api/instruments/route.js", {
      status: 500,
    });
  }
};

//Top Gainers, Losers, and Most Actively Traded Tickers (US Market)
