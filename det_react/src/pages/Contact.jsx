import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        // Typewriter Effect Initialization
        const initTypewriter = () => {
            const TxtType = function (el, toRotate, period) {
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 10) || 2000;
                this.txt = '';
                this.tick();
                this.isDeleting = false;
            };

            TxtType.prototype.tick = function () {
                var i = this.loopNum % this.toRotate.length;
                var fullTxt = this.toRotate[i];

                if (this.isDeleting) {
                    this.txt = fullTxt.substring(0, this.txt.length - 1);
                } else {
                    this.txt = fullTxt.substring(0, this.txt.length + 1);
                }

                this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

                var that = this;
                var delta = 200 - Math.random() * 100;

                if (this.isDeleting) { delta /= 2; }

                if (!this.isDeleting && this.txt === fullTxt) {
                    delta = this.period;
                    this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') {
                    this.isDeleting = false;
                    this.loopNum++;
                    delta = 500;
                }

                setTimeout(function () {
                    that.tick();
                }, delta);
            };

            const elements = document.getElementsByClassName('typewrite');
            for (let i = 0; i < elements.length; i++) {
                const toRotate = elements[i].getAttribute('data-type');
                const period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }

            // Inject CSS for typewriter cursor
            var css = document.createElement("style");
            css.type = "text/css";
            css.id = "typewrite-style-contact";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #edb121}";
            if (!document.getElementById("typewrite-style-contact")) {
                document.body.appendChild(css);
            }
        };

        const timer = setTimeout(() => {
            initTypewriter();
        }, 100);

        // AOS initialization if exists
        if (window.AOS) {
            window.AOS.init({ duration: 1000, once: true });
        }

        return () => {
            clearTimeout(timer);
            const css = document.getElementById("typewrite-style-contact");
            if (css && css.parentNode) {
                css.parentNode.removeChild(css);
            }
        };
    }, []);

    return (
        <div className="contact-page-wrapper">
            <header className="contact-hero">
                <div className="container">
                    <div className="headlines" data-aos="fade-up">
                        <h1 className='d-flex align-items-center text-light'>
                            You can: <br />
                            <span className="typewrite mx-2" data-period="2000" data-type='[ "Call us", "Mail us","Follow us"]'></span>
                        </h1>
                        <p className="lead opacity-75">We are here to help you elevate your digital presence.</p>
                    </div>
                </div>
            </header>

            <section className="contact-details-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-7 mb-4" data-aos="fade-right">
                            <div className="contact-card-glass">
                                <h2>Visit Our Offices</h2>

                                <div className="address-item">
                                    <div className="address-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="address-text">
                                        <h6>Head Office</h6>
                                        <p>
                                            A-1701/1702, Lotus Corporate Park, Ram Mandir Rd, W.E.Highway,
                                            Jay Coach, Goregaon East, Mumbai 400063
                                        </p>
                                        <a className="direction-link" target="_blank" rel="noopener noreferrer"
                                            href="https://www.google.com/maps/place/Digital+Edge+Technologies/@19.1452137,72.8510338,17z">
                                            Get Directions <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="address-item mb-1">
                                    <div className="address-icon">
                                        <i className="fas fa-building"></i>
                                    </div>
                                    <div className="address-text">
                                        <h6>Branch Office</h6>
                                        <p>
                                            24, Jai Hind Cottage, oppo. Alpha College, Shahaji Raje Road, Vile Parle East, Mumbai 400057
                                        </p>
                                        <a className="direction-link" target="_blank" rel="noopener noreferrer"
                                            href="https://www.google.com/maps/place/Digital+Edge+Technologies+-+Vile+Parle/@19.106578,72.8450912,17z">
                                            Get Directions <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5" data-aos="fade-left">
                            <div className="contact-card-glass">
                                <h2>Reach Out</h2>
                                <p className="text-muted mb-4">We're always looking for talented people, so let's work together.</p>

                                <div className="reach-us-item">
                                    <i className="fas fa-envelope text-primary"></i>
                                    <a href="mailto:info@digitaledgetech.in">info@digitaledgetech.in</a>
                                </div>

                                <div className="reach-us-item mb-1">
                                    <i className="fas fa-phone-alt text-warning"></i>
                                    <a href="tel:+919152889989">+91 9152889989</a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-form-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10" data-aos="zoom-in">
                            <div className="premium-form-card">
                                <div className="text-center mb-5">
                                    <h2 className="display-6 fw-bold">Send us a Message</h2>
                                    <p className="text-muted">Tell us about your project and let's create something amazing.</p>
                                </div>

                                <form id="contact-form" className="row g-4">
                                    <div className="col-md-6">
                                        <div className="form-group-modern">
                                            <input type="text" name="name" id="name" required />
                                            <label htmlFor="name">Full Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group-modern">
                                            <input type="email" name="email" id="email" required />
                                            <label htmlFor="email">E-mail Address</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group-modern">
                                            <input type="text" name="phone" id="phone" required />
                                            <label htmlFor="phone">Contact Number</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group-modern">
                                            <textarea name="message" id="message" rows="4" required></textarea>
                                            <label htmlFor="message">Your Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center mt-5">
                                        <button type="submit" className="btn-premium-submit  text-center px-5 align-items-center">
                                            Send Message
                                            {/* <i className="fas fa-paper-plane ms-2 mt-0 mb-0"></i> */}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
