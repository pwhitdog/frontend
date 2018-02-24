export const onChangeLogin = (obj: {username: string, password: string, type: string}) => {
    return {
            type: obj.type,
            username: obj.username,
            password: obj.password
    };
};
