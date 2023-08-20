import React from "react";
import { Toast } from "./Toast";

function App() {
  return (
    <div>
      <Toast title="Teste" message="teste" />
      <Toast title="Teste" message="teste" type="danger" />
      <Toast title="Teste" message="teste" type="success" />
    </div>
  );
}

export default App;
