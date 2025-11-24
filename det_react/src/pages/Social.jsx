import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Social.css';

const Social = () => {
    useEffect(() => {
        document.body.classList.add('social-page');
        return () => {
            document.body.classList.remove('social-page');
        };
    }, []);

    return (
        <div className="social-page">
            <section id="home" className="hero">
                <div className="container">
                    <div className="row align-items-center justify-content-between py-5">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                            <h1 className="display-4 mb-4">Boost your <strong>Social Media</strong> presence.</h1>
                            <p className="lead mb-4">Elevate your brand with our top-tier social media marketing experts and innovative strategies. Maximize your reach and engagement with our proven techniques.</p>
                            <a href="#" className="btn btn-light btn-lg" data-aos="fade-up" data-aos-delay="200">Get Started</a>
                        </div>
                        <div className="col-lg-6 text-center" data-aos="fade-left" data-aos-duration="1000">
                            <img src="/assets/images/DET_ social media.png" alt="Digital Edge Social Hero Banner" className="img-fluid float-animation" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="py-5">
                <div className="container">
                    <h2 className="text-start mb-5 font-weight-bold">Our Expertise</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="text-center">
                                <i className="fas fa-chart-line feature-icon text-black"></i>
                                <h3>Analytics</h3>
                                <p>Getting insights with our powerful professional team.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="text-center">
                                <i className="fas fa-bullhorn feature-icon text-black"></i>
                                <h3>Campaign Management</h3>
                                <p>Creating and managing effective social media campaigns.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="text-center">
                                <i className="fas fa-users feature-icon text-black"></i>
                                <h3>Audience Targeting</h3>
                                <p>Reach your ideal audience with precision targeting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-start mb-5 font-weight-bold" data-aos="fade-up">Our Multi-Platform Approach</h2>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 flex-wrap d-none d-md-flex">
                        <div className="col" data-aos="fade-up" data-aos-delay="100">
                            <div className="card platform-card h-100 bg-facebook">
                                <div className="card-body text-center">
                                    <div>
                                        <i className="fab fa-facebook platform-icon text-primary"></i>
                                        <h5 className="card-title">Facebook Marketing</h5>
                                        <p className="card-text text-dark">Connect with your audience through targeted ads, compelling content. Enhance your digital presence with our expert services, and together, we’ll elevate your brand.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" data-aos="fade-up" data-aos-delay="200">
                            <div className="card platform-card h-100 bg-instagram">
                                <div className="card-body text-center">
                                    <div>
                                        <i className="fab fa-instagram platform-icon text-danger"></i>
                                        <h5 className="card-title">Instagram Marketing</h5>
                                        <p className="card-text text-dark">Our Instagram marketing strategies can help your brand grow by providing eye-catching content, influencer collaborations, and engaging Instagram Stories, Reels.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" data-aos="fade-up" data-aos-delay="300">
                            <div className="card platform-card h-100 bg-x">
                                <div className="card-body text-center">
                                    <div>
                                        <i className="fa-brands fa-x-twitter platform-icon"></i>
                                        <h5 className="card-title">Twitter <i className="fa-brands fa-x-twitter"></i> Marketing</h5>
                                        <p className="card-text text-dark">Catalyze conversations and boost brand visibility by deploying trending topics ,  in which we can help you connect with your customers like never before.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" data-aos="fade-up" data-aos-delay="400">
                            <div className="card platform-card h-100 bg-linkedin">
                                <div className="card-body text-center">
                                    <div>
                                        <i className="fab fa-linkedin platform-icon text-primary"></i>
                                        <h5 className="card-title">LinkedIn Marketing</h5>
                                        <p className="card-text text-dark">Drive B2B leads and establish thought leadership through our expert LinkedIn Marketing Experts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" data-aos="fade-up" data-aos-delay="500">
                            <div className="card platform-card h-100 bg-email">
                                <div className="card-body text-center">
                                    <div>
                                        <i className="fas fa-envelope platform-icon text-success"></i>
                                        <h5 className="card-title">Email Marketing</h5>
                                        <p className="card-text text-dark">Boost conversions and nurture leads with our email marketing agency's tailored campaigns and automation tools.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" data-aos="fade-up" data-aos-delay="400">
                            <div className="card platform-card h-100 bg-google-my-business">
                                <div className="card-body text-center">
                                    <div>
                                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-my-business-icon.svg" className="platform-icon" width="60px" alt="Google My Business" />
                                        <h5 className="card-title">Google My Business</h5>
                                        <p className="card-text">We'll help to Boost your local presence and attract customers with optimized listings and engaging updates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ppc" className="ppc-bg py-5">
                <div className="container">
                    <h2 className="text-center mb-5 font-weight-bold" data-aos="fade-up">Supercharge Your Reach with PPC</h2>

                    <div className="row g-4 d-none d-md-flex">
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div className="card ppc-card">
                                <div className="card-body text-center">
                                    <i className="fas fa-bullseye ppc-icon"></i>
                                    <h5 className="card-title">Precision Targeting</h5>
                                    <p className="card-text">Reach your ideal audience with pinpoint accuracy using advanced targeting options across social platforms.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                            <div className="card ppc-card">
                                <div className="card-body text-center">
                                    <i className="fas fa-chart-line ppc-icon"></i>
                                    <h5 className="card-title">Performance Tracking</h5>
                                    <p className="card-text">Monitor and optimize your campaigns in real-time with comprehensive analytics and reporting.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                            <div className="card ppc-card">
                                <div className="card-body text-center">
                                    <i className="fa-solid fa-indian-rupee-sign ppc-icon"></i>
                                    <h5 className="card-title">Budget Control</h5>
                                    <p className="card-text">Set and manage your advertising budget effectively, ensuring optimal ROI for your PPC campaigns.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                            <div className="card ppc-card">
                                <div className="card-body text-center">
                                    <i className="fas fa-rocket ppc-icon"></i>
                                    <h5 className="card-title">Rapid Results</h5>
                                    <p className="card-text">See immediate impact with PPC ads, driving traffic, leads, and conversions from day one.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <h3 className="mb-4" data-aos="fade-up">Our PPC Expertise Spans Across Platforms</h3>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="d-flex justify-content-around flex-wrap">
                                    <i className="fab fa-facebook fa-3x m-3" title="Facebook Ads" data-aos="zoom-in" data-aos-delay="100"></i>
                                    <i className="fab fa-instagram fa-3x m-3" title="Instagram Ads" data-aos="zoom-in" data-aos-delay="200"></i>
                                    <i className="fab fa-linkedin fa-3x m-3" title="LinkedIn Ads" data-aos="zoom-in" data-aos-delay="300"></i>
                                    <i className="fa-brands fa-x-twitter fa-3x m-3" title="Twitter Ads" data-aos="zoom-in" data-aos-delay="400"></i>
                                    <i className="fab fa-pinterest fa-3x m-3" title="Pinterest Ads" data-aos="zoom-in" data-aos-delay="500"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="reviews" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5" data-aos="fade-up">What Our Clients Say</h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4" data-aos="fade-right" data-aos-delay="300">
                            <div className="card review-card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <img src="https://img.icons8.com/?size=100&id=kpbkCrY93ltE&format=png&color=000000" alt="Client 1" className="review-avatar me-3" />
                                        <div className="">
                                            <div>
                                                <h5 className="card-title mb-0">Mr Kabir Das</h5>
                                                <p className="review-company mb-0">Poetry Center</p>
                                            </div>
                                            <div className="review-stars mb-2">
                                                <span>★★★★★</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="card-text">"DigitalEdge transformed our online presence. Our engagement rates have skyrocketed, and we've seen a significant increase in qualified leads. Their team is professional, creative, and always delivers results."</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="card review-card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <img src="https://img.icons8.com/?size=100&id=kpbkCrY93ltE&format=png&color=000000" alt="Client 1" className="review-avatar me-3" />
                                        <div className="">
                                            <div>
                                                <h5 className="card-title mb-0">Mr Kabir Das</h5>
                                                <p className="review-company mb-0">Poetry Center</p>
                                            </div>
                                            <div className="review-stars mb-2">
                                                <span>★★★★★</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="card-text">"DigitalEdge transformed our online presence. Our engagement rates have skyrocketed, and we've seen a significant increase in qualified leads. Their team is professional, creative, and always delivers results."</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-left" data-aos-delay="300">
                            <div className="card review-card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <img src="https://img.icons8.com/?size=100&id=kpbkCrY93ltE&format=png&color=000000" alt="Client 1" className="review-avatar me-3" />
                                        <div className="">
                                            <div>
                                                <h5 className="card-title mb-0">Mr Kabir Das</h5>
                                                <p className="review-company mb-0">Poetry Center</p>
                                            </div>
                                            <div className="review-stars mb-2">
                                                <span>★★★★★</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="card-text">"DigitalEdge transformed our online presence. Our engagement rates have skyrocketed, and we've seen a significant increase in qualified leads. Their team is professional, creative, and always delivers results."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="partners" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5" data-aos="fade-up">Our Trusted Partners</h2>
                    <div className="partners-container" data-aos="fade-up" data-aos-delay="100">
                        <div className="partners-row row-1">
                            <img src="https://dr-com.in/images/logos/logo-bsnl.svg" alt="Partner 1" />
                            <img src="https://dr-com.in/images/logos/logo-bsnl.svg" alt="Partner 2" />
                            <img src="https://static.wixstatic.com/media/99f9ad_0292639742de4d3bacf5abfb0f8b6f98~mv2.png/v1/fill/w_95,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/99f9ad_0292639742de4d3bacf5abfb0f8b6f98~mv2.png" alt="Partner 3" />
                            <img src="https://www.synfo.shop/assets/images/logo/logo.png" alt="Partner 4" />
                            <img src="https://www.digitaledgetech.in/images/Final%20Logos%2090%20x%2090/Killer-jeans.png" alt="Partner 5" />
                            <img src="https://www.digitaledgetech.in/images/Final%20Logos%2090%20x%2090/kkcl.png" alt="Partner 1" />
                            <img src="https://mangalfincorp.com/img/logo/logo.png" alt="Partner 2" />
                            <img src="https://www.digitaledgetech.in/images/Final%20Logos%2090%20x%2090/Reliance.png" alt="Partner 3" />
                            <img src="https://mangalbuildhome.com/wp-content/uploads/2020/08/logo.png" alt="Partner 4" />
                            <img src="https://www.digitaledgetech.in/images/Final%20Logos%2090%20x%2090/Yes-bank.png" alt="Partner 5" />
                        </div>
                    </div>
                    <div className="partners-container" data-aos="fade-up" data-aos-delay="200">
                        <div className="partners-row row-2">
                            <img src="https://www.digitaledgetech.in/images/Final%20Logos%2090%20x%2090/Sahara-star.png" alt="Partner 6" />
                            <img src="https://mangalbuildhome.com/wp-content/uploads/2020/08/logo.png" alt="Partner 7" />
                            <img src="https://www.digitaledgetech.in/images/Final%20Logos%2090%20x%2090/satco.png" alt="Partner 8" />
                            <img src="https://static.wixstatic.com/media/99f9ad_0292639742de4d3bacf5abfb0f8b6f98~mv2.png/v1/fill/w_95,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/99f9ad_0292639742de4d3bacf5abfb0f8b6f98~mv2.png" alt="Partner 9" />
                            <img src="https://www.digitaledgetech.in/images/Final%20Logos%2090%20x%2090/Integriti.png" alt="Partner 10" />
                            <img src="https://www.digitaledgetech.in/images/Final%20Logos%2090%20x%2090/happy-socks.png" alt="Partner 6" />
                            <img src="https://mangalfincorp.com/img/logo/logo.png" alt="Partner 7" />
                            <img src="https://www.digitaledgetech.in/images/Final%20Logos%2090%20x%2090/DishTV.png" alt="Partner 8" />
                            <img src="https://www.digitaledgetech.in/images/Final%20Logos%2090%20x%2090/Brooklyn-creamery.png" alt="Partner 9" />
                            <img src="https://www.digitaledgetech.in/images/Final%20Logos%2090%20x%2090/Baskin-and-robbins.png" alt="Partner 10" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="cta bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-start" data-aos="fade-up">
                            <h2 className="mb-4 font-weight-bold">Ready to Get Socialized?</h2>
                            <p className="lead mb-4">Join hundreds of businesses that have boosted their social media presence with our <Link to="/contact" className="social-contact text-dark">Social Media Marketing  <i className="fa-solid fa-up-right-from-square"></i></Link> team.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Social;
