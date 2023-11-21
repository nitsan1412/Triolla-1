import React, { useState } from "react";
import "./Form.css";
import TextInput from "../../components/formInputs/TextInput";
import BigTextInput from "../../components/formInputs/BigTextInput";
import CheckboxField from "../../components/formInputs/CheckboxField";

import fetchData from "../../services/api";
import validateForm from "../../helper/validations";
interface FormData {
  subject?: string;
  email?: string;
  phone?: string;
  message?: string;
  subscribe?: boolean;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    subject: "",
    email: "",
    phone: "",
    message: "",
    subscribe: false,
  });
  const [errors, setErrors] = useState<FormData>({});
  const formInputs = ["subject", "email", "phone"];

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const resoponse = await validateForm(formData);
    await setErrors(resoponse.errors);
    if (Object.keys(resoponse.errors).length === 0) {
      try {
        fetchData("/contactUs", "post", formData);
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
  };

  const isDisabled = () => {
    if (
      formData.subject !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {
      return true;
    } else return false;
  };

  return (
    <div className="form-frame">
      {formInputs.map((input: string) => {
        return (
          <TextInput
            setFormData={setFormData}
            formData={formData}
            field={input}
            errors={errors}
          />
        );
      })}
      <BigTextInput
        setFormData={setFormData}
        formData={formData}
        field={"subject"}
        errors={errors}
      />
      <CheckboxField
        setFormData={setFormData}
        formData={formData}
        errors={errors}
        field={"subscribe"}
      />
      <button
        className="submitButton"
        disabled={isDisabled()}
        onClick={(e) => onSubmit(e)}
      >
        send
      </button>
    </div>
  );
}
