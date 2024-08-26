import React from "react";
import Old_Electronics from "../assets/Old_Electronics.webp";
import Navbar from "../Navbar";
import Cards from "../Cards";

function Home() {
  return (
    <div  className="bg-url[(web-react/src/assets/Old_Electronics.webp)]" >
      <div>

        {/* <img src={Old_Electronics} alt="" /> */}
        {" "}
        <Navbar />
        <h1 className="header">A Tool For Every Workflow</h1>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Home;
