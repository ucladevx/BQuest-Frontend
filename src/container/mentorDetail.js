import React from 'react';
import { connect } from 'react-redux';

import { Actions } from '../reducer';
import { getMentorAndIfRequested } from '../selectors/requests';

import MentorDetail from '../components/pages/mentorDetail';

class MentorDetailContainer extends React.Component {
    render() {
        return (
            <MentorDetail 
                mentor={this.props.mentor}
                sendRequest={this.props.sendRequest}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
         mentor: getMentorAndIfRequested(state, ownProps)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendRequest: (message, mentorId) => {
            dispatch(Actions.requestsActions.sendRequest(message, mentorId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorDetailContainer);