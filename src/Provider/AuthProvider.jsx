import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import PropTypes from 'prop-types';

export const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)


    const  createUser = (email , password) =>{
         setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const loginUser = (email , password ) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }


    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth , createUser=>{
            setUser(createUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const logOut = ()=>{
        return signOut(auth)
    }

const authData = { user , createUser , loginUser , logOut ,loading }
    return (
        <authContext.Provider value={authData}>
                {children}
        </authContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.prototype = {
    children :  PropTypes.node.isRequired,
}