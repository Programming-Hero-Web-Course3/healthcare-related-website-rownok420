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

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const processLogin = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
            
    };

    const registerNewUser = (email, password) => {
        setIsLoading(true)
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
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    };

    const signInUsingFacebook = () => {
        setIsLoading(true)
        return signInWithPopup(auth, facebookProvider);
    };

    const signInUsingGitHub = () => {
        setIsLoading(true)
        return signInWithPopup(auth, gitHubProvider);
    };

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
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
        isLoading,
        setIsLoading,
    };
};

export default useFirebase;
