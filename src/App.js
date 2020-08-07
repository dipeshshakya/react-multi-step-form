import React from "react";
import "./App.css";
import MaterialLayout from "./components/Layout/MaterialLayout";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <div className="App">
      <MaterialLayout>
        <CheckoutPage />
      </MaterialLayout>
    </div>
  );
}

export default App;
