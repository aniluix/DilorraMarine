"use client";
import React from "react";
import "./Contactus.css";
import { Enquire, FAQSEC } from "../HomePage/HomePage";
import Testimonial from "@/app/Component/Testimonial/Testimonial";
import { Breadcrumb, Container } from "react-bootstrap";
import Link from "next/link";

function Contactus() {
  return (
    <>
      <section className="ContactPageSec">
        <Container fluid className="container-xl">
          <div className="ContactPageHeading">
            <h2>Contact Us</h2>
            <Breadcrumb className="PageBreadcrums">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Container>
      </section>
      <section className="ContGetTouchSec">
        <Container fluid className="container-xl">
          <div className="ContGetTouchData">
            <div className="LeftTouchedDiv">
              <h3>Get in Touch</h3>
              <p>
                We would love to hear from you! Whether you have a question
                about our services, need assistance, or just want to say hello,
                feel free to reach out to us. Our team is here to help and
                provide you with the best possible support.
              </p>

              <div className="TouchAdrss">
                <h6>
                  Halifax, Nova Scotia <br /> Head Office
                </h6>
                <p>577 Marginal Rd, Halifax, NS B3H 4P6</p>
                <p>You can contact us through the following methods:</p>
                <Link href="mailto:info@dilorramarine.com">
                  <strong>Email:</strong> info@dilorramarine.com
                </Link>
                <Link href="tel:+19024035633">
                  <strong>Phone:</strong> +1 (902) 403-5633
                </Link>
              </div>

              <div className="TouchAdrss">
                <h6>
                  Kingston, Ontario <br /> Regional Office
                </h6>
                <p>16 Bath Rd, Kingston, ON K7L 1H4</p>

                <p>You can contact us through the following methods:</p>
                <Link href="mailto:info@dilorramarine.com">
                  <strong>Email:</strong> info@dilorramarine.com
                </Link>
                <Link href="tel:+16134836285">
                  <strong>Phone:</strong> +1 (613) 483-6285
                </Link>
              </div>
            </div>
            <div className="TouchedMap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.0343331176286!2d-63.5698403234287!3d44.63070658866281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a2244601fbc85%3A0xfda0671d0eeaf09d!2s577%20Marginal%20Rd%2C%20Halifax%2C%20NS%20B3H%204P6%2C%20Canada!5e1!3m2!1sen!2sin!4v1777879866787!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>

      <Enquire />
      <Testimonial />
      <FAQSEC />
    </>
  );
}

export default Contactus;
