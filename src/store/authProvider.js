import { useState } from "react";

import AuthContext from "./auth-context";
import {
  googleSignIn,
  googleSignOut,
  authStateChecker,
} from "../auth/firebaseAuth";

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  async function login() {
    const { user: userInfo } = await googleSignIn();

    setUser(userInfo);
  }

  async function logout() {
    await googleSignOut();

    setUser(null);
  }

  authStateChecker((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  const authContext = {
    user,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
