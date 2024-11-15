import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/Firebase.config';
export  const AuthContext =  createContext()
const AuthProvider = ({children}) => {
   const [user,setuser]=useState(null)
   
console.log(user)
   const createuser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   }


   const signinuser = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
   }


   const signoutuser =()=>{
    return signOut(auth)
   
   
   }


    const Authinfo = {
        user,
        setuser,
        createuser,
        signoutuser,
        signinuser,
    
    
    }
     
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser)
        })
        return()=>{
            unsubscribe()
        }
     },[])
    return (
        <AuthContext.Provider value={Authinfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;