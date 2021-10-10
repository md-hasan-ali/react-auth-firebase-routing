import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";

const firebaseInitializetion = () => {
    initializeApp(firebaseConfig);
}
export default firebaseInitializetion;