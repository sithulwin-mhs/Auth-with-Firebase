import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyD3Zk1w4E702MRnFwkJ2IUkwNCraoGhOgw",
        authDomain: "react-auth-firebase-5d718.firebaseapp.com",
        databaseURL:"https://react-auth-firebase-5d718-default-rtdb.firebaseio.com/",
        projectId: "react-auth-firebase-5d718",
        storageBucket: "react-auth-firebase-5d718.appspot.com",
        messagingSenderId: "58006790963",
        appId: "1:58006790963:web:92d6132875a0791b7b1446",
        measurementId: "G-F7PV2PCT4W"
    }
) 

export const auth = app.auth()
export default app
