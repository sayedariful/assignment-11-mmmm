import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

//  auth context
export const AuthContext = createContext();
const auth = getAuth(app);

// google provider
const googleProvider = new GoogleAuthProvider();

// github provider
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  // loading
  const [loading, setLoading] = useState(true);
  //  create user with email and password
  const userCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user sign in
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user login with email
  const loginGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // user login with gihub
  const loginGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // user log  out
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   user observer
  useEffect(() => {
    const unSubsCriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubsCriber();
  }, []);

  const authInfo = {
    user,
    loading,
    userCreate,
    userLogin,
    loginGoogle,
    loginGithub,
    userLogOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
