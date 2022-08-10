import React, { useRef, useEffect } from "react";
import "./header.scss";
import CTP from "../../assets/phone.png";
import laptop from "../../assets/laptop.png";
import { TweenMax, Power3 } from "gsap/index";
function Header() {
  let textItem = useRef(null);
  let para = useRef(null);
  let graphic = useRef(null);
  let graphic2 = useRef(null);

  useEffect(() => {
    TweenMax.to(textItem, 2, {
      opacity: 2,
      y: -40,
      ease: Power3.easeOut,
      delay: 0.4,
    });
    TweenMax.to(para, 2, {
      opacity: 2,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.4,
    });
    TweenMax.to(graphic, 2, {
      opacity: 2,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.6,
    });
    TweenMax.to(graphic2, 2, {
      opacity: 2,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.6,
    });
  }, []);

  return (
    <div>
      <div className="webshop__header " id="home">
        <div className="webshop__header-content">
          <div ref={(el) => (graphic = el)} className="img_container_first">
            <img src={CTP} alt="CTP" />
          </div>
          <div className="webshop_header_write">
            <div
              ref={(el) => (textItem = el)}
              className="webshop_header_main_heading"
            >
              <div className="webshop_header_main_heading_two">
                <h1 >Let's Get &nbsp; </h1>{" "}
                <h1> Started with</h1>
              </div>
              <h1 >Web Shop</h1>
            </div>
            <div ref={(el) => (para = el)} className="webshop_header_write_pg">
              <h3>
                On your way for having a website that clearly communicates
                quality information to your consumers
              </h3>
              <h3>
                Without a website, people may question your legitimacy as a
                business.
              </h3>
              <h3>
                Having a website is an opportunity to make a great first
                impression and give people comfort.
              </h3>
              <div className="webshop__header_last_picture">
                <img src={CTP} alt="CTP" />
                <img src={laptop} alt="Laptop" />
              </div>
            </div>
          </div>
          <div ref={(el) => (graphic2 = el)} className="img_container_second">
            <img src={laptop} alt="Laptop" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
