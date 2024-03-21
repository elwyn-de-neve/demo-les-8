import { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    let endpoint = "https://restcountries.com/v3.1/all";
    if (searchQuery) {
      endpoint = `https://restcountries.com/v3.1/name/${searchQuery}`;
    }
    async function fetchCountries() {
      try {
        const response = await axios.get(endpoint, {
          signal: abortController.signal,
        });
        console.log(response.data);
        setCountries(response.data);
      } catch (error) {
        if (error.name === "CanceledError") {
          console.log("Fetch Request Aborted");
        } else {
          console.error(e);
        }
      }
    }
    void fetchCountries();
    return () => {
      console.log("Clean up");
      abortController.abort();
    };
  }, [searchQuery]);

  return (
    <>
      <h1>Countries</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ol>
        {countries?.map((country) => (
          <li key={country.name.common}>
            {country.name.common} - {country.population}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Countries;
