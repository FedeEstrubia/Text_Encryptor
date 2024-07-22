import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import ParticlesBackground from './components/config/particles-config'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <ParticlesBackground/>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);