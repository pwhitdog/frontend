import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onChangePassword, onChangeUsername, onLogin } from '../../actions/loginAction';
import { UPDATE_PASSWORD, UPDATE_USERNAME } from '../../constants';

interface LoginProps {

    username: string;
    password: string;
    actions: {
        onChangeUsername: (obj: {username: string, type: string})
            => {type: string, username: string};
        onChangePassword: (obj: {password: string, type: string})
            => {type: string, password: string};
        onLogin: (obj: {username: string, password: string})
            => () => void;
    };
}

interface State {
    login: {
        username: string;
        password: string;
    };
}

const LoginComponent: React.SFC<LoginProps> = (props: LoginProps) => {

    const changeUsername = (event: React.FormEvent<HTMLInputElement>) => {
        props.actions.onChangeUsername({username: event.currentTarget.value, type: UPDATE_USERNAME});
    };

    const changePassword = (event: React.FormEvent<HTMLInputElement>) => {
        props.actions.onChangePassword({password: event.currentTarget.value, type: UPDATE_PASSWORD});
    };

    const login = () => {
        props.actions.onLogin({username: props.username,
            password: props.password});
    };

    return (
        <div className="jumbotron">
            <h1 className="App-title">Login MOFO</h1>
            <label>Email</label>
            <input
                value={props.username}
                type="text"
                onChange={changeUsername}
            />
            <label>Password</label>
            <input
                value={props.password}
                type="password"
                onChange={changePassword}
            />
            <button onClick={login}>Login</button>
        </div>
    );
};

const mapStateToProps = (state: State) => {
    return {
        username: state.login.username,
        password: state.login.password
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        actions: bindActionCreators({
            onChangePassword,
            onChangeUsername,
            onLogin
        },                          dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);