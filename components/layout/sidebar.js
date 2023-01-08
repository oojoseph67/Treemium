import Link from "next/link";
import { useRouter } from "next/router";
import Test from "../test";

function Sidebar() {
    const router = useRouter();

    return (
        <>
            <div className="sidebar">
                <Link href="/" className="brand-logo">
                    <img src="/images/logo.png" alt="" />
                    <span>Defi Dashboard </span>

                </Link>
                <div className="menu">
                    <ul>
                        <li>
                            <Link 
                                href="/" className={router.pathname == "/" ? "active" : ""}
                            >
                                <span><i class="mdi mdi-view-dashboard"></i></span>
                                <span class="nav-text">Home</span>

                            </Link>
                        </li>
                        <li>
                            <Link href="/market-status" className={router.pathname == "/market-status" ? "active" : ""}>
                                <span><i class="mdi mdi-bank"></i></span>
                                <span class="nav-text">Market Status</span>

                            </Link>
                        </li>
                        <li>
                            <Link href="/buy-sell" className={router.pathname == "/buy-sell" ? "active" : ""}>
                                <span><i class="mdi mdi-coin"></i></span>
                                <span class="nav-text">Exchange</span>

                            </Link>
                        </li>
                        <li>
                            <Link href="/transfer" className={router.pathname == "/transfer" ? "active" : ""}>
                                <span><i class="mdi mdi-repeat"></i></span>
                                <span class="nav-text">Transfer</span>

                            </Link>
                        </li>
                        <li>
                            <Link href="/token-list" className={router.pathname == "/token-list" ? "active" : ""}>
                                <span><i class="mdi mdi-format-list-numbers"></i></span>
                                <span class="nav-text">Token List</span>

                            </Link>
                        </li>
                        <li>
                            <Link href="/transactions" className={router.pathname == "/transactions" ? "active" : ""}>
                                <span><i class="mdi mdi-account"></i></span>
                                <span class="nav-text">Transactions</span>

                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/settings" className={router.pathname == "/settings" ? "active" : ""}>
                                <span><i class="mdi mdi-settings"></i></span>
                                <span class="nav-text">Setting</span>

                            </Link>
                        </li> */}

                    </ul>
                </div>

                <div class="sidebar-footer">
                    <div class="social">
                        <a href="javascript:void(0)"><i class="fa fa-youtube-play"></i></a>
                        <a href="javascript:void(0)"><i class="fa fa-instagram"></i></a>
                        <a href="javascript:void(0)"><i class="fa fa-twitter"></i></a>
                        <a href="javascript:void(0)"><i class="fa fa-facebook"></i></a>
                    </div>
                    <div class="copy_right">
                        © {new Date().getFullYear()} Quixlab
                    </div>
                </div>

            </div>
        </>
    );
}
export default Sidebar;
