import { connect, Dispatch } from 'react-redux';
import { loginAction, onChangeUsername, onChangePassword } from '../../actions/loginAction';
import { bindActionCreators } from 'redux';
import { LoginObject } from '../../objects/loginObject';
import LoginComponent from './LoginComponent';

interface State {
    loginObject: LoginObject;
    onChange: () => void;
}

const mapStateToProps = (state: State) => {
    return {
        username: state.loginObject.username,
        password: state.loginObject.password
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        actions: bindActionCreators({
                loginAction,
                onChangeUsername,
                onChangePassword
            },                      dispatch)
    };
};

connect(mapStateToProps, mapDispatchToProps)(LoginComponent);