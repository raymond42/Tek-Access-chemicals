import React, { Component } from "react";
import "../../assets/scss/homepage.scss";
import background from "../../assets/images/background.jpg";
import monomex from "../../assets/images/monomex.jpg";
import obasf from "../../assets/images/obasf.jpg";
import liansu from "../../assets/images/liansu.jpg";
import lohia from "../../assets/images/lohia.jpg";
import pure from "../../assets/images/pure.jpg";
import lindner from "../../assets/images/lindner.jpg";
import bole from "../../assets/images/bole.jpg";
import Footer from "../footer/Footer";

export class Homepage extends Component {
  render() {
    return (
      <div className="Home">
        <section className="sec11">
          <div className="sec888" id="home" style={{ height: "100vh" }}>
            <div className="container h100">
              <div className="contentBox h100">
                <div>
                  <h1 style={{ wordSpacing: "1px", fontWeight: "400" }}>
                    TekAccess.
                  </h1>
                  <p>Green navigation and sustainability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec22">
          <div className="about">
            <div className="content col-sm-6">
              <h1>
                Who<span> We </span>Are
              </h1>
              <p style={{ textAlign: "left" }}>
                Tekaccess is a global distribution & Trading company involved in
                plastic raw materials. We deal in all kind of prime, near prime,
                off grade & recycle granules. We also deal in plastic regrinds,
                lumps & scarps.
              </p>
              <a href="/about">Learn More</a>
            </div>
            <div className="img-box">
              <img src={background} width={100} height={100} alt="image" />
            </div>
          </div>
        </section>

        <section className="sec33">
          <div
            className="jumbotron jumbotron-fluid height100p banner"
            id="home"
          >
            <div className="container h100">
              <div className="contentBox h100">
                <div>
                  <h1 style={{ wordSpacing: "1px", fontWeight: "400" }}>
                    Our Mission
                  </h1>
                  <p>"Create enhance and sustain."</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec55">
          <div className="services">
            <h1>
              O<span>ur Service</span>s
            </h1>
            <div className="service-super-control">
              <div className="service-control col-sm-3">
                <ul>
                  <li>Recycling</li>
                  <li>Shredding</li>
                  <li>Granulating</li>
                  <li>Importing</li>
                  <li>Food Preservation</li>
                </ul>
              </div>
              <div className="service-control col-sm-3">
                <ul>
                  <li>Exporting</li>
                  <li>Supplying</li>
                  <li>Recompounding</li>
                  <li>Haulage</li>
                  <li>Electricity and heat generation</li>
                </ul>
              </div>
              <div className="service-control col-sm-3">
                <ul>
                  <li>Shipping</li>
                  <li>Payments</li>
                  <li>Irrigation with Fertilizers</li>
                  <li>Waste treatment services</li>
                  <li>Fertilizer production</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="sec44">
          <div className="logos col-sm-12">
            <img src={monomex} alt="monomex logo" />
            <img src={obasf} alt="obasf logo" />
            <img src={liansu} alt="liansu logo" />
            <img src={bole} alt="bole logo" />
            <img src={lohia} alt="lohia logo" />
            <img src={pure} alt="pure logo" />
            <img src={lindner} alt="lindner logo" />
          </div>
        </section>
        <div id="contact">
          <footer className="contact">
            <div className="left-footer up col-sm-6">
              <h3>Speak To Us</h3>
              <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="Name" placeholder="Name" />
                <input type="email" name="Email" placeholder="E-mail" />
                <textarea
                  className="message"
                  name="Message"
                  placeholder="Message here..."
                  rows="4"
                  style={{ background: "transparent" }}
                ></textarea>
                <button className="btn-submit" type="submit">
                  {" "}
                  Send Message
                </button>
              </form>
            </div>
            <div className="right-footer up col-sm-6 bg-light-grey">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10730.
                            464122725612!2d117.3534307171073!3d39.13160757737301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                            1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA5JzIwLjMiTiAxMTfCsDIzJzI3LjQiRQ!5e0!3m2!1sen!
                            2srw!4v1583146819551!5m2!1sen!2srw"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: "1px solid #cecece" }}
                allowFullScreen=""
              ></iframe>
            </div>
          </footer>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
