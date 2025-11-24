import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <>
            <header className="header">
                <div className="headlines">
                    <h1>
                        Delivering:<br />
                        <span className="typewrite" data-period="2000"
                            data-type='[ "End to end Solutions","Successful Campaign", "ROI focused results"]'></span>
                        <span className="wrap"></span>
                    </h1>
                </div>
            </header>
            <section className="page-header">
                <div className="post-sticky wow fadeIn">
                    <figure className="post-image"><img src="/assets/images/Service Banner.jpg" alt="Image" loading="lazy" /></figure>
                </div>
            </section>
            <div className="px-0 px-md-3 d-md-block">
                <div className="col-12 pt-0">
                    <div className="container">
                        <div className="row mt-3 mt-md-0">
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
        </>
    );
};

export default Service;
