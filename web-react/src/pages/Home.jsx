import React from "react";
import Cards from "../Cards";

function Home() {
  return (
    <div>
      <div>
        {" "}
        <h1 className="header">Everything You Need In One Place</h1>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Home;
