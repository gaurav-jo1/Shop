import React, { useRef, useEffect } from "react";
import "./ssh.css";
import { gsap } from "gsap";
import { TweenMax, Power3 } from "gsap/index";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import technolgy from "./images/virtual_reality.jpg";
import fashion from "./images/fashion_two_croped.jpg";
import Crypto from "./images/crypto_two.jpeg";
import games from "./images/video_games.jpg";
import fitness from "./images/fitness.jpg";

function SSH() {
  gsap.registerPlugin(ScrollTrigger);

  let textItems = useRef(null);
  let boxContainer_one = useRef(null);
  let boxContainer_two = useRef(null);

  useEffect(() => {
    TweenMax.from(textItems, 2, {
      scrollTrigger: {
        trigger: textItems,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      yPercent: -100,
      ease: Power3.easeOut,
    });
  }, []);

  useEffect(() => {
    TweenMax.from(boxContainer_one, 2, {
      scrollTrigger: {
        trigger: boxContainer_one,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      xPercent: 100,
      ease: Power3.easeOut,
    });
  }, []);

  useEffect(() => {
    TweenMax.from(boxContainer_two, 2, {
      scrollTrigger: {
        trigger: boxContainer_two,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      xPercent: -100,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="webexp_middle" id="SSH">
      <div className="webexp_middle_second">
        <div ref={(el) => (textItems = el)} className="webexp_middle_heading">
          <h1 className="--gradient-bar">Start Shoping here</h1>
        </div>

        <div className="webexp_middle_box_container">
          <div
            ref={(el) => (boxContainer_one = el)}
            className="webexp_middle_box_container_one"
          >
            <div>
              <div className="webexp_middle_box_one">
                <img src={technolgy} alt="tech" />
              </div>
              <h1>Technolgy</h1>
            </div>

            <div>
              <div className="webexp_middle_box_two">
                <img src={fashion} alt="fashion" />
              </div>
              <h1>Fashion</h1>
            </div>

            <div>
              <div className="webexp_middle_box_three">
                <img src={Crypto} alt="" />
              </div>
              <h1>Crypto</h1>
            </div>
          </div>
          <div
            ref={(el) => (boxContainer_two = el)}
            className="webexp_middle_box_container_two"
          >
            <div>
              <div className="webexp_middle_box_two_one">
                <img src={games} alt="" />
              </div>
              <h1>Video Games</h1>
            </div>

            <div>
              <div className="webexp_middle_box_two_two">
                <img src={fitness} alt="" />
              </div>
              <h1>Fitness</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SSH;
