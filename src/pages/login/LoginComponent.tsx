import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onChangePassword, onChangeUsername } from '../../actions/loginAction';

interface LoginProps {
    username: string;
    password: string;
    onChangeUsername: (event: React.FormEvent<HTMLInputElement>) => void;
    onChangePassword: (event: React.FormEvent<HTMLInputElement>) => void;
}

const LoginComponent: React.SFC<LoginProps> = ({ username, password}) => {

    const changeUsername = (event: React.FormEvent<HTMLInputElement>) => {
      onChangeUsername(event.currentTarget.value, password);
    };

    const changePassword = (event: React.FormEvent<HTMLInputElement>) => {
      onChangePassword(username, event.currentTarget.value);
    };

    return (
        <div className="App">
            <h1 className="App-title">Login MOFO</h1>
            <label>Email</label>
            <input
                value={username}
                type="text"
                onChange={changeUsername}
            />
            <label>Password</label>
            <input
                value={password}
                type="password"
                onChange={changePassword}
            />
            {/*<button onClick={this.onClickSave}>Login</button>*/}
        </div>
    );
};

const mapStateToProps = (state: LoginProps) => {
    return {
        username: state.username,
        password: state.password,
        onChangePassword: state.onChangePassword,
        onChangeUsername: state.onChangeUsername
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        actions: bindActionCreators({
            onChangeUsername,
            onChangePassword
        },                          dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);