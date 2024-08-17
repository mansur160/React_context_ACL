import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
    isAuthenticated: false,
};

// Reducer to manage state changes
const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};

// Create context
export const AuthContext = createContext();

// Context provider component
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
