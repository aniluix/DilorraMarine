"use client";
import React from "react";
import "./Testimonial.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { SmallTitle } from "@/app/Pages/HomePage/HomePage";

const testimonials = [
  {
    quote:
      "After a recent data breach, I was really pleased to use a document signing platform that uses Blockchain. It has given me peace of mind. Thank you",
    name: "Karen - Gold Coast",
    role: "CEO and Co-founder of ABC Company",
    avatar: "/Images/user.jpg",
  },

  {
    quote:
      "Great, east document security. They also helped me with all my integrations at great rates. Can recommend DataSafe.",
    name: "David - QLD",
    role: "CEO and Co-founder of ABC Company",
    avatar: "/Images/user.jpg",
  },

  {
    quote:
      "This was my first experience, and I must say, I was impressed with the process” “It was very easy to use. Well, done.",
    name: "David - Miami",
    role: "CEO and Co-founder of ABC Company",
    avatar: "/Images/user.jpg",
  },
  {
    quote:
      "After a recent data breach, I was really pleased to use a document signing platform that uses Blockchain. It has given me peace of mind. Thank you",
    name: "Karen - Gold Coast",
    role: "CEO and Co-founder of ABC Company",
    avatar: "/Images/user.jpg",
  },

  {
    quote:
      "Great, east document security. They also helped me with all my integrations at great rates. Can recommend DataSafe.",
    name: "David - QLD",
    role: "CEO and Co-founder of ABC Company",
    avatar: "/Images/user.jpg",
  },

  {
    quote:
      "This was my first experience, and I must say, I was impressed with the process” “It was very easy to use. Well, done.",
    name: "David - Miami",
    role: "CEO and Co-founder of ABC Company",
    avatar: "/Images/user.jpg",
  },
];

export default function Testimonial() {
  return (
    <section className="TestimonialSec">
      <Container fluid>
        <div className="TestimonialsData">
          <div className="TestimonialHead">
            <SmallTitle title="Testimonial" />
            <h2>What our clients say</h2>
          </div>

          <div className="TestimonialItems">
            {/* Top row: Left → Right */}
            <Row className="testi-row">
              <Col>
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  slidesPerView={"auto"}
                  spaceBetween={20}
                  speed={9000}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: false, // reverse direction for second row
                  }}
                  className="testi-'swiper"
                >
                  {testimonials.map((t, i) => (
                    <SwiperSlide key={"t1-" + i} className="testi-slide">
                      <Card className="TestinlCard">
                        <Card.Body>
                          <Card.Text className="quote-text">
                            <span className="quote-mark">“</span>
                            {t.quote}
                          </Card.Text>
                          <div className="testi-footer">
                            <Image
                              className="avatar"
                              src={t.avatar}
                              alt={t.name}
                              width={40}
                              height={40}
                              priority
                            />
                            <div className="author">
                              <h6 className="name">{t.name}</h6>
                              <p className="role">{t.role}</p>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Col>
            </Row>

            {/* Bottom row: Right → Left (reverseDirection) */}
            <Row className="testi-row">
              <Col>
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  slidesPerView={"auto"}
                  spaceBetween={20}
                  speed={9000}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: true, // reverse direction for second row
                  }}
                  className="testi-swiper reverse"
                >
                  {testimonials.map((t, i) => (
                    <SwiperSlide key={"t2-" + i} className="testi-slide">
                      <Card className="TestinlCard">
                        <Card.Body>
                          <Card.Text className="quote-text">
                            <span className="quote-mark">“</span>
                            {t.quote}
                          </Card.Text>
                          <div className="testi-footer">
                            <Image
                              className="avatar"
                              src={t.avatar}
                              alt={t.name}
                              width={40}
                              height={40}
                              priority
                            />
                            <div className="author">
                              <h6 className="name">{t.name}</h6>
                              <p className="role">{t.role}</p>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}
