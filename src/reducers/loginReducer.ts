import { LOGIN_USER, UPDATE_PASSWORD, UPDATE_USERNAME } from '../constants';
import { LoginObject } from '../objects/loginObject';

// interface LoginState  {
//     roles: Array<string>;
//     username: string;
//     password: string;
//     token: string;
//     type: string;
// }

const loginReducer = (state = {username: 'jjj', password: ''}, login: LoginObject) => {
    switch (login.type) {
        case LOGIN_USER:
            // some thunk thing
            return state;
        case UPDATE_USERNAME:
            return Object.assign({}, state, login);
        case UPDATE_PASSWORD:
            return Object.assign({}, state, login);
        default:
            return state;
    }
};

export default loginReducer;