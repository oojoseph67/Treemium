import Link from "next/link";
import { useState } from "react";
function HeaderDemo() {
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
                                                <Link href="#demo" className="nav-link">Demo
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="dashboard_log">
                                        <div className="signin-btn d-flex align-items-center">

                                            <Link href="javascript:void(0)" className="btn btn-primary">Buy</Link>
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
export default HeaderDemo;

