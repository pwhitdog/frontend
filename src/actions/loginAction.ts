import { GET_USER, SET_TOKEN } from '../constants';
import { Dispatch } from 'react-redux';

export const onChangeUsername = (obj: {username: string, type: string}) => {
    return {
            type: obj.type,
            username: obj.username,
    };
};

export const onChangePassword = (obj: {password: string, type: string}) => {
    return {
            type: obj.type,
            password: obj.password
    };
};

export const getUser = () => {
    return {
        type: GET_USER
    };
};

export const onLogin = (obj: {password: string, username: string}) => {
    let dispatch: Dispatch<{}>;
    return dispatch = () => {
        fetch('http://localhost:5000/api/Account/Login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: 'admin@nope.com', password: 'herpDerp1!'})
        })
            .then(res => res.json())
            .then(body => {
                return dispatch({
                    type: SET_TOKEN,
                    token: body ? body.toString() : ''
                });
        });
    };
};
