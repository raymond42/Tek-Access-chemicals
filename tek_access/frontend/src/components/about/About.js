import React from 'react';
import '../../assets/scss/about.scss';
import monomex from '../../assets/images/monomex.jpg';
import obasf from '../../assets/images/obasf.jpg';
import liansu from '../../assets/images/liansu.jpg';
import lohia from '../../assets/images/lohia.jpg';
import pure from '../../assets/images/pure.jpg';
import lindner from '../../assets/images/lindner.jpg';
import bole from '../../assets/images/bole.jpg';
import Footer from '../footer/Footer';


class About extends React.Component
{
    render()
    {
        return (
            <div className="About">
                <div className="sec66">
                </div>

                <div className="sec77">
                    <div className="bottom-border">
                    </div>
                    <div className="container" style={{ padding: "50px" }}>
                        <h1>W<span>ho We Ar</span>e</h1>
                        <p>Tekaccess is a global distribution & Trading company involved in plastic raw materials.
                          We deal in all kind of prime, near prime, off grade & recycle granules. We also deal in plastic
                           regrinds, lumps & scarps.Since it’s establishment, essential aim of TEKACCESS is to become a
                           global and  effective player in compound industry.With it’s experience in production and reliable
                           network around the world, Tekaccess acts with conscience of social and public
                            responsibility by meeting the customer satisfaction with sensibility of environment
                            and human health, high-technology laboratory and demand-oriented product development
                             with wide range of high quality materials.
</p>
                        <br />
                        <h5 style={{ textAlign: "center" }}>Business philosophy</h5>
                        <br />
                        <p>Our business philosophy is to develop exceptional customer relationships, which are underpinned by our non-
                           negotiable core values of respect, integrity and trust.
               </p>
                        <br />
                        <h5 style={{ textAlign: "center" }}>Contribution to Community</h5>
                        <br />
                        <p>TekAccess has a strong sense of community. We thus feel compelled to help the less fortunate.
                         Accordingly, we direct a percentage of our earnings to support sustainable aid programs and charities.

               </p>
                    </div>
                    <section className="sec552">
                        <div className="services">
                            <h2>O<span>ur Value</span>s</h2>
                            <div className="service-control col-sm-3">
                                <h3>T<span>rus</span>t</h3>
                                <ul>
                                    <li>We seek solutions not blame.</li>
                                    <li>We respect our social environment.</li>
                                    <li>We show faith in our systems and eachother.</li>
                                    <li>Communication and teamwork are key to our success.</li>
                                </ul>
                            </div>
                            <div className="service-control col-sm-3">
                                <h3>E<span>xcellenc</span>e</h3>
                                <ul>
                                    <li>We have a culture of best practices.</li>
                                    <li>We lead with actions, not words.</li>
                                    <li>We possess a 'We can do' attitude.</li>
                                    <li>Wellbeing and safety are our responsibilities.</li>
                                </ul>
                            </div>
                            <div className="service-control col-sm-3">
                                <h3>S<span>olution</span>s</h3>
                                <ul>
                                    <li>We invest in our people.</li>
                                    <li>Provide solutions through Technology.</li>
                                    <li>We use our quality system to drive improvement.</li>
                                    <li>We are responsible of our environment.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div className="bottom-border">
                    </div>
                </div>

                <section className="sec662" style={{ height: "100vh" }}>
                    <p>"In the world of renewable energy,we cast quite a shadow."</p>
                </section>

                <section className="sec99">
                    <h1>Our Partners</h1>
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

                <Footer />

            </div>
        );
    }
}

export default About;
