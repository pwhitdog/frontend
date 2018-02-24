import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onChangePassword, onChangeUsername } from '../../actions/loginAction';
import { UPDATE_PASSWORD, UPDATE_USERNAME } from '../../constants';

interface LoginProps {
    usernameAndPassword: {
        username: string;
        password: string;
    };
    actions: {
        onChangeUsername: (obj: {username: string, type: string})
            => {type: string, username: string};
        onChangePassword: (obj: {password: string, type: string})
            => {type: string, password: string};
    };
}

interface State {
    username: string;
    password: string;
}

const LoginComponent: React.SFC<LoginProps> = (props: LoginProps) => {

    const changeUsername = (event: React.FormEvent<HTMLInputElement>) => {
        props.actions.onChangeUsername({username: event.currentTarget.value, type: UPDATE_USERNAME});
    };

    const changePassword = (event: React.FormEvent<HTMLInputElement>) => {
        props.actions.onChangePassword({password: event.currentTarget.value, type: UPDATE_PASSWORD});
    };

    return (
        <div className="App">
            <h1 className="App-title">Login MOFO</h1>
            <label>Email</label>
            <input
                value={props.usernameAndPassword.username}
                type="text"
                onChange={changeUsername}
            />
            <label>Password</label>
            <input
                value={props.usernameAndPassword.password}
                type="password"
                onChange={changePassword}
            />
            {/*<button onClick={this.onClickSave}>Login</button>*/}
        </div>
    );
};

const mapStateToProps = (state: State) => {
    return {
        usernameAndPassword: {username: state.username, password: state.password}
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        actions: bindActionCreators({
            onChangePassword,
            onChangeUsername,
        },                          dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);