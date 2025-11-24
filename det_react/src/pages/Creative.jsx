import React from 'react';

const Creative = () => {
    return (
        <>
            <header className="header">
                <div className="page-title">
                    <div className="container">
                        <h2>Interactive and Creative Designs</h2>
                    </div>
                </div>
            </header>

            <section className="creative-img">
                <div className="creative-comp-logo">
                    <img src="/assets/images/Responsive.png" alt="Laptop-img" className="img-fluid" />
                </div>
                <div className="creative-bg-img">
                    <img src="/assets/images/Design_01.png" alt="bg-img" className="img-fluid" />
                </div>
            </section>

            <section className="creative-maininfo">
                <div className="creative-content">
                    <div className="container">
                        <div className="creative-inner-info">
                            <a href="#" className="btn-shine" target="_blank" onClick={(e) => e.preventDefault()}>
                                From Visualization to interactive as well as
                                innovative
                                design, we provide complete services to our consumers.
                            </a>
                            <p>
                                Highly innovative ideas & more creative designs that will give a competitive edge within the
                                market,
                                irrespective of the business area. A good and unique design provide adaptive, intuitive and
                                engaging
                                solutions which reflects the business
                                on, on and off digital platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Creative;
