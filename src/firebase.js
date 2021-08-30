import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyAOpKIlcm_1-1eUZ0a4GAw79uVBYC5DJOc",
        authDomain: "auth-development-977b8.firebaseapp.com",
        projectId: "auth-development-977b8",
        storageBucket: "auth-development-977b8.appspot.com",
        messagingSenderId: "708034008081",
        appId: "1:708034008081:web:51a2cde8f6d0adc7750db0",
        measurementId: "G-22HJMJXS81"
    }
)

export const auth = app.auth()
export default app