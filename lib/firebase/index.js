// Build the App instance of Firebase
import { initializeApp } from '@firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getAuth } from '@firebase/auth'
import firebaseConfig from './firebaseConfig'


const app = initializeApp(firebaseConfig) // connects us to firebase w/ firebaseConfig
const db = getFirestore(); // returns a connection to the firestore database
const auth = getAuth(); // returns a connection to the authentication service

export {app, db, auth} // exporting these connections if needed