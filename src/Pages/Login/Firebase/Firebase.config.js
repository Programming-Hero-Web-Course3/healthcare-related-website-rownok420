console.log(process.env.REACT_APP_FIREBASE_API_KEY)

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;

// apiKey: "REACT_APP_FIREBASE_API_KEY",
//     authDomain: "REACT_APP_FIREBASE_AUTH_DOMAIN",
//     projectId: "REACT_APP_FIREBASE_PROJECT_ID",
//     storageBucket: "REACT_APP_FIREBASE_STORAGE_BUCKET",
//     messagingSenderId: "REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
//     appId: "REACT_APP_FIREBASE_APP_ID"

// apiKey: "AIzaSyAPpJUSlmVQwxad6etJSuAoemnalyQ8cuo",
//   authDomain: "simple-firebase-authenti-f7f79.firebaseapp.com",
//   projectId: "simple-firebase-authenti-f7f79",
//   storageBucket: "simple-firebase-authenti-f7f79.appspot.com",
//   messagingSenderId: "572836130364",
//   appId: "1:572836130364:web:0584f6ae08fa4c1919dd39"


// const firebaseConfig = {
//   apiKey: "AIzaSyAPpJUSlmVQwxad6etJSuAoemnalyQ8cuo",
//   authDomain: "simple-firebase-authenti-f7f79.firebaseapp.com",
//   projectId: "simple-firebase-authenti-f7f79",
//   storageBucket: "simple-firebase-authenti-f7f79.appspot.com",
//   messagingSenderId: "572836130364",
//   appId: "1:572836130364:web:0584f6ae08fa4c1919dd39"
// };