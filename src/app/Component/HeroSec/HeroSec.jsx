"use client";
import React, { useState } from "react";
import "./HeroSec.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { CommonBtn } from "@/app/Pages/HomePage/HomePage";

function HeroSec() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="HeroSecCarousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="SliderContentData">
              <div className="LeftSliderContent">
                <div className="ContentText">
                  <h2>
                    Expert Guidance <br /> for Your Next <br /> Destination.
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                  </p>
                  <CommonBtn text="Learn More" />
                </div>
              </div>
              <div className="RightSliderContentImage">
                <Image
                  src="/Images/sliderbg1.jpg"
                  alt="sliderbg1"
                  width={900}
                  height={900}
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="SliderContentData">
              <div className="LeftSliderContent">
                <div className="ContentText">
                  <h2>
                    Navigate Your Visa <br /> Process with <br /> Confidence.
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                  </p>
                  <CommonBtn text="Learn More" />
                </div>
              </div>
              <div className="RightSliderContentImage">
                <Image
                  src="/Images/sliderbg2.jpg"
                  alt="sliderbg2"
                  width={900}
                  height={900}
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="SliderContentData">
              <div className="LeftSliderContent">
                <div className="ContentText">
                  <h2>
                    Step-by-Step <br /> Guidance for Visa <br /> Succes
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                  </p>
                  <CommonBtn text="Learn More" />
                </div>
              </div>
              <div className="RightSliderContentImage">
                <Image
                  src="/Images/sliderbg3.jpg"
                  alt="sliderbg3"
                  width={900}
                  height={900}
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="BookFreeConsultation">
          <div className="booktext">
            <p>(528) 456-7592</p>
            <h4>
              APPLY ONLINE FOR <br /> NEW VISA
            </h4>
          </div>
          <Link href="/contact">Book a visa</Link>
        </div>
      </div>
    </>
  );
}

export default HeroSec;
