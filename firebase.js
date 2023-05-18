import { initializeApp } from "firebase/app";
import {initializeAuth , getAuth} from "firebase/auth";
import {getReactNativePersistence} from "firebase/auth/react-native"
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./env";
import AsyncStorage from "@react-native-async-storage/async-storage";


const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
});
// export const auth = getAuth(app)
export const db = getFirestore(app);