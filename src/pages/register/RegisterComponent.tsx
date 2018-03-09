import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { onChangePassword1, onChangePassword2, onChangeUsername, onRegister } from '../../actions/registerAction';
import { bindActionCreators } from 'redux';
import { UPDATE_PASSWORD1, UPDATE_PASSWORD2, UPDATE_USERNAME } from '../../constants';

interface Props {
    username: string;
    password1: string;
    password2: string;
    error: string;
    actions: {
        onRegister: (obj: {username: string, password: string})
            => void;
        onChangeUsername: (obj: {username: string, type: string})
            => {type: string, username: string};
        onChangePassword1: (obj: {password1: string, type: string})
            => {password1: string, type: string};
        onChangePassword2: (obj: {password2: string, type: string})
            => {password2: string, type: string};
    };
}

interface State {
    register: {
        username: string;
        password1: string;
        password2: string;
        error: string;
    };
}

const RegisterComponent = (props: Props) => {

    const changeUsername = (event: React.FormEvent<HTMLInputElement>) => {
        let username = event.currentTarget.value;
        props.actions.onChangeUsername({username, type: UPDATE_USERNAME});
    };

    const changePassword1 = (event: React.FormEvent<HTMLInputElement>) => {
        let password1 = event.currentTarget.value;
        props.actions.onChangePassword1({password1: password1, type: UPDATE_PASSWORD1});
    };

    const changePassword2 = (event: React.FormEvent<HTMLInputElement>) => {
        let password2 = event.currentTarget.value;
        props.actions.onChangePassword2({password2: password2, type: UPDATE_PASSWORD2});

    };

    const register = () => {
        if (props.username !== '' && props.password1 !== '' && props.password2 !== '') {
            if (props.password1 === props.password2) {
                props.actions.onRegister({password: props.password1, username: props.username});
            }

            window.location.assign('/');
        }
    };

    return (
        <div className="container">
            <div className="row mt-2">
                <h3>Register</h3>
            </div>
            <div className="row">
                <label htmlFor="username">Email</label>
                <input
                    id="username"
                    type="text"
                    className="form-control"
                    onChange={changeUsername}
                />
            </div>
            <div className="row">
                <label htmlFor="password1">Password</label>
                <input
                    id="password1"
                    type="password"
                    className="form-control"
                    onChange={changePassword1}
                />
            </div>
            <div className="row">
                <label htmlFor="password2">Password</label>
                <input
                    id="password2"
                    type="password"
                    className="form-control"
                    onChange={changePassword2}
                />
            </div>
            <div className="row">
                <button className="btn btn-outline-primary mt-2" onClick={register}>Register</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state: State) => {
    return {
        username: state.register.username,
        password1: state.register.password1,
        password2: state.register.password2,
        error: state.register.error
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        actions: bindActionCreators({
            onRegister,
            onChangeUsername,
            onChangePassword1,
            onChangePassword2
        },                          dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);