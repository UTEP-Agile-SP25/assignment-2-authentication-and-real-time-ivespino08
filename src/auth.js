import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { auth, db } from "./config";
import { doc, setDoc } from "firebase/firestore";

onAuthStateChanged(auth, async(user) => {
    if(user){
        console.log("User signed in: ", user.email)
    }else {
        console.log("No user is signed in")
    }
})

export async function createAccount(firstName, lastName, email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        
        console.log("User signed up: ", userCredential.user.email)
        console.log("User ID: ", userCredential.user.uid)
        
        const userRef = doc(db, "users", userCredential.user.uid)

        await setDoc(userRef, {
            firstName: firstName,
            lastName: lastName,
            timestamp: new Date()
        })

    } catch (error) {
        console.error("Error on account creation", error.message)
    }
    
}

export async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log("User is signed in:", userCredential.user.email)
        window.location.href = "songlist.html"
    } catch (error) {
        console.error("Error retrieving user data", error.message)
    }
    
}

export async function logOut() {
    try {
        console.log("User is logged out")
        await signOut(auth)
    } catch (error) {
        console.error("Error on logout attempt", error.message)
    }
}