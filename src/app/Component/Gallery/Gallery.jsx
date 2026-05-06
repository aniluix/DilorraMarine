// Skiper30.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import "./Gallery.css";

const images = [
  "/Images/chosejorny3.JPG",
  "/Images/cargo-shipment-bg-img-1.jpg",
  "/Images/cargo-shipment-bg-img-2.jpg",
  "/Images/cargo-shipment-bg-img-3.jpg",
  "/Images/cargo-shipment-bg-img-2.jpg",
  "/Images/cargo-shipment-bg-img-2.jpg",
  "/Images/chosejorny1.jpg",
  "/Images/chosejorny2.jpg",
  "/Images/contactpage.jpg",
  "/Images/hero-bg.jpg",
  "/Images/leading.jpg",
  "/Images/chosejorny3.jpg",
  "/Images/cargo-shipment-bg-img-2.jpg",
  "/Images/chosejorny3.jpg",
];

const Skiper30 = () => {
  const galleryRef = useRef(null);
  const rafRef = useRef(null);
  const lenisRef = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  // transform ranges (same idea as your original)
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    // set initial size
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    // cleanup
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current && typeof lenisRef.current.destroy === "function") {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <main className="skiper-root">
      <section className="skiper-message top">
        <div className="skiper-message-inner">
          <span className="skiper-hint">scroll down to see</span>
        </div>
      </section>

      <section
        ref={galleryRef}
        className="skiper-gallery"
        aria-label="parallax gallery"
      >
        <Column images={[images[0], images[1], images[2]]} styleY={y} />
        <Column images={[images[3], images[4], images[5]]} styleY={y2} />
        <Column images={[images[6], images[7], images[8]]} styleY={y3} />
        <Column images={[images[9], images[10], images[11]]} styleY={y4} />
      </section>

      <section className="skiper-message bottom">
        <div className="skiper-message-inner">
          <span className="skiper-hint">scroll up to see</span>
        </div>
      </section>
    </main>
  );
};

const Column = ({ images = [], styleY }) => {
  // we render each image inside a box; images will fill the box with object-cover
  return (
    <motion.div className="skiper-column" style={{ y: styleY }}>
      {images.map((src, idx) => (
        <div key={idx} className="skiper-card">
          <img src={src} alt={`gallery-${idx}`} className="skiper-img" />
        </div>
      ))}
    </motion.div>
  );
};

export default Skiper30;
