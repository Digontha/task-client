import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    
    const [loading, setLoading] = useState(true)


    const auth = getAuth(app)

    const createUser = (email, password, name, image) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, name, image)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    })

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        createUser,
        signInUser,
        user,
        logOut,
        loading,
        googleLogin

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;