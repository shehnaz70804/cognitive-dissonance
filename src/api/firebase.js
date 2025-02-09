import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut 
} from "firebase/auth";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs 
} from "firebase/firestore";

// 🔥 Your Firebase Config (from Firebase Console > Project Settings)
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();

// Sign In with Google
const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("User Signed In:", result.user);
        return result.user;
    } catch (error) {
        console.error("Google Sign-In Error:", error);
    }
};

// Sign Out
const logout = async () => {
    await signOut(auth);
};

// **💾 Firestore Functions (Add & Get Tasks)**
const addTask = async (task) => {
    try {
        await addDoc(collection(db, "tasks"), task);
        console.log("Task added!");
    } catch (error) {
        console.error("Error adding task:", error);
    }
};

const getTasks = async () => {
    const tasksSnapshot = await getDocs(collection(db, "tasks"));
    return tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Export all functions
export { auth, db, signInWithGoogle, logout, addTask, getTasks };
