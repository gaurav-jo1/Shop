import React from "react";
import "./fash.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footertwo";

const fashion = () => {
  return (
    <>
      <Navbar />
      <div className="fash_container">
        <div className="fashion_images"></div>
        <div className="fashion_sale">
          <div className="heading_font">
            <h1>Right &nbsp;to&nbsp;Fashion</h1>
            <h2>&nbsp;$ale</h2>
          </div>
          <div className="coming_soon">
            <h3>COMING SOON</h3>
            <h1>50-80% OFF</h1>
            <div className="sneak_peak">
              <a href="https://www.vogue.com/fashion" target={"blank"}>
                {" "}
                <button type="button">+ SNEAK PEAK</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default fashion;
