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
    sendEmailVerification,
    sendPasswordResetEmail,
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

    const handleRegister = (email, password, name, isLogin) => {
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        if (!/(?=.[A-Z].*[A-Z])/.test(password)) {
            setError("Password must contain 2 uppercase");
            return;
        }

        isLogin
            ? processLogin(email, password)
            : registerNewUser(email, password, name);
    };

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const registerNewUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError("");
                // verifyEmail();
                setUserName(name);
            })
            .catch((error) => {
                setError(error.message);
            });
    };


    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {})
            .catch((error) => {
                setError(error.message);
            });
    };

    // const verifyEmail = () => {
    //     sendEmailVerification(auth.currentUser)
    //         .then(() => {})
    //         .catch((err) => {
    //             setError(err.message);
    //         });
    // };

    // const handleResetPassword = () => {
    //     sendPasswordResetEmail(auth, email)
    //         .then(() => {})
    //         .catch((err) => {
    //             setError(err.message);
    //         });
    // };




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
        handleRegister,
    };
};

export default useFirebase;
