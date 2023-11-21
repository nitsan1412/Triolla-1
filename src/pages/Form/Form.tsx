import React, { useState } from "react";
import "./Form.css";
import TextInput from "../../components/formInputs/TextInput";
interface FormProps {
  setFormData: any;
  formData: any;
}
export default function Form(props: FormProps) {
  const [tempData, setTempData] = useState({});

  const onSubmit = () => {
    props.setFormData(tempData);
    console.log("tempData", tempData);
  };
  return (
    <div className="form-frame">
      <TextInput
        setFormData={setTempData}
        formData={tempData}
        field="firstName"
      >
        שם פרטי
      </TextInput>
      <TextInput setFormData={setTempData} formData={tempData} field="lastName">
        שם משפחה
      </TextInput>
      <button onClick={() => onSubmit()}>שמירה</button>
    </div>
  );
}
