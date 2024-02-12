export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, login: action.payload };
        case "LOGOUT":
            return { ...state, login: action.payload };
        default:
            return state;
    }


}