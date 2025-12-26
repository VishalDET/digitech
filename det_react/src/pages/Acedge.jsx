import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Acedge.css';

const Acedge = () => {
    const [isYearly, setIsYearly] = useState(false);
    const animatedRefs = useRef([]);

    const monthlyPrices = ['999', '1999', '3599'];
    const yearlyPrices = ['9999', '19999', '35999'];
    const currentPrices = isYearly ? yearlyPrices : monthlyPrices;
    const period = isYearly ? 'year' : 'month';

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Determine which animation class to add based on the element or a data attribute
                    if (entry.target.classList.contains('benefit') || entry.target.classList.contains('card-demo')) {
                        entry.target.classList.add('animated-left');
                    } else if (entry.target.classList.contains('image-right')) {
                        entry.target.classList.add('animated-right');
                    } else {
                        entry.target.classList.add('animated-up');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="acedge-page">
            <header className="header">
                <div className="page-title">
                    <div className="container">
                        <h2>ACedge</h2>
                    </div>
                </div>
            </header>

            <div className="row card-intro mx-auto py-3 px-2 mb-5 animate-on-scroll">
                <div className="col-12 col-md-7 text-center justify-content-center align-content-center">
                    <h1>Bring the 360<sup>°</sup> Control<br />in your Business <br />Finance</h1>
                    <p className="subtitle text-white-50">Transform your business with ACEDGE — A smart, scalable software solution designed to boost productivity, streamline operations, and enhance collaboration. With the video</p>
                </div>
                <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                    <img src="/assets/images/card-images/dash-design.png" className="image-right img-fluid m-auto animate-on-scroll" alt="ACedge Dashboard" />
                </div>
            </div>

            <div className="container mb-5 animate-on-scroll">
                <h1>Discover the Benefits<br />in your Financial<br />Control</h1>
                <p className="subtitle">Explore the advantages that ACedge has to offer<br />in the world of personal finance</p>

                <div className="benefits">
                    <div className="benefit animate-on-scroll">
                        <div className="icon">📊</div>
                        <div className="benefit-title">Sales / Purchase Reports</div>
                        <p className="benefit-description">
                            Creating Realistic and Personalized Sales and Purchase Reports with ACedge: Tailored to Your Financial Goals and Needs.
                        </p>
                    </div>

                    <div className="benefit highlighted animate-on-scroll">
                        <div className="icon">💳</div>
                        <div className="benefit-title">Employee Management</div>
                        <p className="benefit-description">Effectively Manage Employee Performance and Payroll with ACedge: Streamline Operations and Avoid Extra Costs.</p>
                    </div>

                    <div className="benefit animate-on-scroll">
                        <div className="icon">📁</div>
                        <div className="benefit-title">Inventory Managment</div>
                        <p className="benefit-description">Optimize Inventory Management with ACedge: Control Stock Levels, stock transfer and Minimize Costs</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="phone-mockup col-12 col-md-6 animate-on-scroll">
                        <div className="phone-screen">
                            <Slider {...settings}>
                                <div><img src="/assets/images/card-images/best-seller.png" alt="Slide 1" /></div>
                                <div><img src="/assets/images/card-images/dashboards2-02.png" alt="Slide 2" /></div>
                                <div><img src="/assets/images/card-images/purchase.png" alt="Slide 3" /></div>
                                <div><img src="/assets/images/card-images/popular -products-06.png" alt="Slide 4" /></div>
                                <div><img src="/assets/images/card-images/dashboards2-02.png" alt="Slide 5" /></div>
                                <div><img src="/assets/images/card-images/Challan-03.png" alt="Slide 6" /></div>
                            </Slider>
                        </div>
                    </div>
                    <div className="content text-left col-12 col-md-6 animate-on-scroll">
                        <h2>
                            Discover how <b>ACedge</b> can revolutionize your billing and inventory management
                        </h2>
                        <p>From creating budgets to detailed expense tracking.</p>
                        <ul>
                            <li><span className="check-mark">&#10004; &nbsp;</span> Easy to use UI</li>
                            <li><span className="check-mark">&#10004; &nbsp;</span> Inventory Track</li>
                            <li><span className="check-mark">&#10004; &nbsp;</span> Debit and Credit Note</li>
                            <li><span className="check-mark">&#10004; &nbsp;</span> Delivery Challan</li>
                            <li><span className="check-mark">&#10004; &nbsp;</span> Customer Management</li>
                            <li><span className="check-mark">&#10004; &nbsp;</span> Invoicing</li>
                            <li><span className="check-mark">&#10004; &nbsp;</span> Reports</li>
                            <li><span className="check-mark">&#10004; &nbsp;</span> Human resource management</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container my-5 animate-on-scroll">
                <h2 className="mb-4 font-bigger">Choose the <b>Perfect Plan</b> <br />that suits your Business</h2>
                <div className="text-center mb-4">
                    <div className="toggle-container">
                        <button
                            className={`btn toggle-btn ${!isYearly ? 'active' : ''}`}
                            onClick={() => setIsYearly(false)}
                        >
                            Monthly
                        </button>
                        <button
                            className={`btn toggle-btn position-relative ${isYearly ? 'active' : ''}`}
                            onClick={() => setIsYearly(true)}
                        >
                            Yearly
                            <span className="badge bg-green ms-2 position-absolute" style={{ top: '-10px', right: '-20px' }}>-30%</span>
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 animate-on-scroll">
                            <div className="card-header">
                                <h2 className="card-title text-center">StartUp</h2>
                            </div>
                            <div className="card-body">
                                <p className="card-text text-muted">suitable for business with limited resources</p>
                                <h2 className="mb-0">₹<span className="price">{currentPrices[0]}</span><small className="text-muted">/<span className="period">{period}</span></small></h2>
                                <p className="text-center text-white-50 mt-0 gst">* excluding GST</p>
                                <ul className="list-unstyled">
                                    <li><i className="bi bi-check-circle feature-icon"></i> Unlimited transactions</li>
                                    <li><i className="bi bi-check-circle feature-icon"></i> Basic Technical Support (Email)</li>
                                    <li><i className="bi bi-check-circle feature-icon"></i> Instructional advisor</li>
                                </ul>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <a href="#" className="plans-contact">
                                    <img src="https://img.icons8.com/?size=100&id=Ib9FADThtmSf&format=png&color=ffffff" width="30" alt="Contact Sales" />
                                    <span>Contact Sales</span>
                                </a>
                                <a href="tel:+91 9082678198" className="plans-contact">
                                    <img src="https://img.icons8.com/?size=100&id=jShwZ2RCyPSO&format=png&color=FFFFFF" width="30" alt="Call Now" />
                                    <span>Call Now</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100 highlight animate-on-scroll">
                            <div className="card-header">
                                <h2 className="card-title text-center">MSME Business</h2>
                            </div>
                            <div className="card-body">
                                <p className="card-text text-muted">best choice for MSME businesses</p>
                                <h2 className="mb-0">₹<span className="price">{currentPrices[1]}</span><small className="text-muted">/<span className="period">{period}</span></small></h2>
                                <p className="text-center text-white-50 mt-0 gst">* excluding GST</p>
                                <ul className="list-unstyled">
                                    <li><i className="bi bi-check-circle feature-icon"></i> Unlimited transactions</li>
                                    <li><i className="bi bi-check-circle feature-icon"></i> Basic Technical Support (Email)</li>
                                    <li><i className="bi bi-check-circle feature-icon"></i> Instructional advisor</li>
                                </ul>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <a href="#" className="plans-contact">
                                    <img src="https://img.icons8.com/?size=100&id=Ib9FADThtmSf&format=png&color=ffffff" width="30" alt="Contact Sales" />
                                    <span>Contact Sales</span>
                                </a>
                                <a href="tel:+91 9082678198" className="plans-contact">
                                    <img src="https://img.icons8.com/?size=100&id=jShwZ2RCyPSO&format=png&color=FFFFFF" width="30" alt="Call Now" />
                                    <span>Call Now</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100 animate-on-scroll">
                            <div className="card-header">
                                <h2 className="card-title text-center">Established Business</h2>
                            </div>
                            <div className="card-body">
                                <p className="card-text text-muted">for large businesses with multiple franchise or store</p>
                                <h2 className="mb-0">₹<span className="price">{currentPrices[2]}</span><small className="text-muted">/<span className="period">{period}</span></small></h2>
                                <p className="text-center text-white-50 mt-0 gst">* excluding GST</p>
                                <ul className="list-unstyled">
                                    <li><i className="bi bi-check-circle feature-icon"></i> Unlimited transactions</li>
                                    <li><i className="bi bi-check-circle feature-icon"></i> Basic Technical Support (Email)</li>
                                    <li><i className="bi bi-check-circle feature-icon"></i> Instructional advisor</li>
                                </ul>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <a href="#" className="plans-contact">
                                    <img src="https://img.icons8.com/?size=100&id=Ib9FADThtmSf&format=png&color=ffffff" width="30" alt="Contact Sales" />
                                    <span>Contact Sales</span>
                                </a>
                                <a href="tel:+91 9082678198" className="plans-contact">
                                    <img src="https://img.icons8.com/?size=100&id=jShwZ2RCyPSO&format=png&color=FFFFFF" width="30" alt="Call Now" />
                                    <span>Call Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card col-12 col-md-10 mx-auto my-5 text-center card-demo animate-on-scroll">
                <div className="card-body m-0">
                    <h2 className="mb-3">Integrate <b>ACedge</b> with your<br />business for seamless operations</h2>
                    <p className="mb-3">Get free daily financial reports and useful product insights from ACedge, and boost your sales and inventory management</p>
                    <a href="#" className="btn btn-outline-light"><b>Book A Demo →</b></a>
                </div>
                <div className="align-bottom card-footer">
                    Have Query? <b><i className="fa-solid fa-phone-volume"></i> Call Now</b>
                </div>
            </div>
        </div>
    );
};

export default Acedge;
