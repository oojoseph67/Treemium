import dynamic from 'next/dynamic';
import Bottom from "./Bottom";
import Footer from "./Footer";
import HeaderLanding from "./HeaderLanding";
import PageHead from "./PageHead";
import PageTitleLanding from "./PageTitleLanding";
const ThemeSwitch = dynamic(() => import('../elements/ThemeSwitch'), {
    ssr: false
})

const LayoutFront = ({
    headTitle,
    children,
    pageTitle,
    pageTitleSub,
    pageClass,
    parent,
    child,
}) => {
    // const [height, sETHeight] = useState(null);
    // useEffect(() => {
    //     sETHeight(window.screen.height);
    // }, []);
    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="main-wrapper" className={pageClass}>
                <HeaderLanding />

                {/* {pageTitle && ( */}
                    <PageTitleLanding
                        pageTitle={pageTitle}
                        pageTitleSub={pageTitleSub}
                        parent={parent}
                        child={child}
                    />
                {/* // )} */}


                {children}


                {/* <Bottom /> */}
                <Footer />
                <ThemeSwitch />
            </div>
        </>
    );
};

export default LayoutFront;
