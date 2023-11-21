import React from "react";

interface FormProps {
  setFormData: any;
  formData: any;
  field: string;
  errors: any;
}

export default function CheckboxField(props: FormProps) {
  const changeData = () => {
    props.setFormData({
      ...props.formData,
      [props.field]: !props.formData[props.field],
    });
  };

  return (
    <>
      <input
        type="checkbox"
        id={props.field}
        value={props.formData[props.field]}
        onChange={() => changeData()}
      />
      <label>I'd like to receive product tips and updates</label>
    </>
  );
}
