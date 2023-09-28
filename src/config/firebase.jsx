import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB_C2wZLOr_w4hZKENAYmHStt4ds1hiRGQ",
  authDomain: "fir-course-1bbec.firebaseapp.com",
  projectId: "fir-course-1bbec",
  storageBucket: "fir-course-1bbec.appspot.com",
  messagingSenderId: "1065665682889",
  appId: "1:1065665682889:web:e6b004d11cc71773e9dc18",
  measurementId: "G-NMVLHYCTY1",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)
