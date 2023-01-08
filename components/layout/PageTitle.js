function PageTitle({ pageTitle, pageTitleSub, parent, child, address }) {
    return (
        <>
            {/* <div className="page-title">
                <div className="row align-items-center justify-content-between">
                    <div className="col-6">
                        <div className="page-title-content">
                            <h3>{pageTitle}</h3>
                            <p className="mb-2">{pageTitleSub}</p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="breadcrumbs">
                            <a href="javascript:void(0)">{parent} </a>
                            <span>
                                <i className="ri-arrow-right-s-line"></i>
                            </span>
                            <a href="javascript:void(0)">{child}</a>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="page_title">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="page_title-content">
                                <p>Welcome Back,
                                    <span>
                                        {address?.substring(0, 5)}...{address?.substring(address.length, address.length - 5)}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PageTitle;
