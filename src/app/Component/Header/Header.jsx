"use client";
import React, { useState } from "react";
import "./Header.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { Button, Container, FormControl, Offcanvas } from "react-bootstrap";

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuToggle = (e) => {
    e.preventDefault();
    const subMenu = e.currentTarget.nextElementSibling;
    if (subMenu && subMenu.classList.contains("sub_menu")) {
      if (subMenu.classList.contains("show")) {
        subMenu.classList.remove("show");
        setOpenSubMenu(null);
      } else {
        // Close other submenus
        document.querySelectorAll(".sub_menu.show").forEach((menu) => {
          menu.classList.remove("show");
        });
        subMenu.classList.add("show");
        setOpenSubMenu(subMenu);
      }
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSubMenuHover = (e) => {
    const subMenu = e.currentTarget.nextElementSibling || e.currentTarget;
    if (subMenu && subMenu.classList.contains("sub_menu")) {
      subMenu.classList.add("show");
    }
  };

  const handleSubMenuLeave = (e) => {
    const subMenu = e.currentTarget.nextElementSibling || e.currentTarget;
    if (subMenu && subMenu.classList.contains("sub_menu")) {
      subMenu.classList.remove("show");
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className="Headers">
        <Container fluid className="container-xl">
          <div className="headerTopBar">
            <div className="Logo">
              <Link href="/">
                <Image src="/Images/Logo.png" alt="" width={115} height={50} />
              </Link>
            </div>
            <div className="HeaderTopRight">
              <div className="Topcontct">
                <div className="contact_links">
                  <Link href="mailto:info@dilorramarine.com">
                    <Icon icon="material-symbols:mail" width="24" height="24" />{" "}
                    info@dilorramarine.com
                  </Link>
                  <Link href="tel:+16134836285">
                    <Icon icon="ic:baseline-phone" width="24" height="24" />
                    +1 (613) 483-6285
                  </Link>
                </div>
                <div className="social_links">
                  <Link href="">
                    <Icon icon="skill-icons:instagram" width="20" height="20" />
                  </Link>
                  <Link href="">
                    <Icon icon="logos:facebook" width="20" height="20" />
                  </Link>
                  <Link href="">
                    <Icon icon="devicon:linkedin" width="20" height="20" />
                  </Link>
                </div>
              </div>

              <div className="header_cta">
                <Link className="btn_one" href="tel:+915541444">
                  <Icon icon="basil:phone-in-solid" width="20" height="20" />{" "}
                  Book a call
                </Link>
              </div>

              <div className="header_cta">
                <Button onClick={handleShow}>
                  {" "}
                  <Icon
                    icon="fontisto:nav-icon-a"
                    width="22"
                    height="22"
                  />{" "}
                </Button>
              </div>

              <Offcanvas
                className="HeaderOffcanvsDiv"
                show={show}
                onHide={handleClose}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="OffCanvasInner">
                    <div className="OffCanvsTop">
                      <h6>
                        <Icon
                          icon="ix:send-right-filled"
                          width="24"
                          height="24"
                          color="#ec264f"
                        />{" "}
                        GET OUR SUPPORT
                      </h6>
                      <h2>Most Trusted Shipping & Logistics.</h2>
                      <p>
                        Where global shipping and freight forwarding services come in to provide reliable delivery, support, and supply chain expertise every step of the way.
                      </p>
                    </div>
                    <div className="offMidCont">
                      <h3>
                        <Icon
                          icon="ix:send-right-filled"
                          width="18"
                          height="18"
                          color="#ec264f"
                        />{" "}
                        Contact Info
                      </h3>
                      <div className="socllink">
                        <Link href="">
                          <Icon icon="mdi:location" width="24" height="24" />{" "}
                          Marginal Rd, Halifax, NS B3H 4P6
                        </Link>
                        <Link href="">
                          <Icon icon="mdi:location" width="24" height="24" />{" "}
                          Bath Rd, Kingston, ON K7L 1H4
                        </Link>
                        <Link href="tel:+16134836285">
                          <Icon
                            icon="charm:phone-incoming"
                            width="24"
                            height="24"
                          />{" "}
                          +1 (613) 483-6285
                        </Link>
                        <Link href="mailto:info@dilorramarine.com">
                          <Icon
                            icon="material-symbols:mail"
                            width="24"
                            height="24"
                          />{" "}
                          info@dilorramarine.com
                        </Link>
                      </div>
                    </div>
                    <div className="offMidCont">
                      <h3>
                        <Icon
                          icon="ix:send-right-filled"
                          width="24"
                          height="24"
                          color="#ec264f"
                        />{" "}
                        Get Updates
                      </h3>
                      <p>
                        Where modern logistics and tracking services come in to provide real-time updates on your cargo.
                      </p>
                      <div className="Contmail">
                        <FormControl
                          type="email"
                          placeholder="name@example.com"
                        />
                        <Button>
                          <Icon
                            icon="basil:telegram-outline"
                            width="24"
                            height="24"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>

              <Button
                type="button"
                className={`burger ${isMenuOpen ? "active" : ""}`}
                id="burger"
                onClick={toggleMenu}
              >
                <span className="burger_line"></span>
                <span className="burger_line"></span>
                <span className="burger_line"></span>
              </Button>
            </div>
          </div>
        </Container>
        <div
          className={`overlay ${isMenuOpen ? "active" : ""}`}
          onClick={closeMenu}
        >
          dfsdsde
        </div>
        <nav className={`${isMenuOpen ? "active dark_bg" : ""}`} id="menu">
          <Container fluid className="container-xl">
            <ul>
              <li>
                <Link href="/" className={pathname === "/" ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={pathname === "/about-us" ? "active" : ""}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={pathname === "/services" ? "active" : ""}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={pathname === "/contact-us" ? "active" : ""}
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
              <Link
                className="has_sub_menu"
                href="javascript:void(0)"
                onMouseOver={handleSubMenuHover}
                onClick={handleSubMenuToggle}
              >
                Calculators
              </Link>
              <ul className="sub_menu" onMouseOver={handleSubMenuHover} onMouseLeave={handleSubMenuLeave}>
                <li>
                  <Link className="menu-link" href="javascript:void(0)">
                    Tax calculator
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" href="javascript:void(0)">
                    TDS calculator
                  </Link>
                </li>
              </ul>
            </li> */}
            </ul>
          </Container>
        </nav>
      </header>
    </>
  );
}

export default Header;
