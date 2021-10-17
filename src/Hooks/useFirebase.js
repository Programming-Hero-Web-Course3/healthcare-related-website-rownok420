import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)

    };

    const signInUsingFacebook = () => {
        return signInWithPopup(auth, facebookProvider)

    };

    const signInUsingGitHub = () => {
        return signInWithPopup(auth, gitHubProvider)
        
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
    };
};

export default useFirebase;
