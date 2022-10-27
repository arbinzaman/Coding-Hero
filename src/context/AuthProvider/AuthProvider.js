import React from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from  'firebase/auth'
import { createContext } from 'react';
import app from '../../firebase/firebase.init'
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth (app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // Goggle Login 
    const ProviderLogin = (Provider) =>{
        return signInWithPopup (auth, Provider);
    }

        // Email Password Login 
    const createUser =(email,password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword (auth , email, password);
    }

    // signOut
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
            console.log('User Inside State change', currentUser);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo ={ user , ProviderLogin , logOut ,createUser,signIn}
    return (
       
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
     
    );
};

export default AuthProvider;