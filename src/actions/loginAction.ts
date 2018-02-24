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
