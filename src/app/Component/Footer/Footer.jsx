import React from "react";
import "./Footer.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="FooterSecData">
          <Container fluid className="container-xl">
            <div className="footer-insta-widget">
              <div className="lft">
                <h3>
                  Let&apos;s Get Started With Us, <br /> Further Info & Support
                  Team
                </h3>
              </div>
              <div className="Ryt">
                <span>
                  <Icon
                    icon="teenyicons:headset-solid"
                    width="52"
                    height="52"
                  />
                </span>
                <div className="s">
                  <p>FEEL FREE TO CALL US</p>
                  <Link href="tel:+16134836285">+1 (613) 483-6285</Link>
                </div>
              </div>
            </div>
          </Container>
          <div className="footer-widgets-wrap">
            <Container fluid className="container-xl">
              <Row>
                <Col md={6}>
                  <div
                    className="footer-widget-Div"
                    style={{ paddingRight: "40px" }}
                  >
                    <h3>
                      News Letter{" "}
                      <Icon
                        icon="emojione-monotone:ship"
                        width="20"
                        height="20"
                      />
                    </h3>
                    <p>
                      Join our newsletter community to receive regular updates{" "}
                      <br />
                      on the topics that matter to you.
                    </p>
                    <div className="suprtinpt">
                      <Form.Control type="email" placeholder="Email Adress" />
                      <Icon
                        icon="streamline:send-email"
                        width="16"
                        height="16"
                        color="#ec264f"
                      />
                    </div>
                  </div>
                </Col>
                {/* <Col md={2}>
                  <div className="footer-widget-Div">
                    <h3>
                      Visa{" "}
                      <Icon
                        icon="emojione-monotone:ship"
                        width="20"
                        height="20"
                      />
                    </h3>
                    <ul className="FooterMenu">
                      <li>
                        <Link href="#">
                          <Icon
                            className="rise-shake"
                            icon="tdesign:gesture-right-filled"
                            width="24"
                            height="24"
                          />{" "}
                          Migration Visas
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="#">
                          <Icon
                            className="rise-shake"
                            icon="tdesign:gesture-right-filled"
                            width="24"
                            height="24"
                          />{" "}
                          Diplomatic Visa
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="#">
                          <Icon
                            className="rise-shake"
                            icon="tdesign:gesture-right-filled"
                            width="24"
                            height="24"
                          />{" "}
                          Residence Visa
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="#">
                          <Icon
                            className="rise-shake"
                            icon="tdesign:gesture-right-filled"
                            width="24"
                            height="24"
                          />{" "}
                          Student Visa
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="#">
                          <Icon
                            className="rise-shake"
                            icon="tdesign:gesture-right-filled"
                            width="24"
                            height="24"
                          />{" "}
                          Business Visa
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="#">
                          <Icon
                            className="rise-shake"
                            icon="tdesign:gesture-right-filled"
                            width="24"
                            height="24"
                          />{" "}
                          Tourist Visa
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </Col> */}

                <Col md={2}>
                  <div className="footer-widget-Div">
                    <h3>
                      Quick Links{" "}
                      <Icon
                        icon="emojione-monotone:ship"
                        width="20"
                        height="20"
                      />
                    </h3>
                    <ul className="FooterMenu">
                      <li>
                        <Link href="#">
                          <Icon
                            className="rise-shake"
                            icon="tdesign:gesture-right-filled"
                            width="24"
                            height="24"
                          />{" "}
                          Home
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="#">
                          <Icon
                            className="rise-shake"
                            icon="tdesign:gesture-right-filled"
                            width="24"
                            height="24"
                          />{" "}
                          About Us
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="#">
                          <Icon
                            className="rise-shake"
                            icon="tdesign:gesture-right-filled"
                            width="24"
                            height="24"
                          />{" "}
                          Our Services
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="#">
                          <Icon
                            className="rise-shake"
                            icon="tdesign:gesture-right-filled"
                            width="24"
                            height="24"
                          />{" "}
                          Contact Us
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col md={4}>
                  <div
                    className="footer-widget-Div"
                    style={{ paddingLeft: "40px" }}
                  >
                    <h3>
                      Contact Info{" "}
                      <Icon
                        icon="emojione-monotone:ship"
                        width="20"
                        height="20"
                      />
                    </h3>
                    <div className="loctdiv">
                      <Link href="#">
                        <Icon icon="mdi:locations" width="24" height="24" /> 577
                        Marginal Rd, Halifax, NS B3H 4P6{" "}
                      </Link>
                      <Link href="#">
                        <Icon icon="mdi:locations" width="24" height="24" /> 16
                        Bath Rd, Kingston, ON K7L 1H4{" "}
                      </Link>
                      <Link href="mailto:info@dilorramarine.com">
                        <Icon
                          icon="iconoir:mail-solid"
                          width="24"
                          height="24"
                        />{" "}
                        info@dilorramarine.com{" "}
                      </Link>
                      <Link href="tel:+16134836285">
                        <Icon
                          icon="ic:baseline-phone"
                          className="rise-shake"
                          width="24"
                          height="24"
                        />{" "}
                        +1 (613) 483-6285{" "}
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="footer-bottom-wrap">
            <p>
              © Copyright 2025. All rights reserved <span>Dilorra Marine.</span>
              . Designed by <Link target="_blank" href="https://anilkuix.lovable.app">Anil Kumar</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
