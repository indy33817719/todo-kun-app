import { useState, useEffect } from "react";
import fire from "firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "stores/reducers";
import { authActions } from "actions/authAction";

export const useAuthHook = () => {
  const userAuth = useSelector((state: RootState) => state.auth.userAuth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  // ユーザー入力値はローカルstateで問題ない？

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    console.log("clicked");
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        // ユーザーはサインイン中
        clearInputs();
        const loginUser = fire.auth().currentUser;
        dispatch(authActions.updateUserAuth(loginUser));
      } else {
        dispatch(authActions.updateUserAuth(""));
      }
    });
  };

  useEffect(() => {
    authListener();
    console.log(userAuth);
  }, []);

  return {
    email,
    password,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    handleLogin,
    handleLogout,
    handleSignup,
  };
};
