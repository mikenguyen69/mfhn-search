import firebaseConfig from "./config";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
    }
}

const firebase = new Firebase();
export default firebase;
