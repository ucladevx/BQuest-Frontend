import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {push} from 'react-router-redux';

import { Actions } from '../reducer';
import Login from '../components/login';

class LoginContainer extends React.Component {
    render() {
            console.log(this.props.loginSuccess);
        return(
            <Login
                sendUsernamePassword={this.props.sendUsernamePassword}
                loginSuccess={this.props.loginSuccess}
            />
        ) 
    }
};

const mapStateToProps = state => {
    const LoginState = state.Login;
    return {
        loading: LoginState.get('loading'),
        loginSuccess: LoginState.get('loginSuccess'),
        error: LoginState.get('error')
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sendUsernamePassword: (email, password) => {
            console.log('in dispatch');
        	dispatch(Actions.loginActions.sendUsernamePassword(email, password));
        }
        // redirectToPending: () => {
        //     dispatch(push('/register/pending'));      
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);