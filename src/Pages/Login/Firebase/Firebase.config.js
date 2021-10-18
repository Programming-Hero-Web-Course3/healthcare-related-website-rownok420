console.log(process.env);

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,

};

export default firebaseConfig;

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,


// apiKey: "AIzaSyCGJDqDp0Bq6jNy-PBeT1dfEhjJiefzzvg",
//     authDomain: "health-care-ec6f7.firebaseapp.com",
//     projectId: "health-care-ec6f7",
//     storageBucket: "health-care-ec6f7.appspot.com",
//     messagingSenderId: "906565328365",
//     appId: "1:906565328365:web:c644571eb53a60f2731be4",


// REACT_APP_FIREBASE_API_KEY=AIzaSyCGJDqDp0Bq6jNy-PBeT1dfEhjJiefzzvg
// REACT_APP_FIREBASE_AUTH_DOMAIN=health-care-ec6f7.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=health-care-ec6f7
// REACT_APP_FIREBASE_STORAGE_BUCKET=health-care-ec6f7.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=906565328365
// REACT_APP_FIREBASE_APP_ID=1:906565328365:web:c644571eb53a60f2731be4