import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
            css.id = "typewrite-style-about";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            if (!document.getElementById("typewrite-style-about")) {
                document.body.appendChild(css);
            }
        };

        const timer = setTimeout(() => {
            initTypewriter();
        }, 100);

        return () => {
            clearTimeout(timer);
            const css = document.getElementById("typewrite-style-about");
            if (css && css.parentNode) {
                css.parentNode.removeChild(css);
            }
        };
    }, []);

    return (
        <>
            <header className="header">
                <div className="headlines">
                    <h1>
                        We Believe in 3'C <br />
                        <span className="typewrite" data-period="2000"
                            data-type='[ "Creativity", "Caliber","Customization"]'></span>
                        <span className="wrap"></span>
                    </h1>
                </div>
            </header>

            {/* About Intro */}
            <section className="aboutUsArea">
                <div className="innerAboutUs">
                    <div className="aboutContent">
                        <div className="innerAboutContent">
                            <h2 className="mb-4">About Us</h2>
                            <p>
                                At Digital Edge Technologies we believe, understanding and supporting your business model
                                and goals and your definition of a successful business are important to deliver 360-degree
                                solutions that are tailored
                                to your aspirations.
                            </p>
                            <p>
                                <Link to="/clientele">Our clients</Link> surely connect with the provided solutions,
                                which
                                have helped them to drive their social collaboration efforts and speed up communications, and
                                get a quick turnaround on their business queries.
                            </p>
                            <p>
                                Digital Edge Technologies comprise of handpicked individuals grown the best in their forte. A
                                team that is dedicated to providing the best solutions and is also updated with the last tips
                                and
                                tricks is how we line up ourselves.
                            </p>
                        </div>
                    </div>
                    <div className="aboutImg">
                        <img src="/assets/images/about2.jpg" alt="About Us" />
                    </div>
                </div>
            </section>
            {/* End About Intro */}

            {/* Our Principles */}
            <section className="ourPrinciplesArea">
                <div className="container">
                    <div className="innerOurPrinciples">
                        <div className="principleHeaderTxt">
                            <h2>Our Lean Principles Are: </h2>
                        </div>

                        <div className="principlesPoints">
                            <div className="principleBox">
                                <img src="/assets/images/value.png" alt="Values" />
                                <p>Identifying the values</p>
                            </div>

                            <div className="principleBox">
                                <img src="/assets/images/support.png" alt="Service" />
                                <p>Mapping the Service</p>
                            </div>

                            <div className="principleBox">
                                <img src="/assets/images/business-plan.png" alt="Plan" />
                                <p>Creating and Executing the "shared" plan</p>
                            </div>

                            <div className="principleBox">
                                <img src="/assets/images/ok.png" alt="Ok" />
                                <p>Lastly, persisting for perfection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Our Principles */}

            {/* Our Process */}
            <section className="ourProcessArea">
                <div className="container">
                    <div className="innerOurProcess">
                        <div className="ourProcessHeader">
                            <h2 className="mb-4">How we process: </h2>
                            <p>
                                It's simple, we love seeing your business grow as much as you do! Our years of hardwork,
                                consistency, approvals as well as seldom rejections, led us to follow our methodology which
                                helps us execute every project both on time and on budget.
                            </p>
                        </div>
                        <div className="ourProcessPoints">
                            <div className="processBox">
                                <img src="/assets/images/link.png" alt="Connection" />
                                <p className="title">Connection</p>
                                <p className="desc">
                                    In the very first phase, our BDM connects with you and discovers your needs and
                                    articulates your wants.
                                </p>
                            </div>

                            <div className="processBox">
                                <img src="/assets/images/solution.png" alt="Solution" />
                                <p className="title">Come up on a solution</p>
                                <p className="desc">
                                    Once the team takes the reins and collectively brainstorm, research, and
                                    combines your needs - our team together comes up with a solution to create a SOLID PLAN
                                </p>
                            </div>

                            <div className="processBox">
                                <img src="/assets/images/signature.png" alt="Characterization" />
                                <p className="title">Characterization</p>
                                <p className="desc">
                                    After reviewing the "PLAN", the next step is to get a proposal of your dream
                                    project on papers based on your business plan
                                </p>
                            </div>

                            <div className="processBox">
                                <img src="/assets/images/operation.png" alt="Implementation" />
                                <p className="title">Implementation</p>
                                <p className="desc">
                                    Once the plan is approved, our team starts working on creating the best
                                    experience for you. This step is where the design becomes the code, the bases of your
                                    business .
                                </p>
                            </div>

                            <div className="processBox">
                                <img src="/assets/images/quality-assurance.png" alt="QA" />
                                <p className="title">QA</p>
                                <p className="desc">
                                    We manage this crucial step alongside you and ensure you for a timely delivery.
                                    In this step, we review internally to make sure nothing's been missed and that your business
                                    looks great.
                                </p>
                            </div>

                            <div className="processBox">
                                <img src="/assets/images/product-lauch.png" alt="Launch" />
                                <p className="title">Launch</p>
                                <p className="desc">
                                    On the D-Day, Implementing your new  is just the beginning - monitoring
                                    and ongoing  maintenance are parts of the process. We monitor  performance and
                                    perform updates at your request.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* End Our Process */}

            <div className="container">
                <div className="titles">
                    <h6>OUR SERVICES</h6>
                    <p className="text-yellow">We are Master of.</p>
                </div>
                <div className="col-12">

                    <div className="row">
                        <Link to="/software" className="col-12 col-sm-6 col-lg-4 service-item mb-3">
                            <img src="/assets/images/Software Development.png" alt="Software Development" className="service-image" />
                            <h3 className="service-title fw-bold">Software Development</h3>
                        </Link>

                        <Link to="/erp" className="col-12 col-sm-6 col-lg-4 service-item mb-3">
                            <img src="/assets/images/ERP-01.png" alt="Enterprise Resource Planning" className="service-image" />
                            <h3 className="service-title fw-bold">Enterprise Resource Planning</h3>
                        </Link>
                        <Link to="/web" className="col-12 col-sm-6 col-lg-4 service-item mb-3">
                            <img src="/assets/images/Web Development-01.png" alt="Web Development" className="service-image" />
                            <h3 className="service-title fw-bold">Web Development</h3>
                        </Link>
                        <Link to="/creative" className="col-12 col-sm-6 col-lg-4 service-item mb-3">
                            <img src="/assets/images/Intractive & Creative Design-01-01.png" alt="Interactive and Creative Designs" className="service-image" />
                            <h3 className="service-title fw-bold">Interactive and Creative Designs</h3>
                        </Link>
                        <Link to="/social" className="col-12 col-sm-6 col-lg-4 service-item mb-3">
                            <img src="/assets/images/2352644-01.png" alt="Social Media Management" className="service-image" />
                            <h3 className="service-title fw-bold">Social Media Management</h3>
                        </Link>
                        <Link to="/mobile" className="col-12 col-sm-6 col-lg-4 service-item mb-3">
                            <img src="/assets/images/Mobile App Development.png" alt="Mobile App Development" className="service-image" />
                            <h3 className="service-title fw-bold">Mobile App Development</h3>
                        </Link>
                    </div>
                </div>
            </div>

            <section className="work-with-us">
                <div className="container wow fadeInUp">
                    <h6>WORK WITH PRO TEAM</h6>
                    <div className="super-hero">
                        <h2>Want to join the superheroes league?</h2>
                        <p>
                            Email us your C.V. with your super powers; may it be designing,
                            coding, social media management, sales or marketing...
                        </p>
                        <h1>we welcome all.</h1>
                    </div>
                    <div className="inner-fadeup-logo pro-team">
                        <span className="iconify" data-icon="dashicons:email-alt" id="mail-icon"></span>
                        <a href="mailto:info@digitaledgetech.in">careers@digitaledgetech.in</a>
                    </div>
                    <small>Or</small>
                    <div className="inner-fadeup-logo pro-team">
                        <span className="iconify" data-icon="bx:bx-phone-call" id="call-icon"></span>
                        <a href="tel:+91 9152889989">+91 9152889989</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
