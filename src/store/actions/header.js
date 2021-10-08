
export const setAccountDetails = (username) => {
    return ({
        type: "HEADER_ACTION",
        username,
    })
};


export const logoutUser = () => {
    return ({
        type: "LOGOUT_ACTION",
    })
};
