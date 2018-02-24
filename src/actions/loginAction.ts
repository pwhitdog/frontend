export const onChangeUsername = (username: string, password: string) => {
    return {
            action: 'UPDATE_USERNAME',
            username,
            password
    };
};

export const onChangePassword = (username: string, password: string) => {
    return {
            action: 'UPDATE_PASSWORD',
            username,
            password
    };
};
