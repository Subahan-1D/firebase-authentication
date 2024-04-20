import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,FacebookAuthProvider, onAuthStateChanged, signOut,} from "firebase/auth";
import { createContext, useEffect, useState, } from "react";
import { auth } from "../../firebase/firebase.init";



export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const registerUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser =  (email,password) =>{
      return  signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = () =>{
       return signInWithPopup(auth,googleProvider)
    }
    const facebookLogin = () =>{
        return signInWithPopup(auth,facebookProvider)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    const authInfo = { registerUser,loginUser,user,setUser , googleLogin ,facebookLogin,logOut}
 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
         setUser(currentUser);
        } else {
         setUser(null)
        }
      });
      return () =>{
        unsubscribe()
      }


 },[])
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;