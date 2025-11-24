import React from 'react';

const Erp = () => {
    return (
        <>
            <header className="header">
                <div className="page-title">
                    <div className="container">
                        <h2>ERP</h2>
                    </div>
                </div>
            </header>
            <section className="page-header">
                <div className="header-img">
                    <div className="imgHeadBox">
                        <img src="/assets/images/ERP_New.png" alt="laptop" className="img-fluid object" />
                    </div>
                </div>
                <div className="header-inner-info">
                    <p>
                        Utilize your staff's skills, hardware and software to increase productivity and simplify your daily
                        processes is what is ERP. We know it's difficult to keep a tap on everything and that is Digital Edge
                        technologies is here. Providing ERP solutions
                        to facilitate information flow between all business functions inside the organization like finance,
                        sales, human resources etc.
                    </p>
                </div>
            </section>

            <section className="header-info">
                <div className="thoughts">
                    <p id="para1">
                        "A company may employ the most sophisticated software in the world, but unless the information is
                        managed timely, accurate, and complete, the system, serves little purpose"
                    </p>
                    <p id="para2">
                        - wayne L. Staley
                    </p>
                </div>
            </section>

            <div className="header-services">
                <div className="header-service-title">
                </div>
                <div className="main-header">
                    <div className="main-head-column column-1">
                        <div className="head-img">
                            <img src="/assets/images/Cloud computing.png" alt="" className="img-fluid" />
                        </div>

                        <div className="head-content">
                            <h3>Cloud computing</h3>
                            <p>
                                This is a new-age technology of using a network of remote servers hosted on the Internet to store
                                , manage and process data, rather than a local server or a personal computer.
                            </p>
                        </div>
                    </div>
                    <div className="main-head-column column-2">
                        <div className="head-img">
                            <img src="/assets/images/database.png" alt="" className="img-fluid" />
                        </div>

                        <div className="head-content">
                            <h3>Centralized database</h3>
                            <p>
                                This is a new-age technology of using a network of remote servers hosted on the Internet to
                                store, manage and process data, rather than a local server or a personal computer.
                            </p>
                        </div>
                    </div>
                    <div className="main-head-column column-3">
                        <div className="head-img">
                            <img src="/assets/images/analysis.png" alt="" className="img-fluid" />
                        </div>
                        <div className="head-content">
                            <h3>Analysis</h3>
                            <p>Analytical Tools are used to analyze the existing progress of the system.</p>
                        </div>
                    </div>
                    <div className="main-head-column column-4">
                        <div className="head-img">
                            <img src="/assets/images/integrated system.png" alt="" className="img-fluid" />
                        </div>

                        <div className="head-content">
                            <h3>Integrated system</h3>
                            <p>
                                System integration is the process of bringing together the component subsystems into one system
                                and ensuring that the subsystems function together as a system. At Digital Edge Technologies, we
                                link together different computing systems
                                and software applications physically or functionally, to act as a coordinated whole.
                            </p>
                        </div>
                    </div>
                    <div className="main-head-column column-5">
                        <div className="head-img">
                            <img src="/assets/images/Forecasting.png" alt="" className="img-fluid" />
                        </div>
                        <div className="head-content">
                            <h3>Forecasting</h3>
                            <p>
                                On the basis of the analytical report and forecasting combined, company decides the necessary
                                steps to be taken.
                            </p>
                        </div>
                    </div>
                    <div className="main-head-column column-6">
                        <div className="head-img">
                            <img src="/assets/images/Decision Making.png" alt="" className="img-fluid" />
                        </div>
                        <div className="head-content">
                            <h3>Decision Making</h3>
                            <p>On the basis of analytical reports, future progress of the system is predicted.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Erp;
