import { useEffect, useState } from "react";
import Header from "./Header";
import PageHead from "./PageHead";
import PageTitle from "./PageTitle";
import Sidebar from "./sidebar";

const LayoutAdmin = ({
    headTitle,
    children,
    pageTitle,
    pageTitleSub,
    pageClass,
    parent,
    child,
    address,
    chain,
    setChain,
    explorer,
    setExplorer,
    setCurrency,
    setNativeContractThird,
}) => {

    const [height, sETHeight] = useState(null);
    useEffect(() => {
        sETHeight(window.screen.height);
    }, []);
    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="main-wrapper" className={pageClass}>
                <Header 
                    address={address}
                    chain={chain}
                    setChain={setChain}
                    explorer={explorer}
                    setExplorer={setExplorer}
                    setCurrency={setCurrency}
                    setNativeContractThird={setNativeContractThird}
                />
                <Sidebar />
                {/* {pageTitle && ( */}
                <PageTitle
                    address={address}
                    pageTitle={pageTitle}
                    pageTitleSub={pageTitleSub}
                    parent={parent}
                    child={child}
                />
                        {/* )} */}

                <div className="content-body" style={{ minHeight: height - 122 }}>
                    <div className="container">                        
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LayoutAdmin;
