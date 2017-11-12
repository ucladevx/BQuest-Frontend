import {createStore, combineReducers, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware, push} from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer as notificationsReducer } from 'reapop';

import { Auth } from './auth';
import { Register, sendVerificationLink, confirmCode } from './register';
import { Profile, fetchProfile, updateProfile } from './profile';

// import reducers from './reducers';


const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        Auth,
        Register,
        Profile,
        router: routerReducer,
        notifications: notificationsReducer()
    }),
    applyMiddleware(
        middleware, 
        thunk,
        createLogger({collapsed: true})
    )
);

const Actions = {
    registerActions: {
        sendVerificationLink, confirmCode
    },
    profileActions: {
        fetchProfile, updateProfile
    }
}

export {
    store, history, Actions
}
