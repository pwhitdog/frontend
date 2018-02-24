import { LOGIN_USER, UPDATE_PASSWORD, UPDATE_USERNAME } from '../constants';

interface LoginState  {
    roles: Array<string>;
    username: string;
    password: string;
    token: string;
    type: string;
}

const loginReducer = (state = {}, login: LoginState) => {
    switch (login.type) {
        case LOGIN_USER:
            // some thunk thing
            return state;
        case UPDATE_USERNAME:
            return {
                ...state, login
            };
        case UPDATE_PASSWORD:
            return {
                ...state, login
            };
        default:
            return state;
    }
};

export default loginReducer;