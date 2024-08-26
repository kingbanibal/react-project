import React from "react";
import Old_Electronics from "../assets/Old_Electronics.webp";
import Navbar from "../Navbar";
import Cards from "../Cards";

function Home() {
  return (
    <div>
      <div class="bg-[url('/src/assets/Old_Electronics.webp')]">
        {" "}
        <h1 className="header">A Tool For Every Workflow</h1>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Home;
