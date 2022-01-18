import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA3xYWxQbt6pF8IDV4_nCDl4BWLkspQ2T4",
    authDomain: "tomatia.firebaseapp.com",
    databaseURL: "https://tomatia-default-rtdb.firebaseio.com",
    projectId: "tomatia",
    storageBucket: "tomatia.appspot.com",
    messagingSenderId: "461337118122",
    appId: "1:461337118122:web:81760b448effe0efb917d3",
    measurementId: "G-LJ39EGVNR6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);