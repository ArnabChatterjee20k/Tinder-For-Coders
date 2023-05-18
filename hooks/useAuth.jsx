import { createContext, useContext, useEffect, useState ,useMemo} from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { EXPO_CLIENT_ID ,ANDROID_CLIENT_ID} from "../env";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  console.log(auth.currentUser)
  useEffect(() => {
    // as it is returning unsubscribe so it will be automatically unsubscribed
    // it will listen for all the auth events
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // logged in
        setUser(user);
      } else {
        // not logged in
        setUser(null);
      }

      setLoadingInitial(false);
    });
  }, []);

  WebBrowser.maybeCompleteAuthSession();
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: EXPO_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
  });

  async function signInWithGoogle() {
    setLoading(true);
    const data = await promptAsync();
    const { type, authentication } = data;
    try {
      if (type === "success") {
        const credential = GoogleAuthProvider.credential(
          authentication.idToken,
          authentication.accessToken
        );
        const result = await signInWithCredential(auth, credential);

        return result;
      }
      // return Promise.reject();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function logOut() {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  // uncache or change the value when values in the dependency array changes
  const values = useMemo(()=>{
    return {
      user,
      signInWithGoogle,
      request,
      loading,
      logOut
    }
  },[user,loading,error,promptAsync])
  return (
    <AuthContext.Provider
      value={values}
    >
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}