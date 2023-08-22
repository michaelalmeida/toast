import React from "react";
import { ToastProvider } from "./Components/Toast";
import { Home } from "./Components/Home";

function App() {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  );
}

export default App;
