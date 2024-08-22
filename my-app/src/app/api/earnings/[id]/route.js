export const GET = async (request, { params }) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=EARNINGS&symbol=${params.id}&apikey=${process.env.MY_API_KEY}`
    );
    const data = await response.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return new Response(
      "Error found in app/api/companyoverview/[id]/route.js",
      {
        status: 500,
      }
    );
  }
};

//Earnings
