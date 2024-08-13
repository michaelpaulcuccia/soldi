export const GET = async (id) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${id}&apikey${process.env.MY_API_KEY}`
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

//Company Overview
