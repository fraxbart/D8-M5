/* qui creiamo una funzione che include gli stati che ci servono (loading, error, data) e che contenga useEffect  */

import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  /* passiamo sempre endpoint */

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    try {
      const data = await fetch(endpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWRhZGIxNGE1MTAwMTQ2NjQwMDYiLCJpYXQiOjE2ODM1NjUzMTMsImV4cCI6MTY4NDc3NDkxM30.wbU16bXEZFFqv9NlLVJMK1evBd_sZYrdDfnNvGc3cyo",
        },
      });
      const response = await data.json();
      setData(response);
      setLoading(false);
    } catch (error) {
      if (error) setError("Erorre generico server");
    }
  };

  useEffect(() => {
    handleFetch();
  }, [endpoint]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
