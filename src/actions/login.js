export const login = (user) => {
    return {
        type: 'LOGIN_USER',
        user: user
    }
}