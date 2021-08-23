import React from "react";
import { useEffect, useState } from "react";
import firebase from "./utils/firebaseConfig";
import Main from "./components/Main";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const App = () => {
  const [isSignIn, setisSignIn] = useState(false);

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setisSignIn(!!user);
      console.log(user);
    });
  }, []);

  return (
    <div className="app" style={{ textAlign: "center" }}>
      {isSignIn ? (
        <Main />
      ) : (
        <div className="login-page">
          <h1>Firebase Auth</h1>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      )}
    </div>
  );
};

export default App;
