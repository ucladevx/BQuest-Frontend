import React from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { bindActionCreators } from 'redux'
import { parse } from 'qs';

import { Actions } from '../reducer';
import Loader from '../components/Loader';

class VerifyUserContainer extends React.Component {
    componentWillMount() {
        const query = parse(this.props.location.search.substr(1));
        this.props.confirmVerificationCode(query.code);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.verifiedEmail) {
            this.props.finishRegistration();
        }   
    }

    render() {
        return (
            <Loader />
        );
    }
}

const mapStateToProps = state => {
    const Register = state.Register;
    return {
        verifiedEmail: Register.get('verifiedEmail')
    };
}

const mapDispatchToProps = dispatch => {
    return {
        confirmVerificationCode: code => {
            dispatch(Actions.registerActions.confirmCode(code))
        },
        finishRegistration: () => {
            dispatch(replace('/completeRegistration'));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyUserContainer);
