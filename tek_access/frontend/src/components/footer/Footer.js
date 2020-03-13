import React from 'react';

function Footer()
{
    return (
        <div className="bottom-footer bg-light-grey">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <ul className="sci">
                            <li className="col-sm-3"><a href="https://m.facebook.com/TekAccess-Chemical-Technologies-Limited-102012438069932/?ref=bookmarks"><i className="col-sm-3" className="fab fa-facebook-f" style={{ color: "#3b5998", fontSize: "2.3rem" }}></i><br />TekAccess Technology</a></li>
                            <li className="col-sm-3"><i className="fab fa-whatsapp" style={{ color: "#25D366", fontSize: "2.3rem" }}></i><br />+8615122871067 / +250788308294</li>
                            <li className="col-sm-3"><i className="fa fa-envelope" style={{ color: "#e7c77b" }}></i><br />Jimurinzi@tekaccess.net<br /></li>
                            <li className="col-sm-3"><i className="fa fa-phone" aria-hidden="true" style={{ color: "#3c7186" }}></i><br />+250788308294</li>
                            <li className="col-sm-3"><i className="fa fa-map-marker" aria-hidden="true" style={{ color: "#EA4335" }}></i><br />Tianjin, China</li>

                        </ul>
                        <br />
                        <p className="cpryt">© 2020 TekAccess.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
