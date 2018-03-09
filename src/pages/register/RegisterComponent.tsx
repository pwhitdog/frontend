import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { onRegister } from '../../actions/loginAction';
import { bindActionCreators } from 'redux';

interface Props {
    username: string;
    password1: string;
    password2: string;
    error: string;
    isLoggedIn: boolean;
    actions: {
        onRegister: (obj: {username: string, password: string})
            => () => void;
    };
}

interface State {
    username: string;
    password1: string;
    password2: string;
    error: string;
    isLoggedIn: boolean;
}

class RegisterComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
          username: '',
          password1: '',
          password2: '',
          error: '',
          isLoggedIn: false
        };

        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword1 = this.changePassword1.bind(this);
        this.changePassword2 = this.changePassword2.bind(this);
        this.register = this.register.bind(this);
    }

    changeUsername(event: React.FormEvent<HTMLInputElement>) {
        let username = event.currentTarget.value;
        this.setState(prevState => ({
            username
        }));
    }

    changePassword1(event: React.FormEvent<HTMLInputElement>) {
        let password1 = event.currentTarget.value;
        this.setState(prevState => ({
            password1
        }));
    }

    changePassword2(event: React.FormEvent<HTMLInputElement>) {
        let password2 = event.currentTarget.value;
        this.setState(prevState => ({
            password2
        }));
    }

    register() {
        if (this.state.username !== '' && this.state.password1 !== '' && this.state.password2 !== '') {
            if (this.state.password1 === this.state.password2) {
                this.props.actions.onRegister({username: this.state.username, password: this.state.password1});
            }
        }
    }

    render() {
        return (
            <div className="container">
                <h3>Register</h3>
                <div className="row">
                    <label htmlFor="username">Email</label>
                    <input
                        id="username"
                        type="text"
                        className="form-control"
                        onChange={this.changeUsername}
                    />
                </div>
                <div className="row">
                    <label htmlFor="password1">Password</label>
                    <input
                        id="password1"
                        type="password"
                        className="form-control"
                        onChange={this.changePassword1}
                    />
                </div>
                <div className="row">
                    <label htmlFor="password2">Password</label>
                    <input
                        id="password2"
                        type="password"
                        className="form-control"
                        onChange={this.changePassword2}
                    />
                </div>
                <button className="btn btn-primary" onClick={this.register}>Register</button>
            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    // if (state.isLoggedIn) {
    //     window.location.assign('/');
    // }
    return {
        username: state.username,
        password: state.password1,
        isLoggedIn: state.isLoggedIn,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        actions: bindActionCreators({
            onRegister
        },                          dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);