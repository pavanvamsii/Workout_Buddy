import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/index.css";
import Workoutcontext from "./Context/Workoutcontext";
import AuthContext from "./Context/Authcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <AuthContext>
    <Workoutcontext>
      <App/>
    </Workoutcontext>
  </AuthContext>
  </>
);
