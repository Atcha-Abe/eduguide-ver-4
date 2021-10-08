


export const header = (state = '', action) => {
    switch(action.type) {
        case "HEADER_ACTION":
            return action.username;
        case "LOGOUT_ACTION":
            return '';
        default:
            return state;
    }

}