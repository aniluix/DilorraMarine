"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Portfolio.css";
import Image from "next/image";
import { SmallTitle } from "@/app/Pages/HomePage/HomePage";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filterButtons = [
    "All Services",
    "Express Delivery",
    "Freight Transport",
    "Warehousing",
    "Customs",
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Air Freight Solutions",
      description: "Fast and reliable global air cargo services.",
      category: "Freight Transport",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Real-Time Tracking Portal",
      description: "Advanced digital dashboard for end-to-end cargo visibility.",
      category: "Express Delivery",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Dedicated Support Team",
      description: "24/7 client coordination and customs clearance assistance.",
      category: "All Services",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "Supply Chain Consulting",
      description: "Strategic network optimization for global enterprises.",
      category: "Warehousing",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 5,
      title: "Mobile Fleet Dispatch",
      description: "Seamless on-the-road tracking and driver management.",
      category: "Customs",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 6,
      title: "Instant Quote App",
      description: "User-friendly mobile interface for immediate shipping rates.",
      category: "All Services",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 7,
      title: "Secured Packaging",
      description: "Industrial-grade parcel protection and handling systems.",
      category: "All Services",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 8,
      title: "Merchant Dashboard",
      description: "Seamless store integration and automated shipping labels.",
      category: "All Services",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 9,
      title: "Direct-to-Consumer Delivery",
      description: "Friendly, reliable local couriers right to the customer's doorstep.",
      category: "All Services",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 10,
      title: "fulfillment Operations",
      description: "Efficient sorting, packing, and dispatch centers.",
      category: "All Services",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 11,
      title: "On-Demand Courier App",
      description: "Easy booking and live rider tracking for local senders.",
      category: "All Services",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 12,
      title: "Smart Notifications",
      description: "Instant delivery updates and SMS alerts for receivers.",
      category: "All Services",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    },
  ];

  const filteredItems =
    activeFilter === "All Projects"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="portfolio-section">
      <Container fluid className="container-xl">
        <div className="PortfolioData">
          <div className="TopBarPortFolio">
            <div className="TopHeadPortFolio">
              <SmallTitle title="SHIPPING GALLERY" />
              <h2>Our Logistical Footprint</h2>
            </div>
            <div className="filter-buttons">
              {filterButtons.map((button) => (
                <Button
                  key={button}
                  className={`filter-btn ${activeFilter === button ? "active" : ""}`}
                  onClick={() => setActiveFilter(button)}
                >
                  {button}
                </Button>
              ))}
            </div>
          </div>

          <div className="portfolio-grid">
            <Row>
              {filteredItems.map((item) => (
                <Col lg={4} md={6} sm={12} key={item.id} className="mb-4">
                  <div className="portfolio-item">
                    <div className="portfolio-image">
                      <Image
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        width={400}
                        height={300}
                      />
                      <div className="portfolio-overlay">
                        <div className="portfolio-overlay-content">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                          <span className="portfolio-category">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <h3 className="portfolio-item-title">{item.title}</h3>
                      <p className="portfolio-item-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
