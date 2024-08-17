"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function page() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [noData, setNoData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      try {
        const item = await fetchByTicker(id);
        const isDataEmpty = (await item) && Object.keys(item).length === 0;
        if (isDataEmpty) {
          setNoData(`${id} not found`);
        } else {
          console.log(item);
          setData(item);
        }
      } catch (error) {
        console.error("Error Fetching");
      } finally {
        setLoading(false);
      }
    };

    if (data === null) {
      getData();
    }
  }, [id]);

  async function fetchByTicker(id) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/companyoverview/${id}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {!data ? (
        <div>No data found using {id}.</div>
      ) : (
        <div>
          <div>{data.Symbol}</div>
          <div>{data.Name}</div>
          <div>{data.description}</div>
          <div>
            {data.Name} exhanges on {data.Exchange} using {data.Currency}
          </div>
        </div>
      )}
    </>
  );
}
