import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    }
    const secretInfo = document.querySelector("#bootstrap-current-user")
    secretInfo.parentElement.removeChild(secretInfo)

  }
  const store = configureStore(preloadedState);
  delete window.currentUser;
  // debugger
  // debugger
  

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={ store }/>, root);
});