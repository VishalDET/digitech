import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Social.css';

const Social = () => {
    // useEffect removed

    return (
        <div className="social-page-wrapper">
            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center position-relative overflow-hidden">
                <div className="container position-relative z-2">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-white mb-5 mb-lg-0" data-aos="fade-right">
                            <h1 className="display-3 fw-bold mb-4">
                                Boost your <span className="text-warning fst-italic">Social Media</span> presence.
                            </h1>
                            <p className="lead mb-5 opacity-90">
                                Elevate your brand with our top-tier social media marketing experts and innovative strategies. Maximize your reach and engagement with our proven techniques.
                            </p>
                            <a href="#contact" className="btn btn-light btn-lg rounded-pill px-5 fw-bold shadow-sm hover-scale">
                                Get Started
                            </a>
                        </div>
                        <div className="col-lg-6 text-center" data-aos="fade-left">
                            <div className="hero-image-container">
                                <img
                                    src="/assets/images/DET_ social media.png"
                                    alt="Social Media Marketing"
                                    className="img-fluid float-animation"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background Shapes */}
                <div className="shape-circle shape-1"></div>
                <div className="shape-circle shape-2"></div>
            </section>

            {/* Expertise Section */}
            <section className="py-6 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold display-5 mb-3">Our Expertise</h2>
                        <div className="divider mx-auto bg-primary"></div>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: "fa-chart-line", title: "Analytics", desc: "Getting insights with our powerful professional team." },
                            { icon: "fa-bullhorn", title: "Campaign Management", desc: "Creating and managing effective social media campaigns." },
                            { icon: "fa-users", title: "Audience Targeting", desc: "Reach your ideal audience with precision targeting." }
                        ].map((item, index) => (
                            <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="card h-100 border-0 shadow-hover text-center p-4 rounded-4 bg-light-subtle">
                                    <div className="card-body">
                                        <div className="icon-box mb-4 mx-auto bg-white shadow-sm text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                                            <i className={`fas ${item.icon} fa-2x`}></i>
                                        </div>
                                        <h3 className="h4 fw-bold mb-3">{item.title}</h3>
                                        <p className="text-muted mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Multi-Platform Approach */}
            <section className="py-6 bg-light">
                <div className="container">
                    <div className="mb-5 text-center">
                        <h2 className="fw-bold display-5 mb-3">Our Multi-Platform Approach</h2>
                        <p className="text-muted lead">Comprehensive strategies for every major network.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: "fab fa-facebook", color: "text-primary", title: "Facebook Marketing", desc: "Connect with your audience through targeted ads, compelling content. Enhance your digital presence.", bgClass: "bg-facebook" },
                            { icon: "fab fa-instagram", color: "text-danger", title: "Instagram Marketing", desc: "Grow your brand with eye-catching content, influencer collaborations, and engaging Stories & Reels.", bgClass: "bg-instagram" },
                            { icon: "fa-brands fa-x-twitter", color: "text-dark", title: "Twitter Marketing", desc: "Catalyze conversations and boost brand visibility by deploying trending topics.", bgClass: "bg-x" },
                            { icon: "fab fa-linkedin", color: "text-primary", title: "LinkedIn Marketing", desc: "Drive B2B leads and establish thought leadership through our expert LinkedIn strategies.", bgClass: "bg-linkedin" },
                            { icon: "fas fa-envelope", color: "text-success", title: "Email Marketing", desc: "Boost conversions and nurture leads with tailored campaigns and automation tools.", bgClass: "bg-email" },
                            { icon: "fab fa-google", color: "text-primary", title: "Google My Business", desc: "Boost your local presence and attract customers with optimized listings.", bgClass: "bg-google" }
                        ].map((item, index) => (
                            <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className={`card h-100 border-0 shadow-sm hover-lift rounded-4 platform-card ${item.bgClass}`}>
                                    <div className="card-body p-4 text-center d-flex flex-column align-items-center">
                                        <i className={`${item.icon} fa-3x mb-4`}></i>
                                        <h4 className="card-title fw-bold mb-3">{item.title}</h4>
                                        <p className="card-text text-muted flex-grow-1">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PPC Section */}
            <section className="py-6 ppc-section text-white position-relative overflow-hidden">
                <div className="container position-relative z-2">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold display-5 mb-3">Supercharge Your Reach with PPC</h2>
                        <p className="lead opacity-90">Maximize ROI with data-driven paid advertising.</p>
                    </div>
                    <div className="row g-4 mb-5">
                        {[
                            { icon: "fa-bullseye", title: "Precision Targeting", desc: "Reach your ideal audience with pinpoint accuracy." },
                            { icon: "fa-chart-line", title: "Performance Tracking", desc: "Monitor and optimize campaigns in real-time." },
                            { icon: "fa-indian-rupee-sign", title: "Budget Control", desc: "Manage your budget effectively for optimal ROI." },
                            { icon: "fa-rocket", title: "Rapid Results", desc: "Immediate impact driving traffic and leads." }
                        ].map((item, index) => (
                            <div key={index} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="card h-100 bg-white bg-opacity-10 border-0 backdrop-blur text-white text-center p-3 rounded-4 hover-scale-sm">
                                    <div className="card-body">
                                        <div className="mb-3 text-warning">
                                            <i className={`fas ${item.icon} fa-3x`}></i>
                                        </div>
                                        <h5 className="fw-bold mb-2">{item.title}</h5>
                                        <p className="small mb-0 opacity-75">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Platform Icons */}
                    <div className="text-center mt-5">
                        <h3 className="h4 mb-4 opacity-90">Our PPC Expertise Spans Across Platforms</h3>
                        <div className="d-flex justify-content-center gap-4 flex-wrap">
                            {['fa-facebook', 'fa-instagram', 'fa-linkedin', 'fa-x-twitter', 'fa-pinterest'].map((icon, i) => (
                                <i key={i} className={`fab ${icon} fa-2x text-white opacity-75 hover-opacity-100 transition-base`} data-aos="zoom-in" data-aos-delay={i * 100}></i>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-6 bg-white">
                <div className="container">
                    <h2 className="text-center fw-bold display-5 mb-5">What Our Clients Say</h2>
                    <div className="row g-4 justify-content-center">
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="card h-100 border-0 shadow-sm rounded-4 bg-light p-4">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="flex-shrink-0">
                                            <div className="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '50px', height: '50px' }}>KD</div>
                                        </div>
                                        <div className="ms-3">
                                            <h5 className="mb-0 fw-bold">Mr Kabir Das</h5>
                                            <small className="text-muted">Poetry Center</small>
                                        </div>
                                        <div className="ms-auto text-warning">
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <p className="card-text text-muted fst-italic">"DigitalEdge transformed our online presence. Our engagement rates have skyrocketed, and we've seen a significant increase in qualified leads."</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-6 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg rounded-5 overflow-hidden">
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-md-8 p-5 bg-white">
                                            <h2 className="fw-bold mb-4">Ready to Get Socialized?</h2>
                                            <p className="lead text-muted mb-4">
                                                Join hundreds of businesses that have boosted their social media presence with our
                                                <Link to="/contact" className="text-decoration-none fw-bold text-primary mx-1">
                                                    Social Media Marketing <i className="fa-solid fa-arrow-right small"></i>
                                                </Link>
                                                team.
                                            </p>
                                            <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-5 shadow-sm">
                                                Contact Us Now
                                            </Link>
                                        </div>
                                        <div className="col-md-4 bg-primary d-none d-md-flex align-items-center justify-content-center p-4">
                                            <i className="fas fa-paper-plane fa-6x text-white opacity-50 rotate-12"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Social;
