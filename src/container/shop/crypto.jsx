import React from "react";
import "./crypto.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footertwo";
import lite from "./pic/litecoin.png";
import bit from "./pic/bit.png";
import eth from "./pic/eth.png";

const crypto = () => {
  return (
    <>
      <Navbar />
      <div className="background_wallpaper_crypto">
        <div className="crypto_container">
          <div className="crypto_lite">
            <div className="lite_img">
              <img src={lite} alt="" />
            </div>
            <h1>LITECOIN</h1>
            <a href="https://www.coinbase.com/" target={"blank"}>
              {" "}
              <button type="button">GET NOW</button>
            </a>
          </div>
          <div className="crypto_bit_1">
            <div className="bit_image">
              <img src={bit} alt="" />
            </div>
            <h1>BITCOIN</h1>
            <a href="https://www.coinbase.com/" target={"blank"}>
              {" "}
              <button type="button">GET NOW</button>
            </a>
          </div>
          <div className="crypto_eth">
            <div className="eth_image">
              <img src={eth} alt="" />
            </div>
            <h1>ETHEREUM</h1>
            <a href="https://www.coinbase.com/" target={"blank"}>
              {" "}
              <button type="button">GET NOW</button>
            </a>
          </div>
        </div>
        <div className="second_cont">
          <div className="crypto_bit_2">
            <div className="crypto_bit">
              <div className="bit_image">
                <img src={bit} alt="" />
              </div>
              <h1>BITCOIN</h1>
              <a href="https://www.coinbase.com/" target={"blank"}>
                {" "}
                <button type="button">GET NOW</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default crypto;
