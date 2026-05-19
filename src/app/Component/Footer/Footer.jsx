import React from "react";
import "./Footer.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronRight, FaClock, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";




function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Link className="footer-logo" href="/">
                <Image src="/Images/Logo.png" alt="Logo"  width={100} height={100}/>
                <div className="footer-logo-text">
                  <span className="brand">DILORRA MARINE</span>
                  <span className="tagline">Global Marine Logistics</span>
                </div>
              </Link>
              <p className="footer-desc">Delivering reliable marine logistics and shipping solutions across Canada and international waters. Built on expertise, trust, and a relentless commitment to excellence.</p>
              <div className="footer-social">
                <Link target="_blank" href="#" className="social-link"><FaLinkedinIn /></Link>
                <Link target="_blank" href="https://www.facebook.com/dilorra.marine/" className="social-link"><FaFacebookF /></Link>
                <Link target="_blank" href="#" className="social-link"><FaTwitter /></Link>
                <Link target="_blank" href="#" className="social-link"><FaInstagram /></Link>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="#about"> <FaChevronRight /> About Us</Link></li>
                <li><Link href="#services"> <FaChevronRight /> Services</Link></li>
                <li><Link href="#why"> <FaChevronRight /> Why Choose Us</Link></li>
                <li><Link href="#offices"> <FaChevronRight /> Our Offices</Link></li>
                <li><Link href="#testimonials"> <FaChevronRight /> Testimonials</Link></li>
                <li><Link href="#contact"> <FaChevronRight /> Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><Link href="#services"> <FaChevronRight /> Ocean Freight</Link></li>
                <li><Link href="#services"> <FaChevronRight /> Cargo Management</Link></li>
                <li><Link href="#services"> <FaChevronRight /> Marine Logistics</Link></li>
                <li><Link href="#services"> <FaChevronRight /> Port Operations</Link></li>
                <li><Link href="#services"> <FaChevronRight /> Vessel Support</Link></li>
                <li><Link href="#services"> <FaChevronRight /> International Shipping</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><Link href="#"> <FaLocationDot /> Halifax, NS B3H 4P6</Link></li>
                <li><Link href="#"> <FaLocationDot /> Kingston, ON K7L 1H4</Link></li>
                <li><Link href="mailto:info@dilorramarine.com"> <MdEmail /> info@dilorramarine.com</Link></li>
                <li><Link href="tel:+16134848105"> <FaPhoneAlt /> +1 (613) 484-8105</Link></li>
                <li><Link href="#"> <FaClock /> 24/7 Operations</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">&copy; 2024 <span>Dilorra Marine</span>. All rights reserved. Built with excellence for global trade.</div>
            <div className="footer-legal">
              <Link target="_blank" href="/privacypolicy">Privacy Policy</Link>
              <Link target="_blank" href="/terms&services">Terms of Service</Link>
              <Link target="_blank" href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
