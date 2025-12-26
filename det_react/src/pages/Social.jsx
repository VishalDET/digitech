import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Social.css';

const Social = () => {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({
                duration: 1000,
                once: true,
            });
            window.AOS.refresh();
        }
    }, []);

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
            <section className="py-7 expertise-section bg-dot-pattern">
                <div className="container">
                    <div className="text-center mb-5" data-aos="fade-down">
                        <h6 className="text-yellow fw-bold text-uppercase ls-wide mb-3">Our Expertise</h6>
                        <h2 className="fw-bold display-5 mb-3">Professional Social Strategies</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                            We combine data-driven insights with creative excellence to deliver results that matter.
                        </p>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: "fa-chart-line", title: "Analytics", desc: "Deep diving into data to understand patterns and optimize performance for maximum ROI." },
                            { icon: "fa-bullhorn", title: "Campaign Management", desc: "Executing end-to-end campaigns that capture attention and drive specific business outcomes." },
                            { icon: "fa-users", title: "Audience Targeting", desc: "Reaching the right people at the right time with highly segmented and personalized messaging." }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 150}>
                                <div className="card h-100 border-0 expertise-card p-4 rounded-5">
                                    <div className="card-body py-4">
                                        <div className="expertise-icon-wrapper shadow-sm text-warning">
                                            <i className={`fas ${item.icon} fa-2x`}></i>
                                        </div>
                                        <h3 className="h4 fw-bold mb-3">{item.title}</h3>
                                        <p className="text-muted mb-0 lh-lg">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Multi-Platform Approach 
            <section className="py-7 bg-light">
                <div className="container">
                    <div className="mb-5 text-center" data-aos="fade-down">
                        <h6 className="text-yellow fw-bold text-uppercase ls-wide mb-3">Channels We Master</h6>
                        <h2 className="fw-bold display-5 mb-3">Our Multi-Platform Approach</h2>
                        <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>Comprehensive strategies tailored for every major digital network.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: "fab fa-facebook", color: "#1877f2", title: "Facebook Marketing", desc: "Connect with your audience through targeted ads, compelling content. Enhance your digital presence.", accent: "accent-facebook" },
                            { icon: "fab fa-instagram", color: "#e4405f", title: "Instagram Marketing", desc: "Grow your brand with eye-catching content, influencer collaborations, and engaging Stories & Reels.", accent: "accent-instagram" },
                            { icon: "fa-brands fa-google-ads", color: "#fbbc05", title: "Google Ads Marketing", desc: "Catalyze conversations and boost brand visibility by deploying trending topics.", accent: "accent-google-ads" },
                            { icon: "fab fa-linkedin", color: "#0077b5", title: "LinkedIn Marketing", desc: "Drive B2B leads and establish thought leadership through our expert LinkedIn strategies.", accent: "accent-linkedin" },
                            { icon: "fas fa-envelope", color: "#198754", title: "Email Marketing", desc: "Boost conversions and nurture leads with tailored campaigns and automation tools.", accent: "accent-email" },
                            { icon: "fab fa-google", color: "#4285f4", title: "Google My Business", desc: "Boost your local presence and attract customers with optimized listings.", accent: "accent-google-my-business" }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-2" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className={`card h-100 border-0 platform-card-new shadow-sm ${item.accent}`}>
                                    <div className="card-body p-2 text-center d-flex flex-column align-items-center">
                                        <div className="platform-icon-box" style={{ color: item.color }}>
                                            <i className={`${item.icon}`}></i>
                                        </div>
                                        <h4 className="card-title fw-bold mb-3">{item.title}</h4>
                                        <p className="card-text text-muted flex-grow-1 px-2">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>*/}

            {/* PPC Section */}
            <section className="py-7 ppc-section-new position-relative overflow-hidden">
                <div className="container position-relative z-2">
                    <div className="text-center mb-5" data-aos="fade-down">
                        <h6 className="text-warning fw-bold text-uppercase ls-wide mb-3">Paid Advertising</h6>
                        <h2 className="fw-bold display-5 mb-3">Supercharge Your Reach with PPC</h2>
                        <p className="lead opacity-75 mx-auto" style={{ maxWidth: '700px' }}>Maximize ROI with data-driven paid advertising across all major platforms.</p>
                    </div>
                    <div className="row g-4 mb-5">
                        {[
                            { icon: "fa-bullseye", title: "Precision Targeting", desc: "Reach your ideal audience with pinpoint accuracy using demographic data." },
                            { icon: "fa-chart-line", title: "Performance Tracking", desc: "Monitor and optimize campaigns in real-time with granular analytics." },
                            { icon: "fa-indian-rupee-sign", title: "Budget Control", desc: "Manage your budget effectively for optimal ROI without overspending." },
                            { icon: "fa-rocket", title: "Rapid Results", desc: "Immediate impact driving qualified traffic and high-value leads." }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={index * 100}>
                                <div className="card h-100 ppc-glass-card border-0 text-center">
                                    <div className="card-body p-2">
                                        <div className="ppc-icon">
                                            <i className={`fas ${item.icon} fa-3x`}></i>
                                        </div>
                                        <h5 className="fw-bold mb-3 text-white">{item.title}</h5>
                                        <p className="small mb-0 opacity-75 lh-base">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Platform Icons */}
                    <div className="text-center mt-5">
                        <h3 className="h5 mb-4 opacity-75 fw-normal">Platforms we dominate with PPC</h3>
                        <div className="d-flex justify-content-center gap-3 flex-wrap g-3">
                            {['facebook', 'instagram', 'linkedin', 'x-twitter', 'pinterest', 'google'].map((icon, i) => (
                                <div key={i} className="ppc-platform-pill mx-2" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <i className={`fab fa-${icon} text-white opacity-75`}></i>
                                    <span className="mx-2 small text-capitalize">{icon.replace('-', ' ')}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Background Decor */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(var(--primary-gold) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </section>


            {/* CTA Section 
            <section id="contact" className="py-6 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-sm rounded-5 overflow-hidden">
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
            </section>*/}

            <section id="contact" className="social-cta-section">
                <div className="container">
                    <div className="social-cta-card animate-on-scroll" data-aos="fade-up">
                        <div className="social-cta-content">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <h2 className="mb-4">Ready to Get <span className="text-warning">Socialized?</span></h2>
                                    <p className="lead mb-4">
                                        Join hundreds of businesses that have boosted their social media presence with our
                                        <Link to="/contact" className="social-contact-link ms-2">
                                            Social Media Marketing Team <i className="fa-solid fa-up-right-from-square ms-1"></i>
                                        </Link>
                                    </p>
                                </div>
                                <div className="col-lg-4 text-lg-end">
                                    <Link to="/contact" className="btn-modern-cta">
                                        Partner With Us
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
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
