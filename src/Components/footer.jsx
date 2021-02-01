import React from 'react';
import '../styles/footer.scss';
import {footer_page, btn_ref, address} from '../data/data';

function footer() {
    return (
        <div className='footer-section'>
            <button onClick={()=>{window.location='#home'}} className='btop_btn'>Back to Top</button>
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30 mob-gap">
                            <div className="single-cta">
                                <i className="fa fa-map-marker"></i>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span><a href={btn_ref.location} rel="noopener noreferrer" target="_blank">{address.address_line1 + address.address_line2 + address.address_line3}</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30 mob-gap">
                            <div className="single-cta">
                                <i className="fa fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span><a href={"tel:" + btn_ref.phone}>{btn_ref.phone}</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30 mob-gap">
                            <div className="single-cta">
                                <i className="fa fa-envelope"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span><a href={"mailto:" + btn_ref.email}>{btn_ref.email}</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <h3 className='footlogo'><a href='/'>RealWorthInternational</a></h3>
                                </div>
                                <div className="footer-text">
                                    <p>{footer_page.summary}</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href={footer_page.insta}><i className="fa fa-instagram google-bg"></i></a>
                                    <a href={footer_page.twitter}><i className="fa fa-twitter twitter-bg"></i></a>
                                    <a href={footer_page.google}><i className="fa fa-google facebook-bg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30 foot__sub_menu">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#products">Products</a></li>
                                    <li><a href="#contact">Contact us</a></li>
                                    <li><a href="/#">Catalogue</a></li>
                                    <li><a href="/creg.pdf">Trust Seal</a></li>
                                    <li><a href="/gst.pdf">GST Number</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='developer'>Developed by <a href='https://pranav2012.github.io'>@Pranav Agarwal</a></div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; {new Date().getFullYear()}, All Right Reserved <a href="/">Real Worth International</a></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#products">Products</a></li>
                                    <li><a href="#contact">Contact us</a></li>
                                    <li><a href="/#">Catalogue</a></li>
                                </ul>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default footer;
