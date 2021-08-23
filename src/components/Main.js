import React from "react";
import firebase from "../utils/firebaseConfig";

const Main = () => {
  return (
    <div>
      <h4>Hello {firebase.auth().currentUser.displayName}</h4>
      <div onClick={() => firebase.auth().signOut()}>Disconnect</div>
    </div>
  );
};

export default Main;
