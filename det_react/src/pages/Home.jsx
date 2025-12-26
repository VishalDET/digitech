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

            <section className="services-section">
                <div className="container">
                    <div className="titles">
                        <h6>OUR SERVICES</h6>
                        <p>We are Master of</p>
                    </div>
                    <div className="services-grid">
                        {/* Software Development */}
                        <div className="service-card">
                            <div className="service-icon-box">
                                <i className="fas fa-laptop-code service-icon"></i>
                            </div>
                            <h3 className="service-title">Software Development</h3>
                            <p className="service-description">We offer tailored software solutions to meet your unique business needs, ensuring efficiency and business logic. We specialize in agile methodologies.</p>
                            <Link to="/software" className="service-link">

                                Read More <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>

                        {/* ERP */}
                        <div className="service-card">
                            <div className="service-icon-box">
                                <i className="fas fa-chart-line service-icon"></i>
                            </div>
                            <h3 className="service-title">Enterprise Resource Planning</h3>
                            <p className="service-description">Utilize your staff's skills, hardware, and software to increase productivity and simplify daily processes with our ERP solutions.</p>
                            <Link to="/erp" className="service-link">
                                Read More <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>

                        {/* Web Development */}
                        <div className="service-card">
                            <div className="service-icon-box">
                                <i className="fas fa-globe service-icon"></i>
                            </div>
                            <h3 className="service-title">Web Development</h3>
                            <p className="service-description">We create responsive and engaging websites that enhance user experience and drive conversions.</p>
                            <Link to="/web" className="service-link">
                                Read More <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>

                        {/* Mobile App */}
                        <div className="service-card">
                            <div className="service-icon-box">
                                <i className="fas fa-mobile-alt service-icon"></i>
                            </div>
                            <h3 className="service-title">Mobile App Development</h3>
                            <p className="service-description">We create innovative mobile applications (Android / iOS) that provide seamless user experiences and drive engagement.</p>
                            <Link to="/mobile" className="service-link">
                                Read More <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>

                        {/* Creative Design */}
                        <div className="service-card">
                            <div className="service-icon-box">
                                <i className="fas fa-paint-brush service-icon"></i>
                            </div>
                            <h3 className="service-title">Interactive & Creative Designs</h3>
                            <p className="service-description">Enhance your business with interactive and creative designs that adapt to and reflect your brand.</p>
                            <Link to="/creative" className="service-link">
                                Read More <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>

                        {/* Social Media */}
                        <div className="service-card">
                            <div className="service-icon-box">
                                <i className="fas fa-share-alt service-icon"></i>
                            </div>
                            <h3 className="service-title">Social Media Management</h3>
                            <p className="service-description">Engage your brand with effective social media strategies provided by Digital Edge.</p>
                            <Link to="/social" className="service-link">
                                Read More <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image-wrapper">
                            <img src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?ga=GA1.1.945843794.1726646547&semt=ais_hybrid" alt="About Us" className="about-image" />
                        </div>
                        <div className="about-content">
                            <div className="titles">
                                <h6>ABOUT US</h6>
                                <p>What we have achieved</p>
                            </div>
                            <p className="about-description">
                                With over a decade of experience, we have delivered exceptional digital solutions across various industries. Our commitment to innovation and quality has helped businesses grow and succeed in the digital landscape.
                            </p>
                            <div className="about-stats-grid items-center">
                                <div className="stat-card">
                                    <span className="stat-number">11+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-number">20+</span>
                                    <span className="stat-label">Ecommerce Sites</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-number">35+</span>
                                    <span className="stat-label">Websites Built</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-number">20+</span>
                                    <span className="stat-label">Mobile Apps</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-number">10+</span>
                                    <span className="stat-label">ERP Software</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Social Campaigns</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-number">4.7/5</span>
                                    <span className="stat-label">Rated on Google</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="products-section">
                <div className="container">
                    <div className="titles">
                        <h6>OUR PRODUCTS</h6>
                        <h2>We Build Solutions</h2>
                    </div>
                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image-wrapper">
                                <i className="fas fa-file-invoice-dollar"></i>
                            </div>
                            <div className="product-content">
                                <h3 className="product-title">Acedge</h3>
                                <p className="product-description">A modern billing and inventory system designed to streamline your business operations with efficiency and precision.</p>
                                <Link to="/acedge" className="product-link">
                                    Learn More <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image-wrapper">
                                <i className="fas fa-server"></i>
                            </div>
                            <div className="product-content">
                                <h3 className="product-title">Niyantra</h3>
                                <p className="product-description">Comprehensive IT assets management system to track, monitor, and optimize your organization's hardware and software resources.</p>
                                <a href="https://niyantra.digitaledgetech.in" target="_blank" className="product-link">
                                    Learn More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="works-section">
                <div className="container">
                    <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>


                        <div className="titles">
                            <h6>Projects</h6>
                            <p>Explore our projects</p>
                            {/* <h2>We're constantly updating ourselves with the newest trends and technologies to boost your business.</h2> */}

                        </div>
                        <Link to="/service" className="btn-explore nowrap">
                            See all Services <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>

                    <div className="works-grid">
                        {/* Aminu */}
                        <div className="work-item large" onClick={() => window.open("https://aminu.life/", "_blank")}>
                            <img src="/assets/images/AMINU.jpg" alt="Aminu Skin Care" className="work-image" />
                            <div className="work-overlay">
                                <span className="work-category">eCommerce</span>
                                <h3 className="work-title">Aminu Skin Care</h3>
                                <div className="work-link-icon">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>

                        {/* Killer Store Locator */}
                        <div className="work-item medium" onClick={() => window.open("https://www.killerjeans.com/store-locator", "_blank")}>
                            <img src="/assets/images/Killer.jpg" alt="Killer Store Locator" className="work-image" />
                            <div className="work-overlay">
                                <span className="work-category">Dynamic Website</span>
                                <h3 className="work-title">Killer Store Locator</h3>
                                <div className="work-link-icon">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>

                        {/* Passion Indulge */}
                        <div className="work-item medium" onClick={() => window.open("https://passionindulge.com/", "_blank")}>
                            <img src="/assets/images/Passion Indulge.jpg" alt="Passion Indulge" className="work-image" />
                            <div className="work-overlay">
                                <span className="work-category">Beauty & Skin Care</span>
                                <h3 className="work-title">Passion Indulge</h3>
                                <div className="work-link-icon">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="process-section">
                <div className="container">
                    <div className="titles text-start mb-5" style={{ paddingRight: 0 }}>
                        <h6>HOW WE PROCESS</h6>
                        <p className="text-bold">Our Development Process</p>
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
