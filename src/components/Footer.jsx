import React from 'react'

function Footer() {
    return (
        <footer>
            <div 
            className="footer-wrapper section-bg2"
    style={{
        backgroundImage: `url(main_page/assets/img/gallery/footer_bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    }}
>

                {/* Footer Top*/}
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        <div className="footer-tittle">
                                            <div className="footer-logo mb-20">
                                                <a href="index.html"><img src="main_page/assets/img/logo/Mercy2.png" alt /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Contact Info</h4>
                                        <ul>
                                            <li>
                                                <p>Address : 11-5-162/A Red Hills Nampally, Hyderabad.</p>
                                            </li>
                                            <li><a href="#">Phone : +91 73287 01298</a></li>
                                            <li><a href="#">Email : contact@gmbhhospital.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer-bottom */}
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="col-xl-10 col-lg-9 ">
                                    <div className="footer-copy-right">
                                        <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                            Copyright © Mercy Charitable and Welfare Society Hyderabad |  Managed By <a href="#" target="_blank"> Abdul Gaffar</a>
                                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3">
                                    <div className="footer-social f-right">
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fas fa-globe" /></a>
                                        <a href="#"><i className="fab fa-behance" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer