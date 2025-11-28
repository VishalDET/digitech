import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
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
            css.id = "typewrite-style-contact";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            if (!document.getElementById("typewrite-style-contact")) {
                document.body.appendChild(css);
            }
        };

        const timer = setTimeout(() => {
            initTypewriter();
        }, 100);

        return () => {
            clearTimeout(timer);
            const css = document.getElementById("typewrite-style-contact");
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
                        You can: <br />
                        <span className="typewrite" data-period="2000" data-type='[ "Call us", "Mail us","Follow us"]'></span>
                        <span className="wrap"></span>
                    </h1>
                </div>
            </header>
            {/* end page-header */}
            <div className="contact-us-details">
                <div className="container">
                    <div className="contact-us-box">
                        <div className="contact-address-box">
                            <h1>Address</h1>
                            <div className="">
                                <div className="row">
                                    <div className="row align-content-center address-main">
                                        <span className="iconify mx-4" data-icon="akar-icons:location"></span>
                                        <h6>Head Office</h6>
                                    </div>

                                    <div className="col-11  address-main">
                                        <p>
                                            A-1701/1702, Lotus Corporate Park, Ram Mandir Rd, W.E.Highway,
                                            Jay Coach, Goregaon East, Mumbai 400063, India -
                                            <a className="text-black" target="_blank" href="https://www.google.com/maps/place/Digital+Edge+Technologies/@19.1452137,72.8510338,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7cc906768df:0x7a32d00d26c64a10!8m2!3d19.1452087!4d72.8536087!16s%2Fg%2F11bwy_2vkt?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D">Get Direction <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className=" mt-5">
                                <div className="row align-items-center">
                                    <div className="row align-content-center address-main">
                                        <span className="iconify mx-4" data-icon="akar-icons:location"></span>

                                        <h6>Branch Office</h6>
                                    </div>
                                    <div className="col-11 address-main">
                                        <p>
                                            24, Jai Hind Cottage, oppo. Alpha College, Shahaji Raje Road, Vile Parle East, Mumbai 400057 -
                                            <a className="text-black" target="_blank" href="https://www.google.com/maps/place/Digital+Edge+Technologies+-+Vile+Parle/@19.106578,72.8450912,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9fdb4a69a41:0x9296a2ff2abbe21!8m2!3d19.1065729!4d72.8476661!16s%2Fg%2F11v0vm45f2?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D">Get Direction <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="contact-number-box">
                            <h1>Reach us</h1>
                            <p>We always looking for talented peoples, soo let's work together</p>
                            <div className="iconwithus contact-location">
                                <span className="iconify" data-icon="carbon:email"></span>
                                <a href="mailto:info@digitaledgetech.in">info@digitaledgetech.in</a>
                            </div>
                            <div className="iconwithus contact-location">
                                <span className="iconify" data-icon="bx:bxs-contact"></span>
                                <a href="tel:+91 9152889989">+91 9152889989</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="contact">
                <div className="container">
                    <div className="login-form-main">
                        <div className="col-lg-6 wow fadeInUp  pt-5 mt-md-0">
                            <div className="contact-form">
                                {/* <h5>CONTACT FORM</h5> */}
                                <form id="contact" action="#" name="contact" method="POST">
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" autoComplete="off" required />
                                        <span>Your name</span>
                                    </div>
                                    {/* end form-group */}
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" autoComplete="off" required />
                                        <span>Your e-mail</span>
                                    </div>
                                    {/* end form-group */}
                                    <div className="form-group">
                                        <input type="text" name="phone" id="subject" autoComplete="off" required />
                                        <span>Contact No</span>
                                    </div>
                                    {/* end form-group */}
                                    <div className="form-group">
                                        <textarea name="message" id="message" autoComplete="off" required></textarea>
                                        <span>Your message</span>
                                    </div>
                                    <div className="g-recaptcha" data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}></div>
                                    {/* end form-group */}
                                    <div className="form-group">
                                        <button id="submit" type="submit" name="submit">
                                            <strong>Submit Now<b></b> <i></i></strong>
                                        </button>
                                    </div>
                                    {/* end form-group */}
                                </form>
                                {/* end form */}
                                {/* end form-group */}
                            </div>
                            {/* end contat-form */}
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact */}
        </>
    );
};

export default Contact;
