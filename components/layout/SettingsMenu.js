import Link from "next/link";
import { useRouter } from "next/router";

function SettingsMenu() {
    const router = useRouter();
    return (
        <>
            {/* <li className={router.pathname == "/" ? "nav-link active" : "nav-link"}>
                            <Link href="/">
                                <a>
                                    <span>
                                        <i className="bi bi-house"></i>
                                    </span>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                            </Link>
                            </li> */}

            {/* <h4 className="card-title mb-3">
                Settings
            </h4> */}
            {/* <div className="card">
                <div className="card-body"> */}
            <ul className="settings-menu">
                <li class="nav-item">
                    <Link href="/settings"className={router.pathname == "/settings" ? "nav-link active" : "nav-link"}>
                            <i class="mdi mdi-account"></i>
                            <span>Edit Profile</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href="/settings-preferences"className={
                            router.pathname == "/settings-preferences" ? "nav-link active" : "nav-link"
                        }>
                            <i class="la la-cog"></i>
                            <span>Preferences</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href="/settings-security"className={router.pathname == "/settings-security" ? "nav-link active" : "nav-link"}>
                            <i class="la la-lock"></i>
                            <span>Security</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href="/settings-account"className={router.pathname == "/settings-account" ? "nav-link active" : "nav-link"}>
                            <i class="la la-university"></i>
                            <span>Linked Account</span>
                    </Link>
                </li>
                {/* <li
                            className={
                                router.pathname == "/payment"
                                    ? "active"
                                    : ""
                            }
                        >
                            <Link href="/payment">
                                <a><i className="bi bi-chevron-right"></i> Payment METHod</a>
                            </Link>
                        </li> */}
                {/* <li
                            className={
                                router.pathname == "/apis" ? "nav-link active" : "nav-link"
                            }
                        >
                            <Link href="/apis">
                                <a><i className="bi bi-chevron-right"></i> API</a>
                            </Link>
                        </li> */}
            </ul>
            {/* </div>
            </div> */}
        </>
    );
}
export default SettingsMenu;
