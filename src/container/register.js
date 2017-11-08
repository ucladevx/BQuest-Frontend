import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {push} from 'react-router-redux';

import { Actions } from '../reducer';
import Register from '../components/register';

class RegisterContainer extends React.Component {
    render() {
        return(
            <Register 
                sendingEmail={this.props.sendingEmail}
                sentEmail={this.props.sentEmail}
                sendVerificationLink={this.props.sendVerificationLink}
                redirectToPending={this.props.redirectToPending}
                email={this.props.email}
            />
        )
    }
};

const mapStateToProps = state => {
    const RegisterState = state.Register;
    return {
        sendingEmail: RegisterState.get('sendingEmail'),
        email: RegisterState.getIn(['user', 'email'], ''),
        sentEmail: RegisterState.get('sentEmail')
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sendVerificationLink: () => {
            dispatch(Actions.registerActions.sendVerificationLink);
        },
        
        // bindActionCreators(Actions.registerActions.sendVerificationLink, dispatch),
        redirectToPending: () => {
            dispatch(push('/register/pending'));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);