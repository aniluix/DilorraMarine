"use client";
import React, { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import Skiper30 from "@/app/Component/Gallery/Gallery";
import Portfolio from "@/app/Component/Portfolio/Portfolio";
import { Icon } from "@iconify/react";
import { Accordion, Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import Testimonial from "@/app/Component/Testimonial/Testimonial";
import Image from "next/image";
import HeroSec from "@/app/Component/HeroSec/HeroSec";

const Counter = ({ target, suffix, startCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const end = parseInt(target);
    const duration = 2000;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);
  }, [startCount, target]);

  return (
    <span className="count">
      {count}
      {suffix}
    </span>
  );
};

function HomePage() {
  useEffect(() => {
    let lightboxInstance = null;

    // dynamic import so this runs only in browser
    (async () => {
      const GLightbox = (await import("glightbox")).default;
      lightboxInstance = GLightbox({
        selector: ".glightbox3",
        // optional settings you may want
        // openEffect: 'fade',
        // plyr: { css: 'https://cdn.plyr.io/3.6.12/plyr.css', js: 'https://cdn.plyr.io/3.6.12/plyr.min.js' }
      });
    })();

    return () => {
      if (lightboxInstance && typeof lightboxInstance.destroy === "function") {
        lightboxInstance.destroy();
      }
    };
  }, []);

  // Counter Count Started
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  // Start counting when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);
  // Counter Count Ended

  const services = [
    {
      id: 1,
      title: "Ocean Freight",
      icon: "uil:ship",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "Air Freight",
      icon: "uil:plane",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "Road Transport",
      icon: "uil:truck",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <>
      <section className="HomeHeroSection">
        <Container fluid className="container-xl">
          <div className="HomeHeroData">
            <div className="LeftHomeHeroDiv">
              <h2>
                Dilorra Shipping <br /> <span>around the world</span>
              </h2>
              <p>
                Need to move goods? Our freight and logistics solutions are
                tailored to meet your specific needs. We offer reliable cargo
                transportation, warehousing, distribution, and supply chain
                management services to ensure timely and secure delivery.
              </p>
              <CommonBtn text="Explore More" />
            </div>
            <div className="RightHomeHeroDiv">
              <div className="DemovideosBtn">
                <Link
                  href="https://youtu.be/jNE6bv-TAEk?si=a1j79Bzokd_WGSz4"
                  passHref
                  className="glightbox3 pulsating-play-btn"
                  data-type="video"
                ></Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="ServicesSection">
        <Container fluid className="container-xl">
          <div className="ServicesData">
            {services.map((item) => (
              <div className="ServicesCard" key={item.id}>
                <span>
                  <Icon icon={item.icon} width="32" height="32" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link href="#">
                  Read More <Icon icon="ep:top-right" width="20" height="20" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* <HeroSec /> */}
      {/* WeOffer Sec  */}
      <section className="WeOffersSec">
        <Container fluid className="container-xl">
          <div className="WeOfferData">
            <div className="topOffer">
              <div className="lefttp">
                <SmallTitle title="Ship Categories" />
                <h2> We Offer <span>Cargo  </span> & <br /> Shipping Services </h2>
                <p className="para">
                  With decades of maritime expertise, we deliver reliable, safe, and efficient shipping solutions across global sea routes. From bulk cargo to express freight, our fleet is ready to serve your business needs worldwide.
                </p>
                <CommonBtn text="View More" />
              </div>
              <div className="Righttp">
                <div className="OfferVisaCard">
                  <div className="left">
                    <Image
                      src="/Images/ofr1.png"
                      alt="ofr1"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="Right">
                    <h4>Cargo Shipping</h4>
                    <p>Full-service cargo solutions for bulk, breakbulk, and containerized goods. We handle customs, documentation, and on-time delivery across all major ports.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="BottomOffer">
              <div className="OfferVisaCard">
                <div className="left">
                  <Image
                    src="/Images/ofr2.png"
                    alt="ofr2"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="Right">
                  <h4>Container Freight</h4>
                  <p>Secure 20ft & 40ft container shipping with real-time tracking and flexible booking.</p>
                </div>
              </div>

              <div className="OfferVisaCard">
                <div className="left">
                  <Image
                    src="/Images/ofr3.png"
                    alt="ofr3"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="Right">
                  <h4>Express Delivery</h4>
                  <p>Priority sea freight with guaranteed schedules for time-sensitive shipments worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* LeadingSection */}
      <section className="LeadingSection">
        <div className="LeadingData">
          <h3>
            {" "}
            World&apos;s leading <br /> contractlogistics provider{" "}
          </h3>
          <p>
            Feel free to reach out to us with any inquiries about our services,
            pricing, tracking shipments, or any other logistic-related
            questions.
          </p>
          <CommonBtn text="Contact Now" />
        </div>
      </section>

      {/* FeatureSection Started  */}
      <section className="FeatureSection">
        <Container fluid>
          <Row>
            <Col md={4}>
              <div className="feature-one__single">
                <div className="feature-one__inner">
                  <div className="feature-one__shape-1">
                    <Image
                      decoding="async"
                      src="/Images/feature-one-shape-1.png"
                      alt="alt"
                      title="feature-one-shape-1"
                      width={295}
                      height={361}
                    />{" "}
                  </div>
                  <div className="feature-one__img-one ">
                    <Image
                      decoding="async"
                      src="/Images/feature-1-1.png"
                      alt="alt"
                      title="feature-1-1"
                      width={386}
                      height={473}
                    />{" "}
                  </div>
                  <p className="feature-one__sub-title">Online Booking</p>{" "}
                  <h3 className="feature-one__title">
                    <Link href="">
                      Book Your Shipment <br />  Online
                    </Link>{" "}
                  </h3>
                  <div className="feature-one__btn-box">
                    <Link className="feature-one__btn" href="">
                      Learn More
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-one__single">
                <div className="feature-one__inner">
                  <div className="feature-one__shape-1">
                    <Image
                      decoding="async"
                      src="/Images/feature-one-shape-1.png"
                      alt="alt"
                      title="feature-one-shape-1"
                      width={295}
                      height={361}
                    />{" "}
                  </div>
                  <div className="feature-one__img-one feature-one__img-two">
                    <Image
                      decoding="async"
                      src="/Images/feature-1-2.png"
                      alt="alt"
                      title="feature-1-2"
                      width={386}
                      height={473}
                    />{" "}
                  </div>
                  <p className="feature-one__sub-title feature-one__sub-title">
                    Live Tracking
                  </p>{" "}
                  <h3 className="feature-one__title">
                    <Link href="#">
                      Real-Time Cargo <br />
                       Tracking
                    </Link>{" "}
                  </h3>
                  <div className="feature-one__btn-box">
                    <Link
                      className="feature-one__btn feature-one__btn"
                      href="#"
                    >
                      Learn More
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-one__single">
                <div className="feature-one__inner">
                  <div className="feature-one__shape-1">
                    <Image
                      decoding="async"
                      src="/Images/feature-one-shape-1.png"
                      alt="alt"
                      title="feature-one-shape-1"
                      width={295}
                      height={361}
                    />{" "}
                  </div>
                  <div className="feature-one__img-one feature-one__img-three">
                    <Image
                      decoding="async"
                      src="/Images/feature-1-3.png"
                      alt="alt"
                      title="feature-1-3"
                      width={386}
                      height={473}
                    />{" "}
                  </div>
                  <p className="feature-one__sub-title feature-one__sub-title feature-one__sub-title">
                    download form
                  </p>{" "}
                  <h3 className="feature-one__title">
                    <a
                      className="  "
                      href="https://bracketweb.com/treckwp/visa-details/"
                    >
                      Get Shipping Documents
                    </a>{" "}
                  </h3>
                  <div className="feature-one__btn-box">
                    <a
                      className="feature-one__btn feature-one__btn feature-one__btn"
                      href="https://bracketweb.com/treckwp/visa-details/"
                    >
                      Learn More
                    </a>{" "}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="feature-one__bottom">
                <p className="feature-one__text">
                  Providing a One-Stop Solution for all Your {" "}
                  <Link target="_blank" href="https://en.wikipedia.org/wiki/Cargo_ship">
                    Cargo
                  </Link>
                  & 
                  <Link target="_blank" href="https://en.wikipedia.org/wiki/Freight_transport">
                    Shipping 
                  </Link>{" "}
                  Needs
                </p>{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Country  */}
      <section className="CountrySupportSec">
        <div className="TopCountrySupport">
          <SmallTitle title="Countries" />
          <h2>
            Countries We Ship To <br /> Around the World.
          </h2>
        </div>

        <div className="CountrySupportData">
          <div className="countryItemTexted">
            <div className="feature-box-inner">
              <div className="figure">
                <Image
                  src="/Images/Countryflag1.jpg"
                  alt="Countryflag1"
                  width={48}
                  height={48}
                />
              </div>
              <h4>Australia</h4>
              <p>
                We provide full-service sea freight to Sydney, Melbourne, Brisbane, and Perth — covering both FCL and LCL container shipments with door-to-port delivery.
              </p>
              <Link href="">
                Read more{" "}
                <Icon
                  icon="fa6-solid:angles-right"
                  width="18"
                  height="18"
                />{" "}
              </Link>
              <div className="fbox-number">01</div>
            </div>
          </div>
          <div className="countryItemImage">
            <Image
              src="/Images/Country1.jpg"
              alt="Country1"
              width={500}
              height={417}
              priority
            />
          </div>

          <div className="countryItemTexted">
            <div className="feature-box-inner">
              <div className="figure">
                <Image
                  src="/Images/Countryflag2.jpg"
                  alt="Countryflag2"
                  width={48}
                  height={48}
                />
              </div>
              <h4>Canada</h4>
              <p>
                Regular shipping routes to Vancouver, Toronto, and Halifax. We handle all customs clearance, freight insurance, and last-mile logistics across Canada.
              </p>
              <Link href="">
                Read more{" "}
                <Icon
                  icon="fa6-solid:angles-right"
                  width="18"
                  height="18"
                />{" "}
              </Link>
              <div className="fbox-number">02</div>
            </div>
          </div>
          <div className="countryItemImage">
            <Image
              src="/Images/Country2.jpg"
              alt="Country2"
              width={500}
              height={417}
              priority
            />
          </div>

          <div className="countryItemTexted reverted">
            <div className="feature-box-inner">
              <div className="figure">
                <Image
                  src="/Images/Countryflag3.jpg"
                  alt="Countryflag3"
                  width={48}
                  height={48}
                />
              </div>
              <h4>Japan</h4>
              <p>
                Scheduled cargo services to Tokyo, Osaka, Nagoya, and Yokohama with some of the fastest transit times in Asia-Pacific trade corridors.
              </p>
              <Link href="">
                Read more{" "}
                <Icon
                  icon="fa6-solid:angles-right"
                  width="18"
                  height="18"
                />{" "}
              </Link>
              <div className="fbox-number">03</div>
            </div>
          </div>
          <div className="countryItemImage">
            <Image
              src="/Images/Country3.jpg"
              alt="Country3"
              width={500}
              height={417}
              priority
            />
          </div>

          <div className="countryItemTexted reverted">
            <div className="feature-box-inner">
              <div className="figure">
                <Image
                  src="/Images/Countryflag4.jpg"
                  alt="Countryflag4"
                  width={48}
                  height={48}
                />
              </div>
              <h4>UAE</h4>
              <p>
                Reliable freight forwarding to Dubai, Abu Dhabi, and Sharjah ports. We specialize in Gulf region logistics with flexible transit and storage options.
              </p>
              <Link href="">
                Read more{" "}
                <Icon
                  icon="fa6-solid:angles-right"
                  width="18"
                  height="18"
                />{" "}
              </Link>
              <div className="fbox-number">04</div>
            </div>
          </div>
          <div className="countryItemImage">
            <Image
              src="/Images/Country4.jpg"
              alt="Country4"
              width={500}
              height={417}
              priority
            />
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section className="WhyChooseSection">
        <Container fluid className="container-xl">
          <div className="WhyChooseData">
            <div className="LeftChooseUs">
              <div className="Choosehead">
                <SmallTitle title="Why Choose Us" />
                <h2>
                  Providing Full Range <br /> of Shipping Services
                </h2>
              </div>
              <div className="Choosepara">
                <p>
                  We are a trusted global shipping partner delivering cargo safely and on time across every major sea route. Our experienced team handles every step — from booking to final delivery.
                </p>
              </div>
              <div className="ChooseDataItems">
                <div className="chooseitems">
                  <Image
                    src="/Images/choose1.png"
                    alt="choose1"
                    width={52}
                    height={52}
                    style={{ margin: "0 auto" }}
                    priority
                  />
                  <div className="chosetext">
                    <h3>Easy Online Booking</h3>
                    <p>Book your shipment in minutes through our digital platform — no paperwork, no delays. Get instant quotes and schedule pickups from anywhere in the world.</p>
                  </div>
                </div>
                <div className="chooseitems">
                  <Image
                    src="/Images/choose2.png"
                    alt="choose2"
                    width={52}
                    height={52}
                    style={{ margin: "0 auto" }}
                    priority
                  />
                  <div className="chosetext">
                    <h3>Fast & Reliable Transit</h3>
                    <p>
                      We operate on fixed sailing schedules with guaranteed transit times. Your cargo arrives on time — every time — backed by our on-time delivery commitment.
                    </p>
                  </div>
                </div>
                <div className="chooseitems">
                  <Image
                    src="/Images/choose3.png"
                    alt="choose3"
                    width={52}
                    height={52}
                    style={{ margin: "0 auto" }}
                    priority
                  />
                  <div className="chosetext">
                    <h3>99% Safe Cargo Delivery</h3>
                    <p>
                      Our fleet meets the highest international safety standards. Every shipment is fully insured, tracked in real time, and handled by certified logistics professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="RightChooseUs">
              <div className="singleImg">
                <Image
                  src="/Images/chosejorny1.jpg"
                  alt="chosejorny1"
                  width={415}
                  height={547}
                  priority
                />
              </div>
              <div className="twoImg">
                <Image
                  src="/Images/chosejorny2.jpg"
                  alt="chosejorny2"
                  width={288}
                  height={245}
                  priority
                />
                <Image
                  src="/Images/chosejorny3.jpg"
                  alt="chosejorny3"
                  width={288}
                  height={382}
                  priority
                />
              </div>
              <div className="choose-box">
                <h3>
                  50M+ Shipments  <br /> Delivered
                </h3>
                <Image
                  src="/Images/client-1.png"
                  alt="chosejorny2"
                  width={130}
                  height={40}
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CounterSection  */}
      <section className="CounterSection" ref={sectionRef}>
        <Container>
          <Row>
            <Col md={3}>
              <div className="CounterCard">
                <div className="CounterIcon">
                  <Image
                    src="/Images/travel.png"
                    alt="travel"
                    width={56}
                    height={56}
                    priority
                  />
                </div>
                <div className="Counter-Content">
                  <h2>
                    <Counter target="35" suffix="+" startCount={startCount} />
                  </h2>
                  <p>
                    Countries Connected or <br /> Global Destinations
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="CounterCard">
                <div className="CounterIcon">
                  <Image
                    src="/Images/choose3.png"
                    alt="choose3"
                    width={56}
                    height={56}
                    priority
                  />
                </div>
                <div className="Counter-Content">
                  <h2>
                    <Counter target="853" suffix="+" startCount={startCount} />
                  </h2>
                  <p>
                    Successful Deliveries or <br /> Shipments Completed
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="CounterCard">
                <div className="CounterIcon">
                  <Image
                    src="/Images/money.png"
                    alt="money"
                    width={56}
                    height={56}
                    priority
                  />
                </div>
                <div className="Counter-Content">
                  <h2>
                    <Counter target="55" suffix="M+" startCount={startCount} />
                  </h2>
                  <p>
                    Tons of Cargo Handled or <br /> Annual Revenue (USD)
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="CounterCard">
                <div className="CounterIcon">
                  <Image
                    src="/Images/officer.png"
                    alt="officer"
                    width={56}
                    height={56}
                    priority
                  />
                </div>
                <div className="Counter-Content">
                  <h2>
                    <Counter target="3" suffix="+" startCount={startCount} />
                  </h2>
                  <p>
                    Years of Excellence or <br /> Logistics Experts
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
     {/*  <Skiper30 /> */}
      <Portfolio />
      
      <OurTeams />
      {/* SliderVideoSect  */}
      <section className="SliderVideoSect">
        <div className="SlideVideos">
          <video
            id="1300a723-0bf3-3d44-dc07-b9fced116202-video"
            autoPlay
            loop
            style={{
              backgroundImage: `url("https://assets-global.website-files.com/62ffe1cb61fdf4d2762b1ca8/630f4809bc0f50a62081d9ff_Untitled-poster-00001.jpg")`,
              objectFit: "cover",
            }}
            muted
            playsInline
            data-wf-ignore="true"
          >
            <source
              src="https://assets-global.website-files.com/62ffe1cb61fdf4d2762b1ca8/630f4809bc0f50a62081d9ff_Untitled-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="https://assets-global.website-files.com/62ffe1cb61fdf4d2762b1ca8/630f4809bc0f50a62081d9ff_Untitled-transcode.webm"
              data-wf-ignore="true"
            />
          </video>

          <div className="videostext">
            <h2>
              We Are Dedicated To Provide The Best Services At The Lowest
              Possible Cost.
            </h2>
            <div className="vidbtn">
              <Link
                href="https://youtu.be/jNE6bv-TAEk?si=a1j79Bzokd_WGSz4"
                passHref
                className="glightbox3 pulsating-play-btn"
                data-type="video"
              ></Link>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Enquire />
      <FAQSEC />
      
      <section></section>
    </>
  );
}

export default HomePage;

export function SmallTitle({ title }) {
  return (
    <div className="SamalTitleDiv">
      <Icon
        icon="fluent-emoji-high-contrast:passenger-ship"
        width="20"
        height="20"
      />
      <p>{title}</p>
      <Icon icon="mdi:world" width="20" height="20" color="#B80404" />
    </div>
  );
}

export function CommonBtn({ text }) {
  return (
    <Link href="#" className="immiPressBtn in_right">
      <span>{text}</span>
    </Link>
  );
}

export function Enquire() {
  return (
    <section className="EnquireSection">
      <div className="LeftContdiv"></div>
      <div className="MidContdiv">
        <div className="EnquireData">
          <div className="TopEnquiry">
            <SmallTitle title="Contact US" />
            <h2>Fell Free To Enquire About Any Question Your Got.</h2>
            <p>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting
            </p>
          </div>
          <Form>
            <Row>
              <Col md={12}>
                <Form.Control type="text" placeholder="Enter Name" />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Control type="email" placeholder="Enter Email" />
              </Col>
              <Col md={6}>
                <Form.Control type="number" placeholder="Enter Number" />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Control
                  as="textarea"
                  placeholder="Write a short descriptions"
                  rows={5}
                />
              </Col>
            </Row>
            <CommonBtn text="Send Now" />
          </Form>
        </div>
      </div>
      <div className="RightContdiv"></div>
    </section>
  );
}

export function OurTeams() {
  const teamMembers = [
  {
    id: 1,
    name: "Esther Hood",
    role: "Consultant",
    image: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "John Carter",
    role: "Advisor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Daniel Smith",
    role: "Consultant",
    image: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Daniel Smith",
    role: "Consultant",
    image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Daniel Smith",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Daniel Smith",
    role: "Consultant",
    image: "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Daniel Smith",
    role: "Consultant",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Daniel Smith",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Daniel Smith",
    role: "Consultant",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Daniel Smith",
    role: "Consultant",
    image: "https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Daniel Smith",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
  return (
    <section className="TeamsSec">
      <Container fluid className="container-xl">
        <div className="TeamsData">
          <div className="TeamHead">
            <SmallTitle title="EXPERT ADVISORS" />
            <h2>
              The Experts Who Make Your <br /> Journey Seamless
            </h2>
          </div>

          <div className="TeamsInfoData">
            {teamMembers.map((member) => (
              <div className="TeamsCard" key={member.id}>
                <div className="TeamInner">
                  <Link href="#" className="TeamsPic">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={330}
                      height={330}
                      priority
                    />
                  </Link>

                  <div className="TeamInfo">
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                  </div>
                </div>

                <div className="TeamsSocial">
                  <Link href="#">
                    <Icon
                      icon="fa6-brands:facebook-f"
                      width="14"
                      height="14"
                    />
                  </Link>

                  <Link href="#">
                    <Icon
                      icon="fa6-brands:twitter"
                      width="14"
                      height="14"
                    />
                  </Link>

                  <Link href="#">
                    <Icon
                      icon="fa6-brands:linkedin-in"
                      width="14"
                      height="14"
                    />
                  </Link>

                  <Link href="#">
                    <Icon
                      icon="fa6-brands:instagram"
                      width="14"
                      height="14"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FAQSEC() {
  const accordionData = [
    {
      id: "0",
      title: "What does H.A.S.S Migration Services do?",
      content:
        "We provide end-to-end immigration and visa support for individuals and families aspiring to study, work, or settle abroad. This includes skilled migration, student visas, work permits, family and spouse visas, business immigration, PR pathways, and more. Our certified experts assist you throughout the entire process to maximize your chances of success.",
    },
    {
      id: "1",
      title: "What happens if my visa is refused?",
      content:
        "If your visa application is refused, we can assess the reasons for refusal and guide you on possible options, including appeals or re-applications where applicable. Our goal is to support you throughout the entire journey.",
    },
    {
      id: "2",
      title: "How experienced is your team?",
      content:
        "Our experts have over 14+ years of combined experience in immigration consulting across multiple countries including Canada, Australia, UK, USA, Europe, and Singapore. We are trained to handle diverse and complex cases.",
    },
    {
      id: "3",
      title: "Are your migration consultants certified?",
      content:
        "Yes! Our consultants include registered immigration professionals, including MARA-registered agents and RCIC-certified consultants for Canadian immigration pathways where applicable. This ensures that you receive credible and ethical immigration guidance.",
    },
    {
      id: "4",
      title: "Can you guarantee visa approval?",
      content:
        "No migration agent can guarantee a visa approval because decisions are made by government visa authorities based on requirements and applicant eligibility. Any agency promising a guaranteed outcome should be viewed cautiously.",
    },
    {
      id: "5",
      title: "Can you help with settling in after I arrive?",
      content:
        "Yes — in many cases, we provide guidance on settlement planning, including information on housing, employment support, education, and adapting to your new country.",
    },
    {
      id: "6",
      title: "Do you offer consultations?",
      content:
        "Yes! We offer free initial eligibility assessments to understand your profile and recommend the best strategy for moving forward. Contact us to schedule your consultation today.",
    },
    {
      id: "7",
      title: "How will you keep me updated?",
      content:
        "We provide regular updates throughout each stage of your immigration process — from document submission to visa outcomes — so you are never left in the dark.",
    },
    {
      id: "8",
      title: "How long does the process take?",
      content:
        "Processing times depend on the visa category and country. Each application is unique, and government processing times can vary. We provide estimated timelines during consultation based on your case and program.",
    },
  ];

  return (
    <section className="FAQSection">
      <Container fluid className="container-xl">
        <div className="FaqSecData">
          <div className="FaqHeading">
            <SmallTitle title="FAQ" />
            <h2>Frequently Asked Question</h2>
          </div>
          <div className="FaqMainData">
            <Accordion defaultActiveKey={["0"]} flush>
              {accordionData.map((item) => (
                <Accordion.Item eventKey={item.id} key={item.id}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
