"use client";
import React, { useEffect, useState } from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="nav-inner">
            <Link className="nav-logo" href="/">
              <Image src="/Images/Logo.png" alt="Logo"  width={100} height={100}/>
              <div className="nav-logo-text">
                <span className="brand">DILORRA MARINE</span>
                <span className="tagline">Global Marine Logistics</span>
              </div>
            </Link>

            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#why">Why Us</a>
              </li>
              <li>
                <a href="#offices">Locations</a>
              </li>
              <li>
                <a href="#testimonials">Clients</a>
              </li>
              <li>
                <a href="#contact" className="nav-cta">
                  Get Quote
                </a>
              </li>
            </ul>

            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <span className="mobile-close" onClick={toggleMenu}>
          &times;
        </span>

        <a href="#about" onClick={toggleMenu}>
          About
        </a>

        <a href="#services" onClick={toggleMenu}>
          Services
        </a>

        <a href="#why" onClick={toggleMenu}>
          Why Us
        </a>

        <a href="#offices" onClick={toggleMenu}>
          Locations
        </a>

        <a href="#testimonials" onClick={toggleMenu}>
          Clients
        </a>

        <a href="#contact" onClick={toggleMenu}>
          Get Quote
        </a>
      </div>
    </>
  );
}

export default Header;