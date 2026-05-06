"use client";
import React from "react";
import "./Services.css";
import { Breadcrumb, Container } from "react-bootstrap";
import { FAQSEC } from "../HomePage/HomePage";
import Testimonial from "@/app/Component/Testimonial/Testimonial";

function Services() {
  return (
    <>
      <section className="ServicesPageSec">
        <Container fluid className="container-xl">
          <div className="ServicesPageHeading">
            <h2>Our Services</h2>
            <Breadcrumb className="PageBreadcrums">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Services</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Container>
      </section>
      <Testimonial />
      <FAQSEC />
    </>
  );
}

export default Services;
