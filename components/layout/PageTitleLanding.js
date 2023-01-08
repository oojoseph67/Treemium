function PageTitle({ pageTitle, pageTitleSub, parent, child }) {
    return (
        <>
            <div className="page-title">
                <div className="container">
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
                </div>
            </div>
        </>
    );
}
export default PageTitle;
