"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function page() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      try {
        const item = await fetchByTicker(id);
        setData(item);
      } catch (error) {
        console.error("error fetching");
      } finally {
        setLoading(false);
      }
    };

    if (data === null) {
      getData();
    }
  }, [id]);

  //TODO: move to a separate directory
  async function fetchByTicker(id) {
    try {
      const res = await fetch(
        `http://localhost:3000/api/companyoverview/${id}`
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

  if (!data && !loading) {
    return <h1>data Not Found</h1>;
  }

  console.log(data);

  return (
    <>
      {data && (
        <div>
          <div>{data.Symbol}</div>
          <div>{data.Name}</div>
          <div>{data.Country}</div>
        </div>
      )}
    </>
  );
}
