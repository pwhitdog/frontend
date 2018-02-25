import { GET_USER, SET_TOKEN, UPDATE_PASSWORD, UPDATE_USERNAME } from '../constants';
import { LoginObject } from '../objects/loginObject';

const loginReducer = (state = {}, login: LoginObject) => {
    switch (login.type) {
        case GET_USER:
            // some thunk thing
            return state;
        case UPDATE_USERNAME:
            return Object.assign({}, state, login);
        case UPDATE_PASSWORD:
            return Object.assign({}, state, login);
        case SET_TOKEN:
            return Object.assign({}, state, login);
        default:
            return state;
    }
};

export default loginReducer;