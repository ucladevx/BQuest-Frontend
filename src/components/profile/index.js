import React from 'react';

import ProfileTop from './profileTop';
import General from './general';
import Mentorship from './mentorship';
import Search from '../searchBar';

class Profile extends React.Component {
    render() {
        return(
            <div className="container-profile">
                <ProfileTop /> 
                <div className="profile-detail-container">
                    <General />
                    <Mentorship />
                </div>
            </div>
        );
    }
}

export default Profile;
