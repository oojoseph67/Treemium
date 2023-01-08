import React from "react";
import CollectionCover from "../elements/CollectionCover";
import ProfileBio from "../elements/ProfileBio";
import CollectionMenu from "./CollectionMenu";

const CollectionLayout = ({ children }) => {
    return (
        <>
            <CollectionCover />
            <div className="profile-page">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-xxl-3 col-xl-3">
                            <ProfileBio/>
                        </div> */}
                        <div className="col-xxl-12 col-xl-12">
                            <div className="row collector-widget">
                                <div className="col-xl-8">
                                    <div className="row">
                                        <div className="col-xl-3 col-sm-6">
                                            <div className="stat-widget d-flex align-items-center">
                                                <div className="widget-icon me-3 bg-primary">
                                                    <span>
                                                        <i className="ri-file-copy-2-line"></i>
                                                    </span>
                                                </div>
                                                <div className="widget-content">
                                                    <h3>24K</h3>
                                                    <p>Artworks</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6">
                                            <div className="stat-widget d-flex align-items-center">
                                                <div className="widget-icon me-3 bg-success">
                                                    <span>
                                                        <i className="ri-file-list-3-line"></i>
                                                    </span>
                                                </div>
                                                <div className="widget-content">
                                                    <h3>82K</h3>
                                                    <p>Auction</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6">
                                            <div className="stat-widget d-flex align-items-center">
                                                <div className="widget-icon me-3 bg-warning">
                                                    <span>
                                                        <i className="ri-file-paper-line"></i>
                                                    </span>
                                                </div>
                                                <div className="widget-content">
                                                    <h3>200</h3>
                                                    <p>Creators</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6">
                                            <div className="stat-widget d-flex align-items-center">
                                                <div className="widget-icon me-3 bg-danger">
                                                    <span>
                                                        <i className="ri-file-paper-2-line"></i>
                                                    </span>
                                                </div>
                                                <div className="widget-content">
                                                    <h3>89</h3>
                                                    <p>Canceled</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* <div className="col-12">
                                    <CollectionMenu />
                                </div> */}
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollectionLayout;
