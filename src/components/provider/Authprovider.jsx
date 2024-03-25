import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./firebase";

export const Authcontext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    // console.log(user?.email);

const [loading,setLoading]=useState(true)

const creatUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

const sigIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

// google login

const signInWithgoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}


const logOut =()=>{
    setLoading(true);
    return signOut(auth)
}

// Inside AuthProvider component
const updateProfileData = ({ name, photoURL }) => {
    const currentUser = auth.currentUser;
    return updateProfile(currentUser, {
        displayName: name,
        photoURL: photoURL
    });
}


useEffect(()=>{
 const unSubcripe = onAuthStateChanged(auth,currentUser =>{
        // console.log('user in the auth',currentUser);
        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
        unSubcripe()
    }
},[])
    const authInfo = {
        user,
        creatUser,
        sigIn,
        logOut,
        signInWithgoogle,
        updateProfileData,
        loading,
    }
    return (
    <Authcontext.Provider value={authInfo}>
            {
                children
            }
    </Authcontext.Provider>
    );
};

export default AuthProvider;