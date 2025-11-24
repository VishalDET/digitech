import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Play audio if it exists
    const audio = document.getElementById("hamburger-hover");
    if (audio) {
      audio.play().catch(e => console.log("Audio play failed", e));
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow');
    } else {
      document.body.classList.remove('overflow');
    }
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="inner">
          <figure className="logo"><img src="/assets/images/logo-light.png" alt="light logo" /></figure>
          <span className="percentage"></span>
        </div>
      </div>
      <div className={`transition-overlay ${isMenuOpen ? 'active' : ''}`}></div>

      {/* Navigation Menu */}
      <div className={`navigation-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="inner">
          <div className="side-menu">
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li><Link to="/service" onClick={closeMenu}>Digital Solutions</Link></li>
              <li><Link to="/hardware" onClick={closeMenu}>Hardware Solutions</Link></li>
              <li><Link to="/clientele" onClick={closeMenu}>Clientele</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
          </div>
          <div className="sides">
            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1405722403424!2d72.85179231538483!3d19.145323054763807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7cc8f7c53e3%3A0x62f2e318022df3f2!2sMangal%20Credit%20and%20Fincorp%20Limited!5e0!3m2!1sen!2sin!4v1619074320750!5m2!1sen!2sin"
                width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <figure>
              <img src="/assets/images/company.jpg" alt="company" />
              <a href="#map" data-fancybox><img src="/assets/images/icon-map-marker.svg" alt="map icon" /></a>
            </figure>
          </div>
          <div className="sides">
            <div className="row">
              <div className="row">
                <div className="row align-content-center address-main">
                  <span className="iconify mr-3" data-icon="akar-icons:location"></span>
                  <h6>Head Office</h6>
                </div>
                <div className="col-11 address-main">
                  <p>
                    A-1701/1702, Lotus Corporate Park, Ram Mandir Rd, W.E.Highway,
                    Jay Coach, Goregaon East, Mumbai 400063, India -
                    <a className="text-yellow" target="_blank" href="https://www.google.com/maps/place/Digital+Edge+Technologies/@19.1452137,72.8510338,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7cc906768df:0x7a32d00d26c64a10!8m2!3d19.1452087!4d72.8536087!16s%2Fg%2F11bwy_2vkt?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D">Get Direction <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-1 address-main">
                  <span className="iconify" data-icon="clarity:email-line"></span>
                </div>
                <div className="col-10 address-main">
                  <a href="mailto:info@digitaledgetech.in"> info@digitaledgetech.in</a>
                </div>
              </div>
              <div className="row">
                <div className="col-1 address-main">
                  <span className="iconify" data-icon="eva:phone-call-outline"></span>
                </div>
                <div className="col-10 address-main">
                  <a href="tel:+91 9152889989">+91 9152889989</a>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="row align-items-center">
                <div className="row align-content-center address-main">
                  <span className="iconify mr-3" data-icon="akar-icons:location"></span>
                  <h6>Branch Office</h6>
                </div>
                <div className="col-11 address-main">
                  <p>
                    24, Jai Hind Cottage, oppo. Alpha College, Shahaji Raje Road, Vile Parle East, Mumbai 400057 -
                    <a className="text-yellow" target="_blank" href="https://www.google.com/maps/place/Digital+Edge+Technologies+-+Vile+Parle/@19.106578,72.8450912,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9fdb4a69a41:0x9296a2ff2abbe21!8m2!3d19.1065729!4d72.8476661!16s%2Fg%2F11v0vm45f2?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D">Get Direction <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-1 address-main">
                  <span className="iconify" data-icon="clarity:email-line"></span>
                </div>
                <div className="col-10 address-main">
                  <a href="mailto:info@digitaledgetech.in"> info@digitaledgetech.in</a>
                </div>
              </div>
              <div className="row">
                <div className="col-1 address-main">
                  <span className="iconify" data-icon="eva:phone-call-outline"></span>
                </div>
                <div className="col-10 address-main">
                  <a href="tel:+91 9152889989">+91 9152889989</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Side */}
      <aside className="left-side">
        <div className="logo">
          <img src="/assets/images/icon.png" alt="left side icon" />
        </div>
        <ul>
          <li>
            <a href="https://www.facebook.com/digitaledgetech" target="_blank" rel="noreferrer">FACEBOOK</a><span className="iconify" data-icon="bx:bxl-facebook-circle"></span>
          </li>
          <li>
            <a href="https://www.instagram.com/digitaledgetechnologies" target="_blank" rel="noreferrer">INSTAGRAM</a><span className="iconify" data-icon="ant-design:instagram-filled"></span>
          </li>
          <li>
            <a href="https://in.linkedin.com/company/digitaledgetech" target="_blank" rel="noreferrer">LINKEDIN</a><span className="iconify" data-icon="ant-design:linkedin-filled"></span>
          </li>
        </ul>
        <a href="#top" className="gotop"><img src="/assets/images/Arrow.png" alt="Arrow" /></a>
      </aside>

      {/* Header */}
      <header className="header">
        <nav className={`navbar ${isMenuOpen ? 'light' : ''}`}>
          <div className="logo">
            <Link to="/"><img src="/assets/images/logo.png" alt="nav-logo" /></Link>
          </div>
          <div className="main-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="#" id="digitalSolutionsDropdown">
                  Digital Solutions
                </a>
                <ul className="dropdown-menu custom-dropdown shadow" aria-labelledby="digitalSolutionsDropdown">
                  <li><Link className="dropdown-item" to="/software">Software Development</Link></li>
                  <li><Link className="dropdown-item" to="/web">Web Development</Link></li>
                  <li><Link className="dropdown-item" to="/web">Ecom Development</Link></li>
                  <li><Link className="dropdown-item" to="/mobile">Mobile Applications</Link></li>
                  <li><Link className="dropdown-item" to="/social">Social Media Marketing</Link></li>
                  <li><Link className="dropdown-item" to="/creative">Creative Designs</Link></li>
                </ul>
              </li>
              <li><Link to="/hardware">Hardware Solutions</Link></li>
              <li><Link to="/clientele">Clientele</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="hamburger-menu" id="hamburger-menu" onClick={toggleMenu}>
            <div className={`burger ${isMenuOpen ? 'open' : ''}`}>
              <svg id="burger-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <title>Show / Hide Navigation</title>
                <rect className="burger-svg__base" width="50" height="50" />
                <g className="burger-svg__bars">
                  <rect className="burger-svg__bar burger-svg__bar-1" x="14" y="18" width="22" height="2" />
                  <rect className="burger-svg__bar burger-svg__bar-2" x="14" y="24" width="22" height="2" />
                  <rect className="burger-svg__bar burger-svg__bar-3" x="14" y="30" width="22" height="2" />
                </g>
              </svg>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      {children}

      {/* Floating Button */}
      <div className="float-icon">
        <a href="https://wa.me/919152889989" className="whatsapp_float" id="float" target="_blank" rel="noreferrer">
          <img src="/assets/images/whatsapp.png" alt="whatsapp" />
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInUp">
              <figure className="logo"> <img src="/assets/images/logo.png" alt="footer logo" /> </figure>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="inner-logo-info">
                <span className="iconify" data-icon="akar-icons:location" id="location-icon"></span>
                <h5>Location</h5>
              </div>
              <address>
                A-1701/1702, Lotus Corporate Park,<br />
                Ram Mandir Rd, W.E.Highway,<br />
                Jay Coach, Goregaon East,<br />
                Mumbai 400063, India.
              </address>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp">
              <div className="inner-logo-info">
                <span className="iconify" data-icon="mdi:human-greeting-proximity" id="hello-icon"></span>
                <h5>Say Hello</h5>
              </div>
              <address>
                <div className="footer-address footer-detail">
                  <span className="iconify" data-icon="clarity:email-solid"></span>
                  <a href="mailto:info@digitaledgetech.in"> info@digitaledgetech.in</a>
                </div>
                <div className="footer-address footer-detail">
                  <span className="iconify" data-icon="bx:bxs-phone-call"></span>
                  <a href="tel:+91 9152889989">+91 9152889989</a>
                </div>
              </address>
            </div>
            <div className="col-12 wow fadeInUp">
              <div className="sub-footer">
                <span>
                  © <span id="copyright">{new Date().getFullYear()}</span> Digital Edge Technologies - All rights Reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <audio id="hamburger-hover" src="/assets/audio/link.mp3" preload="auto"></audio>
    </>
  );
};

export default Layout;
