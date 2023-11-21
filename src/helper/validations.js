export default async function validateForm(data) {
  const FIELDS = {
    email: {
      validate: !/\S+@\S+\.\S+/.test(data?.email),
      error: "Invalid email format",
    },
    phone: {
      validate: !/^\+\d{12}$/.test(data?.phone),
      error: "phone format should be +############",
    },
  };

  const errors = {};

  await Object.keys(data).forEach((field) => {
    console.log("data", data);
    if (!data[field] && requiredFields.includes(data[field])) {
      errors[field] = `${field} is a required field`;
    } else if (FIELDS[field].validate) errors[field] = FIELDS[field].error;
  });

  return { errors };
}
export const requiredFields = ["email", "subject", "message"];
