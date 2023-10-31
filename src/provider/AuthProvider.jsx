import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../firebase/firebae.config';
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loggedIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const loggedOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            // const user = currentUser.email;
            const loggedUser = {email:currentUser?.email}
            console.log(loggedUser)
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
            }else{
                axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
            }
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const AuthInfo ={
        user,
        loading,
        createUser,
        loggedIn,
        loggedOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;