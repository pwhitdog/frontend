import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { onLogout } from '../../actions/loginAction';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

interface Props {
    isLoggedIn: boolean;
    username: string;
    actions: {
        onLogout: () => { type: string };
    };

}

interface State {
    login:
    {
        isLoggedIn: boolean;
        username: string;
    };
}

const NavbarComponent: React.SFC<Props> = (props: Props) => {
    const loggedIn = (
        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <li className="nav-item">{props.username}</li>
            <li className="nav-item"><button onClick={props.actions.onLogout}>Logout</button></li>
        </ul>
    );

    const notLoggedIn = (
        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex float-right">
            <li className="nav-item">
                <NavLink className="nav-link" to="login">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="register">Register</NavLink>
            </li>
        </ul>
    );

    const loggedInList = props.isLoggedIn ? loggedIn : notLoggedIn;

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
            <div className="navbar-nav-scroll w-100">
                <div className="navbar-header d-inline">
                    <a className="navbar-brand" href="/" >Home</a>
                </div>
                <div className="nav navbar-nav navbar-right d-inline">
                    {loggedInList}
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = (state: State) => {
    return {
        username: state.login.username,
        isLoggedIn: state.login.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        actions: bindActionCreators({
            onLogout
        },                          dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
