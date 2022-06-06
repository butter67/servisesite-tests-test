import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "./chakraStyle/Theme";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/cabin/500.css";
import "@fontsource/noto-sans-jp/500.css";
import "@fontsource/inter";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import "@fontsource/roboto";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  //<StrictMode>
  <BrowserRouter>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
  //</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
