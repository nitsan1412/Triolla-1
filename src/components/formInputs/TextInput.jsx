import React from "react";

export default function TextInput(props) {
  const changeData = (newValue) => {
    console.log(newValue);
    props.setFormData({ ...props.formData, [props.field]: newValue });
  };
  return (
    <>
      <label for="fname">{props.field}</label>

      <input
        type="text"
        id={props.field}
        onChange={(e) => changeData(e.target.value)}
      ></input>
    </>
  );
}

