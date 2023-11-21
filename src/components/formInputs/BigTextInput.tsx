import React from "react";
import { requiredFields } from "../../helper/validations";
interface FormProps {
  setFormData: any;
  formData: any;
  field: string;
  errors: any;
}
export default function GigTextInput(props: FormProps) {
  const changeData = (newValue: string) => {
    props.setFormData({ ...props.formData, [props.field]: newValue });
  };

  return (
    <>
      <label className="form-input-lable">
        {requiredFields.includes(props.field) && "*"}
        {props.field[0].toUpperCase()}
        {props.field.substring(1)}
      </label>
      <textarea
        rows={4}
        cols={30}
        className={
          props.errors && props.errors[props.field]
            ? "input-error"
            : "input-box"
        }
        id={props.field}
        onChange={(e) => changeData(e.target.value)}
      />
    </>
  );
}
