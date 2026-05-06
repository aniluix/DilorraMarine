"use client";
import React from "react";
import "./About.css";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Testimonial from "@/app/Component/Testimonial/Testimonial";
import { FAQSEC, OurTeams } from "../HomePage/HomePage";
import Image from "next/image";

function About() {
  return (
    <>
      <section className="AboutUsPageSec">
        <Container fluid className="container-xl">
          <div className="AboutUsPageHeading">
            <h2>About Us</h2>
            <Breadcrumb className="PageBreadcrums">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>About Us</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Container>
      </section>
      <section className="AboutUsSec">
        <Container fluid className="container-xl">
          <div className="AboutData">
            <div className="AbutTexed">
              <h2>About us</h2>
              <h4>
                Book today and <br /> set sail
              </h4>
              <p>
                Suspendisse nisl urna, tincidunt eget turpis non, aliquet
                accumsan metus. Nullam ut orci in arcu sodales imperdiet sit
                amet nec libero. Maecenas nulla libero, blandit non velit vel,
                consequat egestas est. Aenean tristique elit sed lacus sagittis
                imperdiet. Morbi vitae augue aliquet tellus viverra facilisis.
                Aenean tristique
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="AbtExplorSec">
        <Container fluid>
          <div className="AbtExplrData">
            <div className="explore_box1">
              <Image
                src="/Images/ex-1.png"
                alt="ofr1"
                width={800}
                height={659}
              />
              <div class="thm-h thm-h-3 ">
                <h4>Charter</h4>
              </div>
            </div>
            <div className="explore_box2">
              <Image
                src="/Images/ex-2.png"
                className="img-fluid"
                alt="ofr1"
                width={800}
                height={659}
              />
              <Image
                src="/Images/ex-i-1.png"
                className="img-fluid-i"
                alt="ofr1"
                width={180}
                height={180}
              />
              <div class="thm-h thm-h-3 ">
                <h4>Destinations</h4>
              </div>
            </div>
            <div className="explore_box2">
              <Image
                src="/Images/ex-2.png"
                className="img-fluid"
                alt="ofr1"
                width={800}
                height={659}
              />
              <Image
                src="/Images/ex-i-3.png"
                className="img-fluid-i"
                alt="ofr1"
                width={180}
                height={180}
              />
              <div class="thm-h thm-h-3 ">
                <h4>Management</h4>
              </div>
            </div>
            <div className="explore_box1">
              <Image
                src="/Images/ex-4.png"
                alt="ofr1"
                width={800}
                height={659}
              />
              <div class="thm-h thm-h-3 ">
                <h4>Experience</h4>
              </div>
            </div>
            <div className="explore_box1">
              <Image
                src="/Images/ex-5.png"
                alt="ofr1"
                width={800}
                height={659}
              />
              <div class="thm-h thm-h-3 ">
                <h4>Specials</h4>
              </div>
            </div>
            <div className="explore_box2">
              <Image
                src="/Images/ex-2.png"
                className="img-fluid"
                alt="ofr1"
                width={800}
                height={659}
              />
              <Image
                src="/Images/ex-i-2.png"
                className="img-fluid-i"
                alt="ofr1"
                width={180}
                height={180}
              />
              <div class="thm-h thm-h-3 ">
                <h4>News & Events</h4>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <OurTeams />
      <Testimonial />
      <FAQSEC />
    </>
  );
}

export default About;
