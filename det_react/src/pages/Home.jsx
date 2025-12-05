import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    useEffect(() => {
        // Owl Carousel Initialization
        const initCarousel = () => {
            if (window.$ && window.$.fn.owlCarousel) {
                window.$('.home-slider').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    items: 1,
                    autoplay: true
                });
            }
        };

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
            css.id = "typewrite-style";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            if (!document.getElementById("typewrite-style")) {
                document.body.appendChild(css);
            }
        };

        const timer = setTimeout(() => {
            initCarousel();
            initTypewriter();
        }, 100);

        return () => {
            clearTimeout(timer);
            if (window.$ && window.$.fn.owlCarousel) {
                const $owl = window.$('.home-slider');
                if ($owl.length > 0) {
                    $owl.trigger('destroy.owl.carousel');
                }
            }
            const css = document.getElementById("typewrite-style");
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
                        Projects that:<br />
                        <span className="typewrite" data-period="2000"
                            data-type='["Capture Attention","Drive Conversion","Generate results."]'></span>
                        <span className="wrap"></span>
                    </h1>
                </div>
            </header>

            {/* Slider */}
            <div className="slider-sec" id="desktop-banner">
                <div className="owl-carousel owl-theme home-slider">
                    <div className="item" id="desktop-banner-1">
                        <img src="https://res.cloudinary.com/dmnjn8pp4/image/upload/v1763365610/Banner_03_jesfeo.gif" alt="slide02" className="img-fluid" />
                    </div>
                    <div className="item" id="desktop-banner-2">
                        <img src="https://res.cloudinary.com/dmnjn8pp4/image/upload/v1763365607/New_Banner_02_bdauow.gif" alt="slide01" className="img-fluid" />
                    </div>
                    <div className="item" id="desktop-banner-3">
                        <img src="https://res.cloudinary.com/dmnjn8pp4/image/upload/v1763365609/New_Banner_05_bmpefr.gif" alt="slide03" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="slider-sec" id="mobile-banner">
                <div className="owl-carousel owl-theme home-slider">
                    <div className="item" id="mobile-banner-1">
                        <img src="/assets/images/Banner_03_new.gif" alt="slide02" className="img-fluid" />
                    </div>
                    <div className="item" id="mobile-banner-2">
                        <img src="/assets/images/Banner_02_new.gif" alt="slide01" className="img-fluid" />
                    </div>
                    <div className="item" id="mobile-banner-3">
                        <img src="/assets/images/BannerM_05.gif" alt="slide03" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="d-flex d-md-none">
                <div className="col-12 pt-5">
                    <div className="container">
                        <div className="titles">
                            <h6>OUR SERVICES</h6>
                            <p className="text-yellow">We are Master of.</p>
                        </div>
                        <div id="servicesCarousel" className="carousel slide services-carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                            <div className="carousel-indicators d-flex justify-content-center mt-3 mb-0 py-0">
                                <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div className="carousel-inner ">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-4 service-item">
                                            <Link to="/software" className="text-black">
                                                <img src="/assets/images/Software Development.png" alt="Software Development" className="service-image" />
                                                <h3 className="service-title fw-bold">Software Development</h3>
                                            </Link>
                                            <p className="service-intro">We offer tailored <Link to="/software" className="text-black">software solutions</Link> to meet your unique business needs, ensuring efficiency and business logic. We specialize in agile methodologies, ensuring rapid deployment and scalability.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-4 service-item">
                                            <Link to="/erp" className="text-black">
                                                <img src="/assets/images/ERP-01.png" alt="Enterprise Resource Planning" className="service-image" />
                                                <h3 className="service-title fw-bold">Enterprise Resource Planning</h3>
                                            </Link>
                                            <p className="service-intro">Utilize your staff's skills, hardware, and software to increase productivity and simplify daily processes with our ERP solutions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-4 service-item">
                                            <Link to="/web" className="text-black">
                                                <img src="/assets/images/Web Development-01.png" alt="Web Development" className="service-image" />
                                                <h3 className="service-title fw-bold">Web Development</h3>
                                            </Link>
                                            <p className="service-intro">We create responsive and engaging websites that enhance user experience and drive conversions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-4 service-item">
                                            <Link to="/creative" className="text-black">
                                                <img src="/assets/images/Intractive & Creative Design-01-01.png" alt="Interactive and Creative Designs" className="service-image" />
                                                <h3 className="service-title fw-bold">Interactive and Creative Designs</h3>
                                            </Link>
                                            <p className="service-intro">Enhance your business with interactive and creative designs that adapt to and reflect your brand.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-4 service-item">
                                            <Link to="/social" className="text-black">
                                                <img src="/assets/images/2352644-01.jpg" alt="Social Media Management" className="service-image" />
                                                <h3 className="service-title fw-bold">Social Media Management</h3>
                                            </Link>
                                            <p className="service-intro">Engage your brand with effective social media strategies provided by Digital Edge.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-4 service-item">
                                            <Link to="/mobile" className="text-black">
                                                <img src="/assets/images/Mobile App Development.png" alt="Mobile App Development" className="service-image" />
                                                <h3 className="service-title fw-bold">Mobile App Development</h3>
                                            </Link>
                                            <p className="service-intro">We create innovative mobile applications (Android App Development / iOS App Development) that provide seamless user experiences and drive engagement.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev d-none" type="button" data-bs-target="#servicesCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next d-none" type="button" data-bs-target="#servicesCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-3 d-none d-md-block">
                <div className="col-12 pt-3">
                    <div className="container">
                        <div className="titles">
                            <h6>OUR SERVICES</h6>
                            <p className="text-yellow">We are Master of.</p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-4 service-item">
                                <Link to="/software" className="text-black">
                                    <img src="/assets/images/Software Development.png" alt="Custom Software Development Solutions for Businesses" className="service-image" />
                                    <h3 className="service-title fw-bold">Software Development</h3>
                                </Link>
                                <p className="service-intro">We offer tailored <Link to="/software" className="text-black">software solutions</Link> to meet your unique business needs, ensuring efficiency and business logic. We specialize in agile methodologies, ensuring rapid deployment and scalability.</p>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 service-item">
                                <Link to="/erp" className="text-black">
                                    <img src="/assets/images/ERP-01.png" alt="Enterprise Resource Planning Software Solutions" className="service-image" />
                                    <h3 className="service-title fw-bold">Enterprise Resource Planning</h3>
                                </Link>
                                <p className="service-intro">Utilize your staff's skills, hardware, and software to increase productivity and simplify daily processes with our ERP solutions.</p>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 service-item">
                                <Link to="/web" className="text-black">
                                    <img src="/assets/images/Web Development-01.png" alt="Professional Web Development Services for Businesses" className="service-image" />
                                    <h3 className="service-title fw-bold">Web Development</h3>
                                </Link>
                                <p className="service-intro">We create responsive and engaging websites that enhance user experience and drive conversions.</p>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 service-item">
                                <Link to="/mobile" className="text-black">
                                    <img src="/assets/images/Mobile App Development.png" alt="Innovative Mobile App Development for iOS and Android" className="service-image" />
                                    <h3 className="service-title fw-bold">Mobile App Development</h3>
                                </Link>
                                <p className="service-intro">We create innovative mobile applications (Android App Development / iOS App Development) that provide seamless user experiences and drive engagement.</p>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 service-item">
                                <Link to="/creative" className="text-black">
                                    <img src="/assets/images/Intractive & Creative Design-01-01.png" alt="Interactive and Creative Design Services" className="service-image" />
                                    <h3 className="service-title fw-bold">Interactive and Creative Designs</h3>
                                </Link>
                                <p className="service-intro">Enhance your business with interactive and creative designs that adapt to and reflect your brand.</p>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 service-item">
                                <Link to="/social" className="text-black">
                                    <img src="/assets/images/2352644-01.png" alt="Social Media Management Services for Businesses" className="service-image" />
                                    <h3 className="service-title fw-bold">Social Media Management</h3>
                                </Link>
                                <p className="service-intro">Engage your brand with effective social media strategies provided by Digital Edge.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="about-us-section bg-light pb-3">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="titles">
                            <h6>ABOUT Us</h6>
                            <p className="text-yellow">What we have achieved</p>
                        </div>
                    </div>
                    <div className="row align-items-center pb-3">
                        <div className="col-md-6">
                            <img src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?ga=GA1.1.945843794.1726646547&semt=ais_hybrid" alt="About Us Image" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <div className="about-us-content">
                                <div className="stats d-flex flex-wrap mt-3 mt-md-0 justify-content-center">
                                    <div className="stat-item text-center p-2 col-6 col-md-4">
                                        <strong className="fs-3 text-black">10+</strong>
                                        <p className="fs-5 text-wrap">Years of Experience</p>
                                    </div>
                                    <div className="stat-item text-center p-2 col-6 col-md-4">
                                        <strong className="fs-3 text-black">20+</strong>
                                        <p className="fs-5 text-wrap">Ecommerce Developed</p>
                                    </div>
                                    <div className="stat-item text-center p-2 col-6 col-md-4">
                                        <strong className="fs-3 text-black">35+</strong>
                                        <p className="fs-5 text-wrap">Websites Developed</p>
                                    </div>
                                    <div className="stat-item text-center p-2 col-6 col-md-4">
                                        <strong className="fs-3 text-black">20+</strong>
                                        <p className="fs-5 text-wrap">Mobile Apps Developed</p>
                                    </div>
                                    <div className="stat-item text-center p-2 col-6 col-md-4">
                                        <strong className="fs-3 text-black">10+</strong>
                                        <p className="fs-5 text-wrap">ERP Software Developed</p>
                                    </div>
                                    <div className="stat-item text-center p-2 col-6 col-md-4">
                                        <strong className="fs-3 text-black">50+</strong>
                                        <p className="fs-5">Social Media Campaigns</p>
                                    </div>
                                    <div className="stat-item text-center p-2 col-6 col-md-4">
                                        <strong className="fs-3 text-black">4.7/5</strong>
                                        <p className="fs-5 text-wrap text-black">Rated on Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="works">
                <div className="container">
                    <ul>
                        {/* Left Column - Explore Digital Edge */}
                        <li>
                            <div className="titles">
                                <h2>Explore Digital Edge</h2>
                                <p>
                                    We're constantly updating ourselves with the newest trends and technologies to boost your
                                    business.
                                </p>
                                <div className="custom-btn"><Link to="/service">See all Services<span></span> <i></i></Link></div>
                            </div>
                        </li>

                        {/* Right Column - Aminu */}
                        <li>
                            <div className="project-box">
                                <figure className="project-image reveal-effect masker wow">
                                    <img src="/assets/images/AMINU.jpg"
                                        alt="Aminu Skin Care eCommerce Website"
                                        width="100%"
                                        height="auto" />
                                </figure>
                                <div className="project-content">
                                    <h3><a href="https://aminu.life/" target="_blank" rel="noreferrer">Aminu</a></h3>
                                    <small>Website Skin Care - eCommerce</small>
                                </div>
                            </div>
                        </li>

                        {/* Left Column - Killer Store Locator */}
                        <li className="block relative">
                            <div className="project-box left-auto translate-x-10">
                                <figure className="project-image reveal-effect masker wow">
                                    <img src="/assets/images/Killer.jpg"
                                        alt="Killer Store Locator Dynamic Website"
                                        width="100%"
                                        height="auto" />
                                </figure>
                                <div className="project-content">
                                    <h3>
                                        <a href="https://www.killerjeans.com/store-locator" target="_blank" rel="noreferrer">
                                            Killer Store Locator
                                        </a>
                                    </h3>
                                    <small>Website Killer Store Locator - Dynamic</small>
                                </div>
                            </div>
                        </li>

                        {/* Right Column - Passion Indulge */}
                        <li>
                            <div className="project-box">
                                <figure className="project-image reveal-effect masker wow">
                                    <img src="/assets/images/Passion Indulge.jpg"
                                        alt="Passion Indulge Beauty eCommerce Website"
                                        width="100%"
                                        height="auto" />
                                </figure>
                                <div className="project-content">
                                    <h3><a href="https://passionindulge.com/" target="_blank" rel="noreferrer">Passion Indulge</a></h3>
                                    <small>Website Beauty & Skin Care — eCommerce</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="process-section">
                <div className="container">
                    <div className="titles text-start mb-5" style={{ paddingRight: 0 }}>
                        <h6>HOW WE PROCESS</h6>
                        <p className="text-yellow text-bold">Our Development Process</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 mb-3">
                            <div className="process-card">
                                <span className="process-number">01</span>
                                <div className="process-header">
                                    <div className="process-icon-wrapper">
                                        <i className="fas fa-lightbulb process-icon"></i>
                                    </div>
                                </div>
                                <h3 className="process-title">Ideation & Planning</h3>
                                <p className="process-description">We brainstorm ideas and create a detailed project plan based on your requirements.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-3">
                            <div className="process-card">
                                <span className="process-number">02</span>
                                <div className="process-header">
                                    <div className="process-icon-wrapper">
                                        <i className="fas fa-pencil-ruler process-icon"></i>
                                    </div>
                                </div>
                                <h3 className="process-title">Design & Prototyping</h3>
                                <p className="process-description">Our designers create intuitive UI/UX designs and interactive prototypes for your approval.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-3">
                            <div className="process-card">
                                <span className="process-number">03</span>
                                <div className="process-header">
                                    <div className="process-icon-wrapper">
                                        <i className="fas fa-code process-icon"></i>
                                    </div>
                                </div>
                                <h3 className="process-title">Development</h3>
                                <p className="process-description">Our experienced developers bring the designs to life with clean, efficient code.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-3">
                            <div className="process-card">
                                <span className="process-number">04</span>
                                <div className="process-header">
                                    <div className="process-icon-wrapper">
                                        <i className="fas fa-vial process-icon"></i>
                                    </div>
                                </div>
                                <h3 className="process-title">Testing & QA</h3>
                                <p className="process-description">Rigorous testing ensures your app is bug-free and performs optimally across devices.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-3">
                            <div className="process-card">
                                <span className="process-number">05</span>
                                <div className="process-header">
                                    <div className="process-icon-wrapper">
                                        <i className="fas fa-rocket process-icon"></i>
                                    </div>
                                </div>
                                <h3 className="process-title">Deployment</h3>
                                <p className="process-description">We handle the app store submission process and ensure a smooth launch.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-3">
                            <div className="process-card">
                                <span className="process-number">06</span>
                                <div className="process-header">
                                    <div className="process-icon-wrapper">
                                        <i className="fas fa-cogs process-icon"></i>
                                    </div>
                                </div>
                                <h3 className="process-title">Maintenance & Support</h3>
                                <p className="process-description">We provide ongoing support and updates to keep your app running smoothly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="logos">
                <div className="container">
                    <div className="titles">
                        <h6>SELECTED CLIENTS</h6>
                        <p>Some brands that instilled their trust in us.</p>
                    </div>
                </div>
            </section>
            <div className="company-logo">
                <div className="container">
                    <div className="main-logo-section">
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Reliance.png"
                                alt="Reliance" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Sahara-star.png" onClick={() => window.open("https://www.saharastar.com/", "_blank")}
                                alt="Sahara" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/satco.png" onClick={() => window.open("https://www.satcodirect.com/", "_blank")}
                                alt="satco" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Satko.png"
                                alt="Satko" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Voltup.png" onClick={() => window.open("https://www.voltup.in//", "_blank")}
                                alt="Voltup" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Yes-bank.png" onClick={() => window.open("https://www.yesbank.in/", "_blank")}
                                alt="Yes-bank" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/ICICI-prudential.png" onClick={() => window.open("https://www.iciciprulife.com/", "_blank")}
                                alt="ICICI-prudential" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Integriti.png" onClick={() => window.open("https://shop.integriticlothing.com/", "_blank")}
                                alt="Integriti" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Killer-jeans.png" onClick={() => window.open("https://shop.killerjeans.com/", "_blank")}
                                alt="Killer-jeans" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/kkcl.png" onClick={() => window.open("https://kewalkiran.com/", "_blank")} alt="kkcl"
                                className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Mangal.png" onClick={() => window.open("https://www.mangalfincorp.com/", "_blank")}
                                alt="Mangal" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Michaleson-grants.png"
                                onClick={() => window.open("https://www.michelsonprizeandgrants.org/", "_blank")} alt="Michaleson" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/mbh.png"
                                onClick={() => window.open("https://www.michelsonprizeandgrants.org/", "_blank")} alt="Mangal Build Home" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/synfoshop.png"
                                onClick={() => window.open("https://www.michelsonprizeandgrants.org/", "_blank")} alt="Synfoshop" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/drcom.png"
                                onClick={() => window.open("https://www.michelsonprizeandgrants.org/", "_blank")} alt="Dr Com" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/vetranova1.png"
                                onClick={() => window.open("https://www.michelsonprizeandgrants.org/", "_blank")} alt="Vetranova" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Baskin-and-robbins.png" onClick={() => window.open("https://www.baskinrobbinsindia.com/", "_blank")}
                                alt="Baskin-and-robbins" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Aminu.png" onClick={() => window.open("https://aminu.life/", "_blank")}
                                alt="Aminu" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Ashland.png" onClick={() => window.open("https://www.ashland.com/", "_blank")}
                                alt="Ashland" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Brooklyn-creamery.png"
                                onClick={() => window.open("https://www.thebrooklyncreamery.com/", "_blank")} alt="Brooklyn-creamery" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/DishTV.png" onClick={() => window.open("https://www.dishtv.in/", "_blank")}
                                alt="DishTV" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/happy-socks.png" onClick={() => window.open("https://www.happysocks.com/gl/", "_blank")}
                                alt="happy-socks" className="img-fluid" />
                        </div>

                        <div className="img-logo-icon">
                            <img src="/assets/images/Final Logos 90 x 90/Passion-indulge.png" onClick={() => window.open("https://passionindulge.com/", "_blank")}
                                alt="Passion" className="img-fluid" />
                        </div>
                        <div className="img-logo-icon">
                            <div className="view-all-section">
                                <Link to="/clientele">
                                    <img src="/assets/images/View-all.png" alt="View All" />
                                </Link>
                            </div>
                        </div>
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
                        <h1>We welcome all.</h1>
                    </div>
                    <div className="inner-fadeup-logo pro-team">
                        <span className="iconify" data-icon="dashicons:email-alt" id="mail-icon"></span>
                        <a href="mailto:info@digitaledgetech.in">careers@digitaledgetech.in</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
