import React from 'react'
import './Sitemap.css'

function Sitemap() {
  return (
    <>
    <div id="Main">
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Navigation</div>
          <h1>Sitemap</h1>
          <p>A complete overview of all pages and sections across the Dilorra Marine website — for visitors and search engines alike.</p>
        </div>
        <div className="divider-line"></div>
      </section>

      <main className="content-wrap">

        <div className="full xml-note">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9973a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '1px' }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <div>
            <strong>For Search Engines:</strong> An XML sitemap is also available at <code>https://dilorramarine.com/sitemap.xml</code> and submitted to Google Search Console and Bing Webmaster Tools for optimal indexing.
          </div>
        </div>


        <div className="sm-card full">
          <div className="sm-card-header">
            <div className="sm-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div>
              <h3>Main Pages</h3>
              <p>Primary pages of the Dilorra Marine website</p>
            </div>
          </div>
          <ul className="sm-links">
            <li>
              <a href="https://dilorramarine.com/">
                <span className="link-dot"></span> Homepage — dilorramarine.com
                <span className="link-arrow">→</span>
              </a>
            </li>
            <li className="sub">
              <a href="https://dilorramarine.com/#about">
                <span className="link-dot"></span> About Dilorra Marine
                <span className="link-arrow">→</span>
              </a>
            </li>
            <li className="sub">
              <a href="https://dilorramarine.com/#services">
                <span className="link-dot"></span> Our Services
                <span className="link-arrow">→</span>
              </a>
            </li>
            <li className="sub">
              <a href="https://dilorramarine.com/#why">
                <span className="link-dot"></span> Why Choose Us
                <span className="link-arrow">→</span>
              </a>
            </li>
            <li className="sub">
              <a href="https://dilorramarine.com/#offices">
                <span className="link-dot"></span> Our Locations
                <span className="link-arrow">→</span>
              </a>
            </li>
            <li className="sub">
              <a href="https://dilorramarine.com/#testimonials">
                <span className="link-dot"></span> Client Testimonials
                <span className="link-arrow">→</span>
              </a>
            </li>
            <li className="sub">
              <a href="https://dilorramarine.com/#contact">
                <span className="link-dot"></span> Contact &amp; Get a Quote
                <span className="link-arrow">→</span>
              </a>
            </li>
          </ul>
        </div>


        <div className="sm-card">
          <div className="sm-card-header">
            <div className="sm-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            <div>
              <h3>Our Services</h3>
              <p>Marine &amp; logistics solutions</p>
            </div>
          </div>
          <ul className="sm-links">
            <li><a href="https://dilorramarine.com/#services"><span className="link-dot"></span> Ocean Freight (FCL &amp; LCL)<span className="link-arrow">→</span></a></li>
            <li><a href="https://dilorramarine.com/#services"><span className="link-dot"></span> Cargo Management<span className="link-arrow">→</span></a></li>
            <li><a href="https://dilorramarine.com/#services"><span className="link-dot"></span> Marine Logistics<span className="link-arrow">→</span></a></li>
            <li><a href="https://dilorramarine.com/#services"><span className="link-dot"></span> Port Operations<span className="link-arrow">→</span></a></li>
            <li><a href="https://dilorramarine.com/#services"><span className="link-dot"></span> Vessel Support<span className="link-arrow">→</span></a></li>
            <li><a href="https://dilorramarine.com/#services"><span className="link-dot"></span> International Shipping<span className="link-arrow">→</span></a></li>
          </ul>
        </div>


        <div className="sm-card">
          <div className="sm-card-header">
            <div className="sm-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <h3>Our Offices</h3>
              <p>Canadian maritime hubs</p>
            </div>
          </div>
          <ul className="sm-links">
            <li><a href="https://dilorramarine.com/#offices"><span className="link-dot"></span> Halifax, Nova Scotia (Head Office)<span className="link-arrow">→</span></a></li>
            <li><a href="https://dilorramarine.com/#offices"><span className="link-dot"></span> Kingston, Ontario (Regional Office)<span className="link-arrow">→</span></a></li>
          </ul>
        </div>

      
        <div className="sm-card">
          <div className="sm-card-header">
            <div className="sm-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div>
              <h3>Legal</h3>
              <p>Policies &amp; compliance documents</p>
            </div>
          </div>
          <ul className="sm-links">
            <li><a href="https://dilorramarine.com/terms-and-conditions.html"><span className="link-dot"></span> Terms &amp; Conditions<span className="link-arrow">→</span></a></li>
            <li><a href="https://dilorramarine.com/privacy-policy.html"><span className="link-dot"></span> Privacy Policy<span className="link-arrow">→</span></a></li>
            <li><a href="https://dilorramarine.com/sitemap.html"><span className="link-dot"></span> Sitemap (this page)<span className="link-arrow">→</span></a></li>
            <li><a href="https://dilorramarine.com/sitemap.xml"><span className="link-dot"></span> XML Sitemap<span className="link-arrow">→</span></a></li>
          </ul>
        </div>


        <div className="sm-card">
          <div className="sm-card-header">
            <div className="sm-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <h3>Contact</h3>
              <p>Get in touch with our team</p>
            </div>
          </div>
          <ul className="sm-links">
            <li><a href="https://dilorramarine.com/#contact"><span className="link-dot"></span> Request a Quote<span className="link-arrow">→</span></a></li>
            <li><a href="mailto:info@dilorramarine.com"><span className="link-dot"></span> info@dilorramarine.com<span className="link-arrow">→</span></a></li>
            <li><a href="tel:+16134848105"><span className="link-dot"></span> +1 (613) 484-8105<span className="link-arrow">→</span></a></li>
          </ul>
        </div>

      </main>

    </div>
      
    </>
  )
}

export default Sitemap
