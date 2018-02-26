import { HANDLE_ERROR, SET_TOKEN } from '../constants';

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

export const onLogin = (obj: {password: string, username: string}) => {
    return (dispatch: (obj: {type: string, token: string, error: string}) => void) => {
        fetch('http://localhost:5000/api/Account/Login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: obj.username, password: obj.password})
        })
            .then(res => res.json())
            .then(body => {
                return dispatch({
                        type: SET_TOKEN,
                        token: body ? body.toString() : '',
                        error: ''
                    }
                );
            })
            .catch(error => {
                return dispatch({
                    type: HANDLE_ERROR,
                    token: '',
                    error: error.toString()
                });
            });
    };
};
