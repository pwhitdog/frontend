import { applyMiddleware, createStore, combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    login: loginReducer
} as {});

const middleware = [thunk];

export default function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}