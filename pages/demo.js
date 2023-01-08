import HeaderDemo from "../components/layout/HeaderDemo";
import Link from "next/link"
const Index = () => {
    return (
        <>
            <div id="main-wrapper pt-0">
                <HeaderDemo />

                <div class="intro section-padding position-relative" id="intro">
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-xl-6 col-md-6">
                                <div class="intro-content">
                                    <h2>The complete Treemium ocurrency Exchange Nextjs App</h2>
                                    <p>Sign in, Signup, Phone and ID card verification, One time password verify and add bank,
                                        debit card settings and profile etc pages included. </p>
                                    <Link href="#demo" class="btn btn-primary" data-scroll-nav="1">View Demo</Link>
                                </div>
                            </div>
                            <div class="col-xl-6 col-md-6 py-md-5">
                                <div class="demo_img intro-img">
                                    <img src="./images/portfolio.jpg" alt="" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="market section-padding page-section" id="demo">
                    <div class="container">
                        <div class="row py-lg-5 justify-content-center">
                            <div class="col-xl-7">
                                <div class="section_heading">
                                    <span>Explore</span>
                                    <h3>The Complete Treemium Crafted Design Pages</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/landing">
                                        <div class="img-wrap">
                                            <img src="./images/demo/landing.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Landing Page</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/">
                                        <div class="img-wrap">
                                            <img src="./images/demo/dashboard.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Dashboard</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/buy-sell">
                                        <div class="img-wrap">
                                            <img src="./images/demo/buy-sell.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Buy and Sell</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/accounts">
                                        <div class="img-wrap">
                                            <img src="./images/demo/accounts.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Accounts</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/settings">
                                        <div class="img-wrap">
                                            <img src="./images/demo/edit-profile.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Edit Profile</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/settings-preferences">
                                        <div class="img-wrap">
                                            <img src="./images/demo/preferences.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Preferences</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/settings-security">
                                        <div class="img-wrap">
                                            <img src="./images/demo/security.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Security</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/settings-account">
                                        <div class="img-wrap">
                                            <img src="./images/demo/linked-account.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Linked Account</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/history">
                                        <div class="img-wrap">
                                            <img src="./images/demo/history.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>History</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/signin">
                                        <div class="img-wrap">
                                            <img src="./images/demo/signin.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Signin</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/signup">
                                        <div class="img-wrap">
                                            <img src="./images/demo/signup.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Signup</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/reset">
                                        <div class="img-wrap">
                                            <img src="./images/demo/reset.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Reset</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/lock">
                                        <div class="img-wrap">
                                            <img src="./images/demo/lock.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Locked</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/otp-1">
                                        <div class="img-wrap">
                                            <img src="./images/demo/otp-phone.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>OTP Number</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/otp-2">
                                        <div class="img-wrap">
                                            <img src="./images/demo/otp-code.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>OTP Code</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/verify-step-1">
                                        <div class="img-wrap">
                                            <img src="./images/demo/verify-id.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Verify ID</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/verify-step-2">
                                        <div class="img-wrap">
                                            <img src="./images/demo/upload-id.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Upload ID</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/verify-step-3">
                                        <div class="img-wrap">
                                            <img src="./images/demo/id-verifing.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>ID Verifying</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/verify-step-4">
                                        <div class="img-wrap">
                                            <img src="./images/demo/id-verified.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>ID Verified</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/add-debit-card">
                                        <div class="img-wrap">
                                            <img src="./images/demo/add-debit-card.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Add Debit Card</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/verify-step-6">
                                        <div class="img-wrap">
                                            <img src="./images/demo/success.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Success</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/verify-step-5">
                                        <div class="img-wrap">
                                            <img src="./images/demo/choose-account.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Recommendation</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/add-bank-acc">
                                        <div class="img-wrap">
                                            <img src="./images/demo/add-bank.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Add Bank Account</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/about">
                                        <div class="img-wrap">
                                            <img src="./images/demo/about.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>About US</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/privacy-policy">
                                        <div class="img-wrap">
                                            <img src="./images/demo/privacy.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Privacy Policy</h4>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6">
                                <div class="demo_img">
                                    <Link href="/term-condition">
                                        <div class="img-wrap">
                                            <img src="./images/demo/terms.jpg" alt="" class="img-fluid" />
                                        </div>
                                    </Link>
                                    <h4>Terms & Condition</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;