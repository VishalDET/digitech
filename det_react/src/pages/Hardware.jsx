import React, { useEffect } from 'react';

const Hardware = () => {
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
            css.id = "typewrite-style-hardware";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            if (!document.getElementById("typewrite-style-hardware")) {
                document.body.appendChild(css);
            }
        };

        const timer = setTimeout(() => {
            initTypewriter();
        }, 100);

        return () => {
            clearTimeout(timer);
            const css = document.getElementById("typewrite-style-hardware");
            if (css && css.parentNode) {
                css.parentNode.removeChild(css);
            }
        };
    }, []);

    return (
        <>
            <style>
                {`
                body{
                overflow-x: hidden;}
          .contact-banner {
            background: linear-gradient(135deg, #ffb400, #802288);
            color: white;
            text-align: center;
            padding: 50px 30px;
            border-radius: 20px;
            position: relative;
            overflow: hidden;
          }

          .contact-banner h2 {
            font-weight: bold;
          }

          .contact-banner p {
            opacity: 0.9;
            margin-bottom: 20px;
          }

          .contact-button {
            background: white;
            color: #3b1d85;
            border-radius: 30px;
            padding: 10px 20px;
            font-weight: bold;
            border: none;
            transition: 0.3s;
          }

          .contact-button:hover {
            background: #f5f5f5;
          }

          /* Floating Elements */
          .circle {
            position: absolute;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            filter: blur(8px);
          }

          .circle.one {
            width: 80px;
            height: 80px;
            top: 20px;
            left: 30px;
          }

          .circle.two {
            width: 50px;
            height: 50px;
            bottom: 30px;
            right: 40px;
          }

          .circle.three {
            width: 30px;
            height: 30px;
            top: 50%;
            left: 50%;
          }
        `}
            </style>
            <header className="header" data-aos="fade-down">
                <div className="headlines">
                    <h1>
                        Delivering:<br />
                        <span className="typewrite" data-period="2000"
                            data-type='[ "Transform Your Business with High-Performance Hardware"]'></span>
                        <span className="wrap"></span>
                    </h1>
                </div>
            </header>
            <section className="aboutUsArea">
                <div className="innerAboutUs">
                    <div className="aboutContent py-5">
                        <div className="innerAboutContent">
                            <h2 className="mb-4">High-Quality Pre-Owned Refurbished Laptops, Desktops, iMacs, Servers, Screens, and Accessories.</h2>
                            <p>
                                Discover premium refurbished technology at unbeatable prices! Our range includes laptops, desktops, iMacs, servers, screens, and accessories, offering exceptional value without compromising on performance or quality.
                            </p>

                        </div>
                    </div>
                    <div className="aboutImg ">
                        <div className="row px-3 py-5 bg-yellow">
                            <div className="col-md-4" data-aos="zoom-in">
                                <div className="card product-card p-3 shadow-none">
                                    <img src="/assets/images/Laptop.png" className="card-img-top" alt="Laptop" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Laptops</h5>
                                        <p className="card-text">Sleek, portable, and high-performance for every need.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
                                <div className="card product-card p-3 shadow-none">
                                    <img src="/assets/images/Desktop.png" className="card-img-top" alt="Desktop" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Desktops</h5>
                                        <p className="card-text">From budget-friendly options to high-end setups.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
                                <div className="card product-card p-3 shadow-none">
                                    <img src="/assets/images/Server.png" className="card-img-top" alt="Server" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Servers</h5>
                                        <p className="card-text">Reliable and powerful for all IT infrastructure needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-5">
                <div className="container mt-5">
                    <div className="innerOurProcess">
                        <div className="ourProcessHeader">
                            <h2 className="mb-4">Why Choose Our Refurbished Products? </h2>
                        </div>
                        <div className="ourProcessPoints">
                            <div className="processBox" data-aos="fade-up">
                                <img src="/assets/images/aq.png" alt="Affordable Quality" /><br />
                                <strong>Affordable Quality</strong>
                                <p>High-end devices at a fraction of the price. Ideal for individuals, businesses, and startups.</p>
                            </div>

                            <div className="processBox" data-aos="fade-up">
                                <img src="/assets/images/ttac.png" alt="Thoroughly Tested" /><br />

                                <strong>Thoroughly Tested and Certified</strong>
                                <p>Each item is rigorously inspected, cleaned, and tested to meet industry standards.</p>
                            </div>

                            <div className="processBox" data-aos="fade-up">
                                <img src="/assets/images/ss.png" alt="Sustainably Sourced" /><br />

                                <strong>Sustainably Sourced</strong>
                                <p>Reduce e-waste and contribute to a sustainable future by choosing refurbished.</p>
                            </div>

                            <div className="processBox" data-aos="fade-up">
                                <img src="/assets/images/ws.png" alt="Warranty" /><br />

                                <strong>Warranty and Support</strong>
                                <p>Enjoy peace of mind with our warranty and dedicated support team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container d-flex justify-content-center align-items-center my-4" data-aos="fade-up">
                <div className="col-md-8">
                    <div className="contact-banner">
                        <h2 data-aos="fade-up">Upgrade Your Tech with Us</h2>
                        <p data-aos="fade-up">Get the best deals on high-quality refurbished PCs, laptops, and servers. Affordable, reliable, and performance-driven.</p>
                        <div className="d-flex justify-content-between bg-light p-2 rounded" data-aos="fade-up">
                            <div>
                                <strong className="text-black mr-2"><i className="fas fa-envelope mr-2 mr-2"></i>Email:</strong>
                                <a className="text-black" href="mailto:info@digitaledgetech.in">info@digitaledgetech.in</a>
                            </div>
                            <div>
                                <strong className="text-black mr-2"><i className="fas fa-phone mr-2"></i>Call:</strong>
                                <a className="text-black" href="tel:+919152889989">+91 9152889989</a>
                            </div>
                        </div>
                        <div className="circle one"></div>
                        <div className="circle two"></div>
                        <div className="circle three"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hardware;
