import React, { useState } from "react";
import { ApiDomain } from "../../utils/Utils";

const Searchbar = () => {
  const [searchquery, setsearchquery] = useState("");
  const [responseData, setresponseData] = useState(null);
  const handleSearch = () => {
    const apiUrl = `ApiDomain ? query=${searchquery}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setresponseData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(apiUrl);
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Search Waptech"
          onChange={(e) => setsearchquery(e.target.value)}
        />
        <p>
          {" "}
          <button onClick={handleSearch}>Search</button>
        </p>
      </div>
    </>
  );
};
export default Searchbar;
