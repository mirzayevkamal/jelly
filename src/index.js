import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MainProvider from "./Providers/MainProvider";
import AuthJelly from "./Providers/AuthProvider";

ReactDOM.render(
  <MainProvider.Provider>
    <AuthJelly.Provider>
      <App />
    </AuthJelly.Provider>
  </MainProvider.Provider>,
  document.getElementById("root")
);
