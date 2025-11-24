import React, { useEffect } from 'react';

const Clientele = () => {
    useEffect(() => {
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

        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);

        return () => {
            if (document.body.contains(css)) {
                document.body.removeChild(css);
            }
        }
    }, []);

    return (
        <>
            <header className="header">
                <div className="headlines" id="clientele-headline">
                    <h1>
                        Our Priority is:<br />
                        <span className="typewrite" data-period="2000"
                            data-type='[ "Campaign success","Greater ROI","Client Satisfaction"]'></span>
                        <span className="wrap"></span>
                    </h1>
                </div>
            </header>
            <div className="container-fluid">
                <div className="clienteleClients">
                    <img src="/assets/images/120x120_Final/74.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/65.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/6.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/8.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/10.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/12.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/13.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/15.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/17.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/18.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/19.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/20.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/21.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/22.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/23.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/2.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/4.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/24.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/25.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/26.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/27.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/28.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/29.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/30.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/31.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/32.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/33.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/34.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/35.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/36.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/37.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/38.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/39.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/40.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/41.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/42.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/43.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/46.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/47.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/48.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/49.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/50.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/51.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/52.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/53.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/54.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/55.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/56.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/57.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/58.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/59.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/60.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/61.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/62.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/63.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/64.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/66.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/67.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/68.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/69.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/70.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/71.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/72.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/120x120_Final/73.jpg" alt="client" className="img-fluid" />
                    <img src="/assets/images/Final Logos 90 x 90/drcom.png" alt="Dr Com" className="img-fluid" />
                    <img src="/assets/images/Final Logos 90 x 90/mbh.png" alt="Mangal Build Home" className="img-fluid" />
                    <img src="/assets/images/Final Logos 90 x 90/synfoshop.png" alt="Synfoshop" className="img-fluid" />
                    <img src="/assets/images/Final Logos 90 x 90/vetranova1.png" alt="Vetranova" className="img-fluid" />
                    <img src="/assets/images/Final Logos 90 x 90/sovereigntrade.jpg" alt="Sovereign Trade" className="img-fluid" />
                </div>
            </div>
        </>
    );
};

export default Clientele;
