import React from "react";
import "./vidG.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footertwo";
import xbox from "./pic/XX.jpg";
import ps from "./pic/ps5.jpg";
import xbox_Box from "./pic/xbox_box2.jpg";
import ps5_box from "./pic/ps5_box2.jpg";

const videogames = () => {
  return (
    <>
      <Navbar />
      <div className="vidG_container">
        <div className="vidG_xbox">
          <div className="xbox_photo">
            <img src={xbox} alt="xbox" />
            <h1>XBOX</h1>
            <p>Series X packs an 8-core 3.8-GHz AMD Zen 2-based CPU</p>
            <p> 16GB of GDDR6 RAM</p>
            <p> 825 GB custom SSD</p>
            <p>Up to 8K</p>
            <a
              href="https://www.flipkart.com/microsoft-xbox-series-x-1024-gb/p/itm63ff9bd504f27?pid=GMCFVPFCFDFGJHGG&lid=LSTGMCFVPFCFDFGJHGGLGCF4A&marketplace=FLIPKART&q=xbox+series+x&store=4rr%2Fx1m&spotlightTagId=TrendingId_4rr%2Fx1m&srno=s_1_8&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&fm=SEARCH&iid=fdb553b4-59d3-4578-a003-55b59affcf4b.GMCFVPFCFDFGJHGG.SEARCH&ppt=sp&ppn=sp&ssid=pvrazmb4740000001641937356627&qH=4bdad5bdc8d5c743"
              target={"blank"}
            >
              <button>Start Gaming</button>
            </a>
          </div>
          <div className="xbox_box">
            <img src={xbox_Box} alt="" />
          </div>
        </div>
        <div className="vidG_ps">
          <div className="ps_box">
            <img src={ps5_box} alt="" />
          </div>
          <div className="ps_photo">
            <img src={ps} alt="ps5" />
            <h1>PlayStation 5</h1>
            <p>PS5 has an 8-core, 3.5-GHz AMD Zen 2-based CPU</p>
            <p> 16GB of GDDR6 RAM</p>
            <p>1 TB custom NVMe SSD</p>
            <p> Up to 8K</p>
            <a
              href="https://www.flipkart.com/sony-playstation-5-cfi-1008a01r-825-gb-astro-s-playroom/p/itma0201bdea62fa"
              target={"blank"}
            >
              <button>Start Gaming</button>
            </a>
          </div>
        </div>
      </div>
      <div className="buy-_btn">
        <a
          href="https://www.flipkart.com/microsoft-xbox-series-x-1024-gb/p/itm63ff9bd504f27?pid=GMCFVPFCFDFGJHGG&lid=LSTGMCFVPFCFDFGJHGGLGCF4A&marketplace=FLIPKART&q=xbox+series+x&store=4rr%2Fx1m&spotlightTagId=TrendingId_4rr%2Fx1m&srno=s_1_8&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&fm=SEARCH&iid=fdb553b4-59d3-4578-a003-55b59affcf4b.GMCFVPFCFDFGJHGG.SEARCH&ppt=sp&ppn=sp&ssid=pvrazmb4740000001641937356627&qH=4bdad5bdc8d5c743"
          target={"blank"}
        >
          <button>Start Gaming</button>
        </a>
        <a
          href="https://www.flipkart.com/sony-playstation-5-cfi-1008a01r-825-gb-astro-s-playroom/p/itma0201bdea62fa"
          target={"blank"}
        >
          <button>Start Gaming</button>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default videogames;
