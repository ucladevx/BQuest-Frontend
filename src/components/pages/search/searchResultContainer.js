import React from 'react';
import Shave from 'react-shave';
import { Link } from 'react-router-dom';

import ProfilePic from '../profile/profilePicture';
import { join } from 'path';

class SearchResultContainer extends React.Component {
    state = {
        maxHeight: 70
    }

    commponentDidMount() {
        if (window.innerWidth <= 320) {
            this.resetMaxHeight(70);
        }
    }

    resetMaxHeight = (maxHeight) => {
        this.setState((prevState, props) => {
            return {maxHeight};
        })
    }

    render() {
        const {
            maxHeight
        } = this.state;

        const {
            mentorProfile
        } = this.props;

        const name = `${mentorProfile.getIn(['user', 'first_name'])} ${mentorProfile.getIn(['user', 'last_name'])}`
        
        return (
            <Link to={`/mentors/${this.props.mentorProfile.getIn(['mentor','id'])}`}>
                <div className="search-result-container">
                    <div className="profile-pic-container">
                        <ProfilePic 
                            profile={mentorProfile}
                        />
                    </div>                
                    <div className="mentor-details">
                        <div className="mentor-name">{name}</div>
                        <div className="mentor-major">{this.props.mentorProfile.getIn(['mentor', 'major', 'name'])}</div>
                        <div className="mentor-bio">
                            <Shave maxHeight={maxHeight}>{this.props.mentorProfile.getIn(['mentor','bio'])}</Shave>
                        </div>
                    </div>
                </div>
            </Link>   
        );
    }
}

export default SearchResultContainer;