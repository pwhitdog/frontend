import * as React from 'react';

export const loginAction = (username: string, password: string) => {
    return {
        action: 'LOGIN',
        username,
        password
    };
};

export const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    return {
        action: 'UPDATE_USERNAME',
        username: event.currentTarget.value,
    };
};

export const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    return {
        action: 'UPDATE_USERNAME',
        password: event.currentTarget.value,
    };
};
