import React, { createContext, useState, useEffect } from "react";
import { auth, signInWithGoogle, logout } from "../api/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
