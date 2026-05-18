"use client";
import React, { useState , useEffect  } from "react";
import "./HomePage.css";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FaAnchor, FaArrowRight, FaBolt, FaCertificate, FaCircleCheck, FaClock, FaFileInvoice, FaGlobe, FaHandshake, FaHeadset, FaLocationDot, FaLock, FaNetworkWired, FaPhone, FaRoute, FaShip, FaUserTie } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAngleDoubleDown, FaBoxes, FaGlobeAmericas, FaPhoneAlt, FaPlayCircle, FaShieldAlt, FaTools } from "react-icons/fa";


function HomePage() {

const [buttonText, setButtonText] = useState("Send Inquiry");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setButtonText("Inquiry Sent!");
    setIsSubmitted(true);

    setTimeout(() => {
      setButtonText("Send Inquiry");
      setIsSubmitted(false);
    }, 3000);
  };


  // Count Up Animation
useEffect(() => {

  const animateCount = (el, target, suffix) => {

    const duration = 1800;

    const step = (timestamp) => {

      if (!el.dataset.start) {
        el.dataset.start = timestamp;
      }

      const progress = Math.min(
        (timestamp - parseFloat(el.dataset.start)) / duration,
        1
      );

      const value = Math.floor(progress * target);

      // 1000+ format
      if (target >= 1000) {
        el.innerHTML = `${(value / 1000).toFixed(value >= 1000 ? 0 : 1)}K${suffix}`;
      } else {
        el.innerHTML = `${value}${suffix}`;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {

        if (target >= 1000) {
          el.innerHTML = `2K${suffix}`;
        } else {
          el.innerHTML = `${target}${suffix}`;
        }

      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting && !entry.target.dataset.counted) {

          entry.target.dataset.counted = "true";

          const el = entry.target;

          const text = el.textContent;

          let number = parseInt(text.replace(/[^0-9]/g, ""));
          let suffix = text.replace(/[0-9,]/g, "");

          // Convert 2K => 2000
          if (text.includes("K")) {
            number = parseInt(text) * 1000;
          }

          animateCount(el, number, suffix);

        }

      });

    },
    { threshold: 0.5 }
  );

  // BOTH selectors
  const numbers = document.querySelectorAll(
    ".hero-stat-item .number, .stat-card .num"
  );

  numbers.forEach((el) => observer.observe(el));

  return () => {
    numbers.forEach((el) => observer.unobserve(el));
  };

}, []);


  return (
    <>

      <section id="hero">
        <div className="hero-bg"></div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaAnchor />
                <span>Est. 2024 &nbsp;|&nbsp; Canada & International Waters</span>
              </div>
              <h1 className="hero-title">
                Global Marine
                <span className="accent">Logistics &</span>
                <span className="gold-word">Shipping Solutions</span>
              </h1>
              <p className="hero-sub">Reliable marine transportation, freight management, and logistics services across Canada and international waters. Built for businesses that demand excellence.</p>
              <div className="hero-btns">
                <Link href="#contact" className="btn btn-primary"><FaFileInvoice /> Get a Quote</Link>
                <Link href="#about" className="btn btn-outline"><FaPlayCircle /> Learn More</Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat-item">
                  <div className="number">15<span>+</span></div>
                  <div className="label">Years Experience</div>
                </div>
                <div className="hero-stat-item">
                  <div className="number">40<span>+</span></div>
                  <div className="label">Countries Served</div>
                </div>
                <div className="hero-stat-item">
                  <div className="number">2K<span>+</span></div>
                  <div className="label">Cargo Delivered</div>
                </div>
                <div className="hero-stat-item">
                  <div className="number">98<span>%</span></div>
                  <div className="label">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scroll">
            <span>Scroll</span>
            <FaAngleDoubleDown />
          </div>
      </section>

      <div className="trust-bar">
        <Container>
          <div className="trust-bar-inner">
            <div className="trust-item"><FaCertificate /> ISO Certified Operations</div>
            <div className="trust-item"><FaShieldAlt /> Fully Insured Cargo</div>
            <div className="trust-item"><FaClock /> 24/7 Real-Time Tracking</div>
            <div className="trust-item"><FaGlobeAmericas /> International Coverage</div>
            <div className="trust-item"><FaHandshake /> 200+ Industry Partners</div>
          </div>
        </Container>
      </div>

    <section id="about">
      <div className="container">

        <div className="about-grid">

          {/* Left Side */}
          <div className="about-visual reveal">
            <Image
              className="about-img-main"
              src="/Images/cargo-shipment-bg-img-1.jpg"
              alt="Dilorra Marine shipping operations"
              width={800}
              height={800}
            />
            <div className="about-img-badge">
              <div className="big">98%</div>
              <div className="small">
                On-Time <br />
                Delivery Rate
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="about-content">

            <div className="section-tag reveal">
              About Dilorra Marine
            </div>
            <h2 className="section-title reveal reveal-delay-1">
              Canada's Premier <span>Marine Logistics</span> Partner
            </h2>
            <p className="about-text reveal reveal-delay-2">
              Dilorra Marine is a leading marine logistics and shipping company
              headquartered in Halifax, Nova Scotia, with operations spanning
              across Canada and international waters. Founded in 2024, we
              combine cutting-edge technology with deep marine expertise to
              deliver seamless shipping and freight solutions for businesses of
              every scale.
            </p>
            <p className="about-text reveal reveal-delay-2">
              Our team of seasoned marine professionals brings decades of
              collective experience in ocean freight, cargo management, port
              operations, and vessel support — ensuring your cargo reaches its
              destination safely, efficiently, and on time.
            </p>
            <div className="about-features reveal reveal-delay-3">
              <div className="about-feat"><FaCircleCheck /> Marine Industry Experts</div>
              <div className="about-feat"><FaCircleCheck /> Real-Time Cargo Tracking</div>
              <div className="about-feat"><FaCircleCheck /> Global Port Network</div>
              <div className="about-feat"><FaCircleCheck /> 24/7 Operations Center</div>
              <div className="about-feat"><FaCircleCheck /> Fully Insured Shipments</div>
              <div className="about-feat"><FaCircleCheck /> Customs & Compliance</div>
            </div>

            <div className="abtbtn reveal reveal-delay-4">
              <Link href="#contact" className="btn btn-teal">
                <FaPhone /> Speak to an Expert
              </Link>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="stats-row reveal reveal-delay-1">

          <div className="stat-card">
            <div className="num">15+</div>
            <div className="lbl">Years of Excellence</div>
          </div>

          <div className="stat-card">
            <div className="num">40+</div>
            <div className="lbl">Countries Served</div>
          </div>

          <div className="stat-card">
            <div className="num">2,000+</div>
            <div className="lbl">Cargo Shipments</div>
          </div>

          <div className="stat-card">
            <div className="num">98%</div>
            <div className="lbl">Client Satisfaction</div>
          </div>

        </div>
      </div>
    </section>

    <section id="services">
      <div className="container">
        <div className="services-header">
          <div className="section-tag reveal">Our Services</div>
          <h2 className="section-title reveal reveal-delay-1">Comprehensive <span>Marine Solutions</span></h2>
          <p className="section-sub reveal reveal-delay-2" >End-to-end shipping and logistics services designed for the demands of modern global trade.</p>
        </div>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-icon"><FaShip /></div>
            <h3>Ocean Freight</h3>
            <p>Full container load (FCL) and less-than-container load (LCL) ocean freight services across major global trade routes with competitive transit times.</p>
            <Link href="#contact" className="learn-more">Learn More <FaArrowRight /></Link>
          </div>
          <div className="service-card reveal reveal-delay-1">
            <div className="service-icon"><FaBoxes /></div>
            <h3>Cargo Management</h3>
            <p>Professional cargo handling, warehousing, and inventory management solutions ensuring safe, organized, and efficient freight processing at every stage.</p>
            <Link href="#contact" className="learn-more">Learn More <FaArrowRight /></Link>
          </div>
          <div className="service-card reveal reveal-delay-2">
            <div className="service-icon"><FaRoute /></div>
            <h3>Marine Logistics</h3>
            <p>End-to-end supply chain solutions including multimodal transport, customs clearance, documentation, and last-mile delivery coordination.</p>
            <Link href="#contact" className="learn-more">Learn More <FaArrowRight /></Link>
          </div>
          <div className="service-card reveal reveal-delay-1">
            <div className="service-icon"><FaAnchor /></div>
            <h3>Port Operations</h3>
            <p>Expert port management services including stevedoring, terminal operations, berth scheduling, and cargo inspection to streamline your port activities.</p>
            <Link href="#contact" className="learn-more">Learn More <FaArrowRight /></Link>
          </div>
          <div className="service-card reveal reveal-delay-2">
            <div className="service-icon"><FaTools /></div>
            <h3>Vessel Support</h3>
            <p>Comprehensive vessel support services including provisioning, crew management, bunkering, and technical assistance for commercial fleets worldwide.</p>
            <Link href="#contact" className="learn-more">Learn More <FaArrowRight /></Link>
          </div>
          <div className="service-card reveal reveal-delay-3">
            <div className="service-icon"><FaGlobe /></div>
            <h3>International Shipping</h3>
            <p>Seamless cross-border shipping solutions with expert customs brokerage, trade compliance, and global carrier network spanning 40+ countries.</p>
            <Link href="#contact" className="learn-more">Learn More <FaArrowRight /></Link>
          </div>
        </div>
      </div>
    </section>

    <section id="why">
      <div className="why-inner">
        <div className="container">
          <div className="why-header">
            <div className="section-tag" >Why Choose Us</div>
            <h2 className="section-title" >The <span>Dilorra</span> Difference</h2>
            <p className="section-sub" >We go beyond shipping — we deliver confidence. Here's what sets us apart from the competition.</p>
          </div>
          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-num">01</div>
              <div className="why-icon"><FaHandshake /></div>
              <h3>Trusted Shipping Partner</h3>
              <p>With a proven track record and a growing portfolio of satisfied clients, Dilorra Marine is the name businesses trust for critical cargo movements.</p>
            </div>
            <div className="why-card reveal reveal-delay-1">
              <div className="why-num">02</div>
              <div className="why-icon"><FaBolt /></div>
              <h3>Fast Delivery</h3>
              <p>Optimized routing, priority scheduling, and carrier partnerships enable us to consistently deliver ahead of industry-standard transit times.</p>
            </div>
            <div className="why-card reveal reveal-delay-2">
              <div className="why-num">03</div>
              <div className="why-icon"><FaNetworkWired /></div>
              <h3>Global Network</h3>
              <p>An extensive network of agents, terminals, and carrier partners across 40+ countries ensures seamless handling at every point of your supply chain.</p>
            </div>
            <div className="why-card reveal reveal-delay-1">
              <div className="why-num">04</div>
              <div className="why-icon"><FaHeadset /></div>
              <h3>24/7 Expert Support</h3>
              <p>Our dedicated operations center runs around the clock. Real people, real answers — whenever you need them, wherever your cargo is.</p>
            </div>
            <div className="why-card reveal reveal-delay-2">
              <div className="why-num">05</div>
              <div className="why-icon"><FaLock /></div>
              <h3>Secure Cargo Handling</h3>
              <p>Advanced cargo monitoring, GPS tracking, and fully insured shipments give you complete peace of mind from origin to final destination.</p>
            </div>
            <div className="why-card reveal reveal-delay-3">
              <div className="why-num">06</div>
              <div className="why-icon"><FaUserTie /></div>
              <h3>Experienced Marine Team</h3>
              <p>Our team of certified marine professionals and logistics experts brings unmatched industry depth to every shipment and client relationship.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="offices">
      <div className="container">
        <div className="offices-header">
          <div className="section-tag reveal">Our Offices</div>
          <h2 className="section-title reveal reveal-delay-1">Strategically <span>Located</span> Across Canada</h2>
          <p className="section-sub reveal reveal-delay-2" >Two offices positioned at key maritime hubs to serve you better — from the Atlantic coast to central Ontario.</p>
        </div>
        <div className="offices-grid">
          <div className="office-card reveal">
            
            <div className="office-map"> 
              <div className="office-map-overlay"></div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.352763813764!2d-63.5698403234287!3d44.63070658866281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a2244601fbc85%3A0xfda0671d0eeaf09d!2s577%20Marginal%20Rd%2C%20Halifax%2C%20NS%20B3H%204P6%2C%20Canada!5e0!3m2!1sen!2sin!4v1779109862905!5m2!1sen!2sin" width="100%" height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className="office-badge">Head Office</div>
            </div>
            <div className="office-info">
              <h3>Halifax, Nova Scotia</h3>
              <div className="office-subtitle">Atlantic Canada HQ</div>
              <div className="office-detail">
                <FaLocationDot />
                <span>577 Marginal Rd, Halifax, NS B3H 4P6</span>
              </div>
              <div className="office-detail">
                <MdEmail />
                <span>info@dilorramarine.com</span>
              </div>
              <div className="office-detail">
                <FaAnchor />
                <span>Port of Halifax — Canada's premier deep-water east coast port</span>
              </div>
            </div>
          </div>
          <div className="office-card reveal reveal-delay-1">
            <div className="office-map">
              <div className="office-map-overlay"></div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.371716482976!2d-76.51517562344499!3d44.240592114241984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2ab9c030625c7%3A0x43c588ab57d697e2!2sParking%20lot%2C%2016%20Bath%20Rd%2C%20Kingston%2C%20ON%20K7L%201C4%2C%20Canada!5e0!3m2!1sen!2sin!4v1779110284890!5m2!1sen!2sin" width="100%" height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              
              <div className="office-badge" >Regional Office</div>
            </div>
            <div className="office-info">
              <h3>Kingston, Ontario</h3>
              <div className="office-subtitle">Ontario Regional Hub</div>
              <div className="office-detail">
                <FaLocationDot />
                <span>16 Bath Rd, Kingston, ON K7L 1H4</span>
              </div>
              <div className="office-detail">
                <MdEmail />
                <span>info@dilorramarine.com</span>
              </div>
              <div className="office-detail">
                <FaPhoneAlt />
                <span>+1 (613) 484-8105</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-tag reveal">Client Testimonials</div>
          <h2 className="section-title reveal reveal-delay-1">Trusted by <span>Industry Leaders</span></h2>
          <p className="section-sub reveal reveal-delay-2" >What our clients say about working with Dilorra Marine.</p>
        </div>
        <div className="testimonials-grid">
          <div className="testi-card reveal">
            <div className="testi-quote">"</div>
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">Dilorra Marine transformed our international shipping operations. Their team handled all the complexities of ocean freight and customs, letting us focus on growing our business. Exceptional service from start to finish.</p>
            <div className="testi-author">
              <div className="testi-avatar">JM</div>
              <div>
                <div className="testi-name">James Morrison</div>
                <div className="testi-role">VP Logistics, Arctic Resources Corp.</div>
              </div>
            </div>
          </div>
          <div className="testi-card reveal reveal-delay-1">
            <div className="testi-quote">"</div>
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">We've worked with many freight companies over the years, but none match the professionalism and reliability of Dilorra Marine. Their 24/7 support and real-time tracking give us complete confidence in every shipment.</p>
            <div className="testi-author">
              <div className="testi-avatar">SK</div>
              <div>
                <div className="testi-name">Sarah Kim</div>
                <div className="testi-role">Director of Supply Chain, Pacific Trade Ltd.</div>
              </div>
            </div>
          </div>
          <div className="testi-card reveal reveal-delay-2">
            <div className="testi-quote">"</div>
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">From Halifax to Rotterdam, Dilorra handled our entire cargo operation flawlessly. On-time, within budget, and with zero surprises. Their marine expertise is genuinely world-class. A partner you can count on.</p>
            <div className="testi-author">
              <div className="testi-avatar">RB</div>
              <div>
                <div className="testi-name">Robert Beaumont</div>
                <div className="testi-role">CEO, Harbour Industrial Group</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-info">
            <div className="section-tag reveal">Get In Touch</div>

              <h2 className="section-title reveal reveal-delay-1">
                Let's Move Your <span>Cargo Forward</span>
              </h2>

              <p className="section-sub reveal reveal-delay-2">
                Whether you need a freight quote, logistics consultation, or want
                to explore a long-term shipping partnership — our team is ready.
              </p>

            <div className="contact-details reveal reveal-delay-2">
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <FaLocationDot />
                </div>

                <div className="contact-detail-text">
                  <div className="label">Head Office</div>
                  <div className="value">
                    577 Marginal Rd, Halifax, NS B3H 4P6
                  </div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <FaLocationDot />
                </div>

                <div className="contact-detail-text">
                  <div className="label">Regional Office</div>
                  <div className="value">
                    16 Bath Rd, Kingston, ON K7L 1H4
                  </div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <MdEmail />
                </div>

                <div className="contact-detail-text">
                  <div className="label">Email</div>
                  <div className="value">info@dilorramarine.com</div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>

                <div className="contact-detail-text">
                  <div className="label">Phone (Kingston)</div>
                  <div className="value">+1 (613) 484-8105</div>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <FaClock />
                </div>

                <div className="contact-detail-text">
                  <div className="label">Operations</div>
                  <div className="value">
                    24 / 7 — We never sleep so your cargo doesn't have to
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap reveal reveal-delay-2">
            <div className="form-title">Request a Quote</div>

            <div className="form-sub">
              Fill in the form and our team will respond within 2 business
              hours.
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Smith" />
                </div>
              </div>

              <div className="form-group">
                <label>Company</label>
                <input type="text" placeholder="Your Company Name" />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@company.com" />
              </div>

              <div className="form-group">
                <label>Service Required</label>

                <select>
                  <option value="">Select a Service</option>
                  <option>Ocean Freight</option>
                  <option>Cargo Management</option>
                  <option>Marine Logistics</option>
                  <option>Port Operations</option>
                  <option>Vessel Support</option>
                  <option>International Shipping</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea placeholder="Tell us about your shipping needs, cargo type, origin, destination..."></textarea>
              </div>

              <button
                type="submit"
                className="form-submit"
                style={{
                  background: isSubmitted
                    ? "linear-gradient(90deg,#2a9d5c,#37c26b)"
                    : "",
                }}
              >
                <i
                  className={`fas ${
                    isSubmitted ? "fa-check" : "fa-paper-plane"
                  }`}
                  style={{ marginRight: "8px" }}
                ></i>

                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>



    </>
  );
}

export default HomePage;
