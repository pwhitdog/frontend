import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onChangeLogin } from '../../actions/loginAction';
import { UPDATE_PASSWORD, UPDATE_USERNAME } from '../../constants';

interface LoginProps {
    username: string;
    password: string;
    actions: {
        onChangeLogin: (obj: {username: string, password: string, type: string})
            => {type: string, username: string, password: string};
    };
}

const LoginComponent: React.SFC<LoginProps> = (props: LoginProps) => {

    const changeUsername = (event: React.FormEvent<HTMLInputElement>) => {
        let pass = props.password ? props.password : '';
        props.actions.onChangeLogin({username: event.currentTarget.value, password: pass, type: UPDATE_USERNAME});
    };

    const changePassword = (event: React.FormEvent<HTMLInputElement>) => {
        let user = props.username ? props.username : '';
        props.actions.onChangeLogin({username: user, password: event.currentTarget.value, type: UPDATE_PASSWORD});
    };

    return (
        <div className="App">
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
            {/*<button onClick={this.onClickSave}>Login</button>*/}
        </div>
    );
};

const mapStateToProps = (state: LoginProps) => {
    return {
        username: state.username,
        password: state.password,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        actions: bindActionCreators({
            onChangeLogin
        },                          dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);