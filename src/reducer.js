// initial state of the reducer
export const initialState = {
    user: null,
};

// actions -> dispatch actions to the reducer
export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        // listening to the actions
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            };

            default: 
                return state;
    }
};

export default reducer;