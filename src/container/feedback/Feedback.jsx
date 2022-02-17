import React, { useRef, useEffect } from "react";
import "./feedback.css";
import { TweenMax } from "gsap/index";

function Feedback() {
  let textItem = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);

  useEffect(() => {
    TweenMax.from(textItem, 2, {
      scrollTrigger: {
        trigger: textItem,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      y: 100,
      ease: "bounce.out",
    });

    TweenMax.from(box1, 1, {
      scrollTrigger: {
        trigger: box1,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      x: -100,
      ease: "expo.out",
      delay: 0.4,
    });

    TweenMax.from(box2, 1, {
      scrollTrigger: {
        trigger: box2,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      x: -100,
      ease: "expo.out",
      delay: 0.8,
    });
    TweenMax.from(box3, 1, {
      scrollTrigger: {
        trigger: box3,
        start: "top 50%",
        markers: false,
      },
      opacity: 0,
      x: 100,
      ease: "expo.out",
      delay: 0.8,
    });
    TweenMax.from(box4, 1, {
      scrollTrigger: {
        trigger: box4,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      x: 100,
      ease: "expo.out",
      delay: 0.4,
    });

    TweenMax.from(box5, 1, {
      scrollTrigger: {
        trigger: box5,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      x: -100,
      ease: "expo.out",
      delay: 0.4,
    });

    TweenMax.from(box6, 1, {
      scrollTrigger: {
        trigger: box6,
        start: "top center",
        markers: false,
      },
      opacity: 0,
      x: -100,
      ease: "expo.out",
      delay: 0.8,
    });
  }, []);

  return (
    <div className="webshop_review_container">
      <div
        ref={(el) => (textItem = el)}
        className="webshop_review_heading_container"
      >
        <h1>Feedback from our valued customers</h1>
      </div>
      <div className="webshop_review_boxes">
        <div ref={(el) => (box1 = el)} className="webshop_review_box_one">
          <div className="webshop_review_box_one_star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <h4>
            I am giving this Developer a 5 star for everything!!! Firstly the
            design is great and secondly the support is amazing! They really
            help you and get back to you quickly.
          </h4>
          <div className="credit">
            <p>by</p>
            <h5>schlcks</h5>
          </div>
        </div>

        <div ref={(el) => (box2 = el)} className="webshop_review_box_one">
          <div className="webshop_review_box_one_star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <h4>
            I am giving this Developer a 5 star for everything!!! Firstly the
            design is great and secondly the support is amazing! They really
            help you and get back to you quickly.
          </h4>
          <div className="credit">
            <p>by</p>
            <h5>jonathan</h5>
          </div>
        </div>

        <div
          ref={(el) => (box3 = el)}
          id="webshop_review_box_three"
          className="webshop_review_box_one"
        >
          <div className="webshop_review_box_one_star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <h4>
            I am giving this Developer a 5 star for everything!!! Firstly the
            design is great and secondly the support is amazing! They really
            help you and get back to you quickly.
          </h4>
          <div className="credit">
            <p>by</p>
            <h5>Frimpondage</h5>
          </div>
        </div>

        <div
          ref={(el) => (box4 = el)}
          id="webshop_review_box_four"
          className="webshop_review_box_one"
        >
          <div className="webshop_review_box_one_star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <h4>
            I am giving this Developer a 5 star for everything!!! Firstly the
            design is great and secondly the support is amazing! They really
            help you and get back to you quickly.
          </h4>
          <div className="credit">
            <p>by</p>
            <h5>Imicadio</h5>
          </div>
        </div>
      </div>
      <div className="box_container_responsiveness">
        <div
          ref={(el) => (box5 = el)}
          id="webshop_review_box_three_off"
          className="webshop_review_box_one"
        >
          <div className="webshop_review_box_one_star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <h4>
            I am giving this Developer a 5 star for everything!!! Firstly the
            design is great and secondly the support is amazing! They really
            help you and get back to you quickly.
          </h4>
          <div className="credit">
            <p>by</p>
            <h5>Imicadio</h5>
          </div>
        </div>

        <div
          ref={(el) => (box6 = el)}
          id="webshop_review_box_four_off"
          className="webshop_review_box_one"
        >
          <div className="webshop_review_box_one_star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <h4>
            I am giving this Developer a 5 star for everything!!! Firstly the
            design is great and secondly the support is amazing! They really
            help you and get back to you quickly.
          </h4>
          <div className="credit">
            <p>by</p>
            <h5>Imicadio</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
