import React, { useRef, useEffect } from "react";
import "./footer.scss";
import end from "./images/end.webp";
import send from "./images/send.png";
import logo from "./images/loho2.png";
import facebook from "./images/facebook.png";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
import { TweenMax, Power3 } from "gsap/index";

function Footer() {
  let footerA = useRef();

  useEffect(() => {
    TweenMax.from(footerA, 2, {
      scrollTrigger: {
        trigger: footerA,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      y: -100,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div ref={(el) => (footerA = el)} className="webshop_footer">
      <div className="webshop_footer_one">
        <div className="webshop_footer_heading">
          <p>NO CREDIT CARD REQUIRED</p>
          <h1>Start using Web shop today.</h1>
          <div className="webshop_header-content__input">
            <input type="email" placeholder="Your Email Address" />
            <button type="button">
              <img id="webshop_email_send" src={send} alt="" />
            </button>
          </div>
        </div>
        <div className="webshop_footer_ending_photo">
          <img src={end} alt="" />
        </div>
      </div>
      <div className="webshop_footer_two">
        <div className="webshop_footer_logo">
          <img src={logo} alt="logo" />
          <h4>Make the right data-driven decisions that move your product</h4>
        </div>

        <div className="responsive_container">
          <div className="webshop_footer_detail_one">
            <h4>About</h4>
            <h4>Jobs</h4>
            <h4>Docs</h4>
          </div>

          <div className="webshop_footer_detail_two">
            <h4>Terms and Conditions</h4>
            <h4>Privacy</h4>
            <h4>Cookies</h4>
          </div>

          <div className="webshop_footer_detail_three">
            <h4>Let's Chat</h4>
            <p>@Webshop.com</p>
            <div className="webshop_footer_social">
              <span>
                <img src={facebook} alt="" />
              </span>
              <span>
                <img src={linkedin} alt="" />
              </span>
              <span>
                <img src={instagram} alt="" />
              </span>
              <span>
                <img src={twitter} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
