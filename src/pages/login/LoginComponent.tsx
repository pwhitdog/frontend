import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onChangePassword, onChangeUsername, onLogin, onLogout } from '../../actions/loginAction';
import { UPDATE_PASSWORD, UPDATE_USERNAME } from '../../constants';
import { push } from 'react-router-redux';

interface LoginProps {
    username: string;
    password: string;
    error: string;
    isLoggedIn: boolean;
    actions: {
        onChangeUsername: (obj: {username: string, type: string})
            => {type: string, username: string};
        onChangePassword: (obj: {password: string, type: string})
            => {type: string, password: string};
        onLogin: (obj: {username: string, password: string})
            => () => void;
        onLogout: () => { type: string};
    };
}

interface State {
    login: {
        username: string;
        password: string;
        error: string;
        isLoggedIn: boolean;
    };
}

const LoginComponent = (props: LoginProps) => {

    const changeUsername = (event: React.FormEvent<HTMLInputElement>) => {
        props.actions.onChangeUsername({username: event.currentTarget.value, type: UPDATE_USERNAME});
    };

    const changePassword = (event: React.FormEvent<HTMLInputElement>) => {
        props.actions.onChangePassword({password: event.currentTarget.value, type: UPDATE_PASSWORD});
    };

    const logout = () => {
        props.actions.onLogout();
    };

    const login = () => {
        props.actions.onLogin({username: props.username,
            password: props.password});

    };

    return (
        <div className="container">
            <h3>Login</h3>
            <div className="row">
                <label htmlFor="username">Email</label>
                <input
                    id="username"
                    value={props.username}
                    type="text"
                    onChange={changeUsername}
                    className="form-control"
                />
            </div>
            <div className="row">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    value={props.password}
                    type="password"
                    onChange={changePassword}
                    className="form-control"
                />
            </div>
            <button onClick={login} className="btn btn-primary float-left mt-2">Login</button>
            <button onClick={logout} className="btn btn-primary float-left mt-2">Logout</button>
        </div>
    );
};

const mapStateToProps = (state: State) => {
    if (state.login.isLoggedIn) {
        push('/home');
    }
    return {
        username: state.login.username,
        password: state.login.password,
        error: state.login.error,
        isLoggedIn: state.login.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        actions: bindActionCreators({
            onChangePassword,
            onChangeUsername,
            onLogin,
            onLogout
        },                          dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);