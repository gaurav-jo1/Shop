import React from "react";
import "./tech.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footertwo";
import ImageSlider from "./inside/ImageSlider";
import { SliderData } from "./inside/SliderData";

const technology = () => {
  return (
    <>
      <Navbar />
      <div className="tech_container">
        <div className="tech_pictures">
          <ImageSlider slides={SliderData} />
        </div>
        <div className="tech_detail">
          <h1>Apple M1 Max </h1>
          <h3>with 10-core CPU, 32-core GPU and 16-core Neural Engine</h3>
          <div className="tech_detail_h">
            <p>64GB unified memory</p>
            <p>8TB SSD storage</p>
            <p>41.05 cm (16.2-inch) Liquid Retina XDR display</p>
            <p>
              Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3
              port
            </p>
            <p>140W USB-C Power Adapter</p>
            <p>Backlit Magic Keyboard with Touch ID - US English</p>

            <a
              href="https://support.apple.com/kb/SP858?locale=en_US#:~:text=24%2Dcore%20GPU-,M1%20Max%20with%2010%2Dcore%20CPU%20and%2032%2Dcore%20GPU,2TB%2C%204TB%2C%20or%208TB%20SSD"
              target={"blank"}
            >
              Learn more
            </a>
          </div>
          <a
            href={
              "https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-gray-10-core-cpu-32-core-gpu-1tb#"
            }
            target={"blank"}
          >
            {" "}
            <button type="button" className="buy_btn">
              Buy Now
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default technology;
