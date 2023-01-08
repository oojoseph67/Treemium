import Link from "next/link";
const Footer = () => {
    return (
        <>
            <div class="footer landing">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-md-6">
                        <div class="footer-link text-left">
                            <Link href="javascript:void(0)" class="m_logo"><img src="./images/logo.png" alt=""/></Link>
                            <Link href="/about">About</Link>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                            <Link href="/term-condition">Term & Service</Link>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 text-lg-end text-center">
                        <div class="social">
                            <Link href="javascript:void(0)"><i class="fa fa-youtube-play"></i></Link>
                            <Link href="javascript:void(0)"><i class="fa fa-instagram"></i></Link>
                            <Link href="javascript:void(0)"><i class="fa fa-twitter"></i></Link>
                            <Link href="javascript:void(0)"><i class="fa fa-facebook"></i></Link>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-xl-12 text-center text-lg-end">
                        <div class="copy_right text-center text-lg-center">
                            Copyright © {new Date().getFullYear()} mcQu33n. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;