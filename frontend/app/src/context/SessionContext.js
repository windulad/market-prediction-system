import React, { createContext, useState, useEffect } from 'react';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [sessionValue, setSessionValue] = useState(null);

    // Load session from localStorage on mount
    useEffect(() => {
        const savedSession = localStorage.getItem('sessionToken');
        if (savedSession) {
            setSessionValue(savedSession);
        }
    }, []);

    // Optional: sync to localStorage when sessionValue changes
    useEffect(() => {
        if (sessionValue) {
            localStorage.setItem('sessionToken', sessionValue);
        } else {
            localStorage.removeItem('sessionToken');
        }
    }, [sessionValue]);

    return (
        <SessionContext.Provider value={{ sessionValue, setSessionValue }}>
            {children}
        </SessionContext.Provider>
    );
};
