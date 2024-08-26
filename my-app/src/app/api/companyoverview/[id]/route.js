export const GET = async (request, { params }) => {
  //remove any "+" characters
  function removePlusCharacter(str) {
    if (str.includes("+")) {
      return str.replace(/\+/g, "");
    }
    return str;
  }

  const cleanedString = removePlusCharacter(params.id);

  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${cleanedString}&apikey=${process.env.MY_API_KEY}`
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

//Company Overview
