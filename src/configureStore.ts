import { applyMiddleware, createStore, combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    login: loginReducer
} as {});

// const middleware: Array<{}> = [];

export default function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware())
    );
}