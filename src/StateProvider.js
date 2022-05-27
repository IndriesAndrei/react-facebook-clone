// using React Context API
import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// wrapping the app inside the StateProvider
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pulling data from StateProvider
export const useStateValue = () => useContext(StateContext);

