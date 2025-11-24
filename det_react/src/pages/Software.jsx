import React from 'react';
import { Link } from 'react-router-dom';

const Software = () => {
    return (
        <>
            <header className="header">
                <div className="page-title">
                    <div className="container">
                        <h2>Software Development</h2>
                    </div>
                </div>
            </header>

            <section className="softwareheader">
                <div className="container">
                    <div className="innerSoftwareHeader">
                        <div className="contentSoftware">
                            <div className="software-para">
                                <p>
                                    Whether it's <Link to="/web">web</Link>, cloud, <Link to="/mobile">Mobile</Link>, or desktop applications,
                                    we cover all aspects of software development. Our primary goal is to provide innovative and intelligent solutions that give you a competitive edge. We transform outdated business processes into user-friendly,
                                    interactive software solutions that drive efficiency and enhance productivity.
                                </p>
                                <p>
                                    We believe in taking the long route, building trust by delivering robust technology solutions
                                    that stand out the best in the industry.
                                </p>
                                <p>
                                    We integrate with your current software solutions by simplifying any duplicate data entry
                                    tasks to free up time and concentrate on more important jobs.
                                </p>
                            </div>
                        </div>

                        <div className="imageSoftware">
                            <figure className="mb-0">
                                <img src="/assets/images/blog02.png" alt="Image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-detail softwareDetails">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-12">
                            <div className="softwareService">
                                <div className="softwareBox">
                                    <div className="borderBox">
                                        <div className="headingCircle">
                                            <h2>Standalone<br />Systems</h2>
                                        </div>
                                        <div className="softwareDisc">
                                            <p>
                                                Digital Edge Technologies thrives to help you run your business, build your exact
                                                requirements. From single applications to software services to backend modules -
                                                We can build your standalone software in a cost-effective modus operandi for all
                                                operating systems.
                                            </p>
                                            <span className="iconify" data-icon="ion:close-sharp"></span><br />
                                            <span className="iconify" data-icon="ion:close-sharp"></span>
                                        </div>

                                        <img src="/assets/images/Dots.png" alt="dots" className="dots" />
                                    </div>
                                </div>

                                <div className="softwareBox">
                                    <div className="borderBox">
                                        <div className="headingCircle">
                                            <h2>Web-Based<br />Systems</h2>
                                        </div>
                                        <div className="softwareDisc">
                                            <p>
                                                Having an experience of 8+ years in a wide range of niches, allows us to
                                                recommend the most appropriate web development strategies. As we all know, web applications are
                                                completely customizable, our front-end developers work closely with our UI/UX
                                                experts to make sure that your web application or website delivers its content
                                                quickly and flawlessly.
                                            </p>
                                            <span className="iconify" data-icon="ion:close-sharp"></span><br />
                                            <span className="iconify" data-icon="ion:close-sharp"></span>
                                        </div>
                                        <img src="/assets/images/Dots.png" alt="dots" className="dots" />
                                    </div>
                                </div>

                                <div className="softwareBox">
                                    <div className="borderBox">
                                        <div className="headingCircle">
                                            <h2>Database<br />Management</h2>
                                        </div>
                                        <div className="softwareDisc">
                                            <p>
                                                The advancements in technology have opened the floodgates for endless volumes of
                                                data to flow into the system. With this tremendous amount of data pouring in
                                                from diverse sources and in multiple formats, it becomes a critical task for
                                                organizations to store, process and manage this data. And even more so in
                                                today’s data driven world, where it has become the key to business success
                                            </p>
                                            <span className="iconify" data-icon="ion:close-sharp"></span><br />
                                            <span className="iconify" data-icon="ion:close-sharp"></span>
                                        </div>
                                        <img src="/assets/images/Dots.png" alt="dots" className="dots" />
                                    </div>
                                </div>

                                <div className="softwareBox">
                                    <div className="borderBox">
                                        <div className="headingCircle">
                                            <h2>Hardware<br />Integration</h2>
                                        </div>
                                        <div className="softwareDisc">
                                            <p>
                                                We bring together the component subsystems into one system and ensuring that the
                                                subsystems function together as a system. e.g. Barcode scanner, RFID receiver.
                                                If you need to process data from your specialist hardware – for example readings
                                                from a thermometer or measuring device, streaming video from a camera, or
                                                anything else – we’ll create software to enable this.
                                            </p>
                                            <span className="iconify" data-icon="ion:close-sharp"></span><br />
                                            <span className="iconify" data-icon="ion:close-sharp"></span>
                                        </div>
                                        <img src="/assets/images/Dots.png" alt="dots" className="dots" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="request-software-development" className="py-5 text-black">
                <div className="container">
                    <h2 className="text-start display-5 fw-bold mb-0 text-dark">Request for Custom Software Development</h2>

                    <p className="lead text-start mb-5 text-dark">
                        <Link to="/contact" className="text-yellow">Share your requirements with us</Link>, and our team will help you develop the perfect software tailored to your needs.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Software;
