import React, { createContext, useState, useEffect } from 'react';

import app from '../utils/firebase'

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
    const [currentUser, serCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            serCurrentUser(user);
            setPending(false);
        });
    }, []);

    if (pending) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider value={{
            currentUser
        }}>
            { children }
        </AuthContext.Provider>
    );
}