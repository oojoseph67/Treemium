import Link from "next/link";
import { useState } from "react";
function HeaderLanding() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);



    return (
        <>
            <div className="header landing_page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12  position-relative">
                            <div className="navigation">
                                <nav class="navbar navbar-expand-lg navbar-light px-0">
                                    <Link href="/" class="navbar-brand">
                                        <img src="/images/logo.png" alt="" className="logo-primary" />
                                        <span>Treemium </span>
                                        {/* <img src="/images/logow.png" alt="" className="logo-white" /> */}
                                    </Link>

                                    <button className="navbar-toggler" type="button" onClick={toggleTrueFalse}>
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className={isToggled ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                                        <ul className="navbar-nav me-auto">


                                            <li className="nav-item">
                                                <Link href="#intro" className="nav-link">Home
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="#market" className="nav-link">Market
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="#portfolio" className="nav-link">Portfolio
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="#testimonial" className="nav-link">Testimonial
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="#contact" className="nav-link">Contact
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="dashboard_log d-sm-none d-lg-block">
                                        <div className="signin-btn d-flex align-items-center">

                                            <Link href="/signin" className="btn btn-primary mx-2">Sign In</Link>
                                            <Link href="/signup" className="btn btn-outline-primary mx-2">Sign Up</Link>
                                        </div>
                                    </div>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    );
}
export default HeaderLanding;

