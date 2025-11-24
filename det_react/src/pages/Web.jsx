import React from 'react';
import { Link } from 'react-router-dom';

const Web = () => {
    return (
        <>
            <header className="header">
                <div className="page-title">
                    <div className="container">
                        <h2 className="text-center">Web Development</h2>
                    </div>
                </div>
            </header>
            <section className="case-detail">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-12">
                            <div className="descContent">
                                <div className="doughnut"></div>
                                <h4>We believe in 3c's that are:</h4>
                                <h2 className="typewrite" data-period="2000" data-type='[ "Creativity", "Caliber", "Customized"]'>
                                </h2>
                                <p>
                                    In this new era, where the website is the face of your company, it is extremely important to
                                    stand apart from the competitive brands in the industry. Research suggests that 75% of
                                    consumers make judgments about a company, based on its website. And we often understand the
                                    value of the business and its online presence. <br />
                                    Let professional developers amplify your digital presence with tailored services and ongoing
                                    support.
                                </p>

                                <div className="descImage">
                                    <figure>
                                        <img src="/assets/images/Web Development-01.jpg" alt="Image" className="img-fluid" />
                                    </figure>
                                </div>
                                <div className="descImage2">
                                    <figure>
                                        <img src="/assets/images/light-bulb.jpg" alt="Image" className="img-fluid" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="more-info-section">
                <div className="container">
                    <div className="more-inner-content">
                        <div className="more-content moreLeft">
                            <p>
                                Digital Edge Technologies, with <span> more than 90 clients</span>, is a prominent website designing and
                                development company based in Mumbai and UK. We provide tailored web development services. Our
                                superheroes are updated with the latest features and advanced methodologies.
                            </p>
                            <div className="check-circle">
                                <div className="inner-check">
                                    <div className="inner-check-icon">
                                        <span className="iconify" data-icon="akar-icons:double-check"></span>
                                    </div>
                                    <div className="inner-check-points">
                                        <p>We deliver solutions within the expected budget and timeframe</p>
                                    </div>
                                </div>
                                <div className="inner-check">
                                    <div className="inner-check-icon">
                                        <span className="iconify" data-icon="akar-icons:double-check"></span>
                                    </div>
                                    <div className="inner-check-points">
                                        <p>The kickoff meeting, within 2 business days, sets the course for projects</p>
                                    </div>
                                </div>
                                <div className="inner-check">
                                    <div className="inner-check-icon">
                                        <span className="iconify" data-icon="akar-icons:double-check"></span>
                                    </div>
                                    <div className="inner-check-points">
                                        <p>A dedicated web development team working closely and only with you</p>
                                    </div>
                                </div>
                                <div className="inner-check">
                                    <div className="inner-check-icon">
                                        <span className="iconify" data-icon="akar-icons:double-check"></span>
                                    </div>
                                    <div className="inner-check-points">
                                        <p>We employ iterative and incremental development methodologies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="more-content moreRight">
                            <h3>We only perceive 3 things: </h3>
                            <div className="moreRight-things">
                                <div className="moreRight-img">
                                    <img src="/assets/images/workwebsite.png" alt="workwebsite" />
                                </div>
                                <div className="moreRightpara">
                                    <h6>YOUR WEBSITE SHOULD WORK </h6>
                                </div>
                            </div>
                            <div className="moreRight-things">
                                <div className="moreRight-img">
                                    <img src="/assets/images/performfast.png" alt="performfast" className="img-fluid" />
                                </div>
                                <div className="moreRightpara">
                                    <h6>YOUR WEBSITE SHOULD PERFORM FAST</h6>
                                </div>
                            </div>
                            <div className="moreRight-things">
                                <div className="moreRight-img">
                                    <img src="/assets/images/adaptive.png" alt="adaptive" className="img-fluid" />
                                </div>
                                <div className="moreRightpara">
                                    <h6>YOUR WEBSITE SHOULD BE ADAPTIVE</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hero-para">
                <div className="container">
                    <h2>THIS IS HOW OUR SUPERHEROES CONCLUDE THE PROJECT </h2>
                </div>
            </div>

            <section className="service_blocks">
                <div className="container">
                    <div className="service">
                        <figure>
                            <img src="/assets/images/webDesign.png" alt="img" className="img-fluid" />
                        </figure>
                        <h4>Website Design</h4>
                        <a href="#" className="sevice1" onClick={(e) => e.preventDefault()}>Read More</a>
                    </div>

                    <div className="service">
                        <figure>
                            <img src="/assets/images/webDevelopment.png" alt="img" className="img-fluid" />
                        </figure>
                        <h4>Website Development and Deployment</h4>
                        <a href="#" className="service2" onClick={(e) => e.preventDefault()}>Read More</a>
                    </div>

                    <div className="service">
                        <figure>
                            <img src="/assets/images/cms.png" alt="img" className="img-fluid" />
                        </figure>
                        <h4>Content Management System (CMS)</h4>
                        <a href="#" className="service3" onClick={(e) => e.preventDefault()}>Read More</a>
                    </div>

                    <div className="service">
                        <figure>
                            <img src="/assets/images/hosting.png" alt="img" className="img-fluid" />
                        </figure>
                        <h4>Hosting Solutions</h4>
                        <a href="#" className="service4" onClick={(e) => e.preventDefault()}>Read More</a>
                    </div>

                    <div className="service">
                        <figure>
                            <img src="/assets/images/domain.png" alt="img" className="img-fluid" />
                        </figure>
                        <h4>Domain Solutions</h4>
                        <a href="#" className="service5" onClick={(e) => e.preventDefault()}>Read More</a>
                    </div>
                </div>

                <div className="overlay"></div>
                <div className="service_details service_details1">
                    <div className="close">
                        <i className="fa fa-times"></i>
                    </div>
                    <h4>Website Design</h4>
                    <p>
                        Because what's web development without a good design? Our Graphic designer and Web Developer make sure
                        to create a unique design to make your website look the best.
                    </p>
                </div>

                <div className="service_details service_details2">
                    <div className="close">
                        <i className="fa fa-times"></i>
                    </div>
                    <h4>Website Development and Deployment</h4>
                    <p>
                        The developer codes and deploys what the website would look like, exactly. We do it by developing and
                        deploying websites by installing the application into server context and linking it with the domain..
                        ON-TIME!
                    </p>
                </div>

                <div className="service_details service_details3">
                    <div className="close">
                        <i className="fa fa-times"></i>
                    </div>
                    <h4>Content Management System (CMS)</h4>
                    <p>
                        Need a convenient platform that enables any authorized user to publish images and content easily? Yes,
                        you can create and modify your digital content using a common UI.
                    </p>
                </div>

                <div className="service_details service_details4">
                    <div className="close">
                        <i className="fa fa-times"></i>
                    </div>
                    <h4>Hosting Solutions</h4>
                    <p>
                        Rightly said, a website's success depends on the reliability of its hosting service. We provide
                        solutions tailored to optimize your business potential.
                    </p>
                </div>

                <div className="service_details service_details5">
                    <div className="close">
                        <i className="fa fa-times"></i>
                    </div>
                    <h4>Domain Solutions</h4>
                    <p style={{ marginBottom: 0 }}>When it comes to Domain Soutions, we mean..</p>
                    <p>
                        The process by which the solution is arrived at<br /> The enviornment in which the website is
                        constructed<br /> The design, construction, testing, operation and functions of the solution product
                        itself
                    </p>
                </div>
            </section>
        </>
    );
};

export default Web;
