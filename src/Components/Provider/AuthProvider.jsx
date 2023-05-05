import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';

export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const GoogleSignIn = (googleProvider) =>{
       return signInWithPopup(auth, googleProvider);
    }
    const GithubSignIn = (githubProvider) =>{
       return signInWithPopup(auth, githubProvider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            setUser(loggedUser);
        });
        return ()=> {
            unSubscribe();
        }
    },[])

    const authInfo = {GoogleSignIn, user, GithubSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;