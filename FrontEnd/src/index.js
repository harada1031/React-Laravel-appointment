import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/Store.jsx";
import "./i18n";

import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
<GoogleOAuthProvider clientId="http://localhost:3000">
  <Provider store={store}>
    
    <RouterProvider router={router} />
  </Provider>
  </GoogleOAuthProvider>
  // </React.StrictMode>

);
