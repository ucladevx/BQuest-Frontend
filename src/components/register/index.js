import React from 'react';
import EmailForm from './emailForm';

import Loader from '../loader';

class Register extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (!this.props.sentEmail && nextProps.sentEmail) {
            this.props.redirectToPending();
        }
    }

    render() {

        return(
            <div className="container-register">
                {this.props.sendingEmail ? <Loader /> : 
                    <div className="container-emailform">
                        Create an account with your <span className="email-color">official UCLA email</span>
                        <EmailForm sendVerificationLink={this.props.sendVerificationLink}/> 
                    </div>
                }
            </div>
        )
    }
};

export default Register;