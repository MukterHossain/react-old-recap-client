// import { useEffect, useState } from "react";
// // import app from "../firebase/firebase.config";
// import AuthContext from "./auth-context";
// import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import auth from "../firebase/firebase.config";





// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

//     const createUser =(email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     useEffect(() =>{
//         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
//             setUser(currentUser);
//             console.log('current user', currentUser)
//             setLoading(false)
//         });
//         return ()=> {
//             return unsubscribe()
//         }
        
//     },[])


//   const authInfo = {user, loading, createUser}
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// export default auth;




// VITE_apiKey=AIzaSyCmjXLgZhAToOW3h0rxDKZGXus2dIAhiyE
// VITE_authDomain=react-old-recap-client-ee959.firebaseapp.com
// VITE_projectId=react-old-recap-client-ee959
// VITE_storageBucket=react-old-recap-client-ee959.firebasestorage.app
// VITE_messagingSenderId=533476181634
// VITE_appId=1:533476181634:web:a40691bd8de9da2060569b