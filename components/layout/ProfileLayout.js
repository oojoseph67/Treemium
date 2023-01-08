import React from 'react';
import ProfileCover from '../elements/ProfileCover';
import ProfileBio from '../elements/ProfileBio';
import ProfileMenu from './ProfileMenu';

const ProfileLayout = ({ children }) => {
    return (
        <>
        <ProfileCover/>
            <div className="profile-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3">
                            <ProfileBio/>
                        </div>
                        <div className="col-xxl-9 col-xl-9">
                            <div className="row">
                                <div className="col-12">
                                    <ProfileMenu/>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileLayout;