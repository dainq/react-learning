// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,query,where,getDocs} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABjuToWuDNJ8yHRceu-E_g_0PPYNQMsfw",
  authDomain: "testing-50f28.firebaseapp.com",
  projectId: "testing-50f28",
  storageBucket: "testing-50f28.appspot.com",
  messagingSenderId: "276584137551",
  appId: "1:276584137551:web:94d919d95f71f25f913b3a",
  measurementId: "G-DRKGTH1RJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
const db = getFirestore(app);
const auth = getAuth(app);
const q = query(collection(db, "Todo"))

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

async function getTodos() {
  const todosRef = db.collection('Todo');
  const snapshot = await todosRef.get();
  const todos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return todos;
}

// Get todos for the current user (assuming a 'uid' field in todos)
async function getUserTodos() {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('User not logged in');
  }
  const todosRef = db.collection('todos').where('uid', '==', user.uid);
  const snapshot = await todosRef.get();
  const todos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return todos
}
// Add any authentication logic using auth here

export default { app, db, auth };