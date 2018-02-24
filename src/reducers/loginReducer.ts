import { LoginObject } from '../objects/loginObject';

interface LoginState  {
    roles: Array<string>;
    username: string;
    password: string;
    token: string;
}

const initialLoginState: LoginState = {
    roles: [],
    username: '',
    password: '',
    token: '',
};

const loginReducer = (state: LoginState = initialLoginState, loginObject: LoginObject) => {
    switch (loginObject.action) {
        case 'LOGIN':
            // some thunk thing
            return state;
        case 'UPDATE_USERNAME':
            return {
                ...state, loginObject
            };
        case 'UPDATE_PASSWORD':
            return {
                ...state, loginObject
            };
        default:
            return state;
    }
};

export default loginReducer;