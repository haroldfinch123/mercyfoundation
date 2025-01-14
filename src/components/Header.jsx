import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // const toggleMobileMenu = () => {
    //     console.log("Clicked toggle button");
    //     console.log("🚀 ~ toggleMobileMenu ~ isMobileMenuOpen:", isMobileMenuOpen)

    //     setIsMobileMenuOpen(!isMobileMenuOpen);
    //     console.log("🚀 ~ toggleMobileMenu ~ isMobileMenuOpen:", isMobileMenuOpen)

    // };

    return (
        <header>
            {/* Header Start */}
            <div className="header-area">
                <div className="main-header ">
                    <div className="header-top d-none d-lg-block">
                        <div className="container-fluid">
                            <div className="col-xl-12">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="header-info-left d-flex">
                                        <ul>
                                            <li>Phone: +91 73287 01298</li>
                                            <li>Email: contact@gmbhhospital.com</li>
                                        </ul>
                                        <div className="header-social">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                                <li><a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                                <li> <a href="#"><i className="fab fa-google-plus-g" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom  header-sticky">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                {/* Logo */}
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo">
                                        <NavLink to={"/main"}><img src="main_page/assets/img/logo/Mercy.png" alt /></NavLink>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10">
                                    <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                                        {/* Main-menu */}
                                        <div className="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><NavLink to={"/main"}>Home</NavLink></li>
                                                  
                                                    <li><NavLink to={"/donate"}>Donate </NavLink></li>
                                                    <li><NavLink to={"/view-documents"}>View Documents </NavLink></li>
                                                    {/* <li><a href="blog.html">Blog</a>
                                                        <ul className="submenu">
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="blog_details.html">Blog Details</a></li>
                                                            <li><a href="elements.html">Element</a></li>
                                                        </ul>
                                                    </li> */}
                                                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        {/* Header-btn */}
                                        <div className="header-right-btn d-none d-lg-block ml-20">
                                            <NavLink to={"/donate"} className="btn header-btn">Donate</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/* Mobile Menu */}
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </header>

    );
}

export default Header;
