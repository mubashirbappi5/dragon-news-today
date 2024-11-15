import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/Firebase.config';
export  const AuthContext =  createContext()
const AuthProvider = ({children}) => {
   const [user,setuser]=useState(null)
   const [loading,setloading] = useState(true)
   

   const createuser = (email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
   }


   const signinuser = (email,password) =>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
   const updateuser =(profile)=>{
    return updateProfile(auth.currentUser,profile)
   }


   const signoutuser =()=>{
    setloading(true)
    return signOut(auth)
   
   
   }


    const Authinfo = {
        user,
        setuser,
        createuser,
        signoutuser,
        signinuser,
        setloading,
        loading,
        updateuser,

    
    
    }
     
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser)
            setloading(false)
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