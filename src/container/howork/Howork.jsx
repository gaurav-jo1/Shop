import React, { useRef, useEffect } from "react";
import "./howork.css";
import pulse from "./images/pulse.png";
import build from "./images/build.svg";
import man from "./images/man.png";
import success from "./images/success.svg";
import { TweenMax, Power3 } from "gsap/index";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

function Howork() {
  gsap.registerPlugin(ScrollTrigger);
  let textItem = useRef(null);
  let circleItem = useRef(null);
  let circleItem2 = useRef(null);

  useEffect(() => {
    TweenMax.from(textItem, 2, {
      scrollTrigger: {
        trigger: textItem,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      y: 100,
      ease: Power3.easeOut,
    });

    TweenMax.from(circleItem, 2, {
      scrollTrigger: {
        trigger: circleItem,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      y: 100,
      ease: Power3.easeOut,
    });

    TweenMax.from(circleItem2, 2, {
      scrollTrigger: {
        trigger: circleItem,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      y: 100,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="webshop_container">
      <div ref={(el) => (textItem = el)} className="webshop_content_heading">
        <div className="webshop_heading">
          <h4>&#11835;&nbsp;Process&nbsp; &#11835;</h4>
        </div>
        <div className="webshop_heading_main_heading">
          <h1>How We </h1>
          <h1 className="webshop_heading_main_heading_color">&nbsp;Work</h1>
        </div>
      </div>

      <div
        ref={(el) => (circleItem = el)}
        className="webshop_box_container_one"
      >
        <div>
          <div className="webshop_box_one">
            <div className="webshop_box_one_inside">
              <img src={pulse} alt="" />
            </div>
          </div>
          <div className="webshop_box_written">
            <h1 className="webshop_box_heading">Improvement</h1>
            <p>
              Fessionally fabricate strategic platform without corporate before
              fully tested
            </p>
          </div>
        </div>

        <div>
          <div className="webshop_box_two">
            <div className="webshop_box_two_inside">
              <img src={build} alt="" />
            </div>
          </div>
          <div className="webshop_box_written">
            <h1 className="webshop_box_heading">&nbsp;Idea Create</h1>
            <p>
              Fessionally fabricate strategic platform without corporate before
              fully tested
            </p>
          </div>
        </div>

        <div className="webshop_box_three_displayOn">
          <div className="webshop_box_three">
            <div className="webshop_box_three_inside">
              <img src={man} alt="" />
            </div>
          </div>
          <div className="webshop_box_written">
            <h1 className="webshop_box_heading">&nbsp;Consultancy</h1>
            <p>
              Fessionally fabricate strategic platform without corporate before
              fully tested
            </p>
          </div>
        </div>
        <div className="webshop_box_four_displayOn">
          <div className="webshop_box_four">
            <div className="webshop_box_four_inside">
              <img src={success} alt="" />
            </div>
          </div>
          <div className="webshop_box_written">
            <h1 className="webshop_box_heading">Success</h1>
            <p>
              Fessionally fabricate strategic platform without corporate before
              fully tested
            </p>
          </div>
        </div>
      </div>
      <div
        ref={(el) => (circleItem2 = el)}
        className="webshop_box_responsiveness"
      >
        <div className="webshop_box_three_displayOff">
          <div className="webshop_box_three">
            <div className="webshop_box_three_inside">
              <img src={man} alt="" />
            </div>
          </div>
          <div className="webshop_box_written">
            <h1 className="webshop_box_heading">&nbsp;Consultancy</h1>
            <p>
              Fessionally fabricate strategic platform without corporate before
              fully tested
            </p>
          </div>
        </div>
        <div className="webshop_box_four_displayOff">
          <div className="webshop_box_four">
            <div className="webshop_box_four_inside">
              <img src={success} alt="" />
            </div>
          </div>
          <div className="webshop_box_written">
            <h1 className="webshop_box_heading">Success</h1>
            <p>
              Fessionally fabricate strategic platform without corporate before
              fully tested
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howork;
