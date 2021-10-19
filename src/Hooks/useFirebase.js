import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    // const handleRegister = (email, password, name, isLogin) => {
    //     if (password.length < 6) {
    //         setError("Password must be at least 6 characters long");
    //         return;
    //     }

    //     if (!/(?=.[A-Z].*[A-Z])/.test(password)) {
    //         setError("Password must contain 2 uppercase");
    //         return;
    //     }

    //     isLogin
    //         ? processLogin(email, password)
    //         : registerNewUser(email, password, name);
    // };


    const processLogin = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
            
    };

    const registerNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            
    };


    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {})
            .catch((error) => {
                setError(error.message);
            });
    };

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const signInUsingFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    };

    const signInUsingGitHub = () => {
        return signInWithPopup(auth, gitHubProvider);
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, [auth]);

    return {
        user,
        signInUsingGoogle,
        signInUsingFacebook,
        signInUsingGitHub,
        logOut,
        error,
        setError,
        processLogin,
        registerNewUser,
        setUserName,
    };
};

export default useFirebase;
