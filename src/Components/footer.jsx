import React from 'react';
import '../styles/footer.scss';

function footer() {
    return (
        <div className='footer-section'>
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30 mob-gap">
                            <div className="single-cta">
                                <i className="fa fa-map-marker"></i>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span><a href='https://goo.gl/maps/jm7PVTWrde96xsnE6' target="_blank">Real Worth International, Hauz khas, New Delhi</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30 mob-gap">
                            <div className="single-cta">
                                <i className="fa fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span><a href="tel:+91-7878787878">+91-7878787878</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30 mob-gap">
                            <div className="single-cta">
                                <i className="fa fa-envelope"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span><a href="mailto:realworthinternational@info.com">realworthinternational@info.com</a></span>
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
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                    elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="#"><i className="fa fa-facebook-f facebook-bg"></i></a>
                                    <a href="#"><i className="fa fa-twitter twitter-bg"></i></a>
                                    <a href="#"><i className="fa fa-instagram google-bg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30 foot__sub_menu">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="#products">Products</a></li>
                                    <li><a href="#contact">Contact us</a></li>
                                    <li><a href="#">Catalogue</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div class="copyright-text">
                                <p>Copyright &copy; {new Date().getFullYear()}, All Right Reserved <a href="/">Real Worth International</a></p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div class="footer-menu">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="#products">Products</a></li>
                                    <li><a href="#contact">Contact us</a></li>
                                    <li><a href="#">Catalogue</a></li>
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
