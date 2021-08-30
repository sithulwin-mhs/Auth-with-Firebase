import React, { createContext,useState,useEffect } from 'react'
import { auth } from '../firebase'

export const AuthContext = createContext(); 

// export const useAuth = () => {
// return useContext(AuthContext)
// }

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState()

    const signup = (email,password) => {
        return auth.createUserWithEmailandPassword(email,password)
    }

    

    useEffect(()=>{
       const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
        })
        return unsubscribe
    },[])

    const value = {
        currentUser,
        signup
    }
    return (
        <AuthContext.Provider value={{ value }}>
           {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
