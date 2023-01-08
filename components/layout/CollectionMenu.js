import Link from "next/link";
import { useRouter } from "next/router";

function CollectionMenu() {
    const router = useRouter();
    return (
        <>
            {/* <li className={router.pathname == "/" ? "active" : ""}>
                            <Link href="/">
                                <a>
                                    <span>
                                        <i className="bi bi-house"></i>
                                    </span>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                            </Link>
                            </li> */}

            <ul className="profile-menu collection-menu">
                <li
                    className={
                        router.pathname == "/collector-item" ? "active" : ""
                    }
                >
                    <Link href="/collector-item">
                        <a>Items</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/collector-desc"
                            ? "active"
                            : ""
                    }
                >
                    <Link href="/collector-desc">
                        <a>Description</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/activity" ? "active" : ""
                    }
                >
                    <Link href="/activity">
                        <a>Activity</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}
export default CollectionMenu;
