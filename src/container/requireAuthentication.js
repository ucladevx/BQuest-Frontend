import React from 'react';
import { connect } from 'react-redux';
import { push, replace } from 'react-router-redux';

import { Actions } from '../reducer';

export default function(ComposedComponent) {

    class Authentication extends React.Component {
        componentWillMount() {
            if (!this.props.isLoggedIn) {
                this.props.login(this.props.path);
            }
            if (!this.props.isProfileFetched) {
                this.props.fetchProfile();
            }
            if (!this.props.isProfileVerified) {
                return this.props.redirectToPending();
            }
        }

        componentWillReceiveProps(nextProps) {
            if (!nextProps.isLoggedIn) {
                this.props.login();
            }
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => {
        const Login = state.Login;
        const Profile = state.Profile;
        const path = `${state.router.location.pathname}${state.router.location.search}`

        return {
            isLoggedIn: Login.get('authenticated'),
            isProfileFetched: !!Profile.getIn(['user', 'id']),
            isProfileVerified: Profile.getIn(['user', 'verified']),
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            login: path => {
                dispatch(Actions.loginActions.loginAndRedirect(path));
            },
            fetchProfile: () => {
                dispatch(Actions.profileActions.fetchProfile());
            },
            redirectToPending: () => {
                dispatch(replace("/register/pending"));
            },
        };
    }

    return connect(mapStateToProps, mapDispatchToProps)(Authentication)
}
