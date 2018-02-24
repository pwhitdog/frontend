import * as React from 'react';

interface LoginProps {
    username: string;
    password: string;
    onChangeUsername: (event: React.FormEvent<HTMLInputElement>) => void;
    onChangePassword: (event: React.FormEvent<HTMLInputElement>) => void;
}

const LoginComponent: React.SFC<LoginProps> = (props) => {

    return (
        <div className="App">
            <h1 className="App-title">Login MOFO</h1>
            <label>Email</label>
            <input
                value={props.username}
                type="text"
                onChange={props.onChangeUsername}
            />
            <label>Password</label>
            <input
                value={props.password}
                type="password"
                onChange={props.onChangePassword}
            />
            {/*<button onClick={this.onClickSave}>Login</button>*/}
        </div>
    );
};

export default LoginComponent;
