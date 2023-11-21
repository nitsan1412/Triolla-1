import React from "react";
import "./App.css";
import Form from "./pages/Form/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Contact us</p>
      </header>
      <hr
        style={{
          backgroundColor: "#08263F",
          width: "100%",
          marginBottom: "3rem",
        }}
      ></hr>
      <Form />
    </div>
  );
}

export default App;
