import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./pages/Form/Form";

interface FormData {
  firstName?: string;
  lastName?: string;
  // Add other fields as needed
}

function App() {
  const [formData, setFormData] = useState<FormData>({});

  useEffect(() => {
    console.log("new formData", formData);
  }, [formData]);

  return (
    <div className="App">
      <header className="App-header">
        <p>my react playground</p>
      </header>
      {formData.firstName ? (
        `my name is ${formData.firstName} ${formData.lastName}`
      ) : (
        <Form setFormData={setFormData} formData={formData} />
      )}
    </div>
  );
}

export default App;
