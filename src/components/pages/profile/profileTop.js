import React from 'react';

import Search from '../../searchBar';
import ProfilePic from './profilePicture';

class ProfileTop extends React.Component {
    constructor(props) {
        super(props);
        this.words = majors;
    }

    render() {
        return(
            <div className="top">
                <div className="user-info">
                    <ProfilePic />
                    <h1>Wandi Liu</h1>
                </div>
            </div>
        );
    }
}

export default ProfileTop;