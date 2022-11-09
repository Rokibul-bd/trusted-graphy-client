import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loadding, setLoadding] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
    }
    const createUser = (email, password) => {
        setLoadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoadding(false)
        })
        return () => {
            unSubcribe()
        }
    }, [])

    const AuthInfo = {
        createUser,
        logIn,
        loadding,
        user,
        logOut,
        googleSignIn

    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;