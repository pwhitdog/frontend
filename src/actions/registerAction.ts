import { HANDLE_ERROR, SET_TOKEN } from '../constants';

export const onRegister = (obj: {password: string, username: string}) => {
    return(dispatch: (obj: {type: string, error: string }) => void) => {
        fetch('http://localhost:5000/api/Account/Register', {
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
                        error: '',
                    }
                );
            })
            .catch(error => {
                console.log(error);
                return dispatch({
                    type: HANDLE_ERROR,
                    error: error.toString(),
                });
            });
    };
};

export const onChangePassword1 = (obj: {password1: string, type: string}) => {
    return {
        type: obj.type,
        password1: obj.password1
    };
};

export const onChangePassword2 = (obj: {password2: string, type: string}) => {
    return {
        type: obj.type,
        password2: obj.password2
    };
};

export const onChangeUsername = (obj: {username: string, type: string}) => {
    return {
        type: obj.type,
        username: obj.username,
    };
};