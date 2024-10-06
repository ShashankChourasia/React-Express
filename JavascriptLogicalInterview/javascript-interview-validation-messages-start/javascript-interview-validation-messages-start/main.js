// Format backend validation message to frontend format

const backendErrors = {
  email: {
    errors: [
      {
        message: "Can't be blank",
      },
    ],
  },
  password: {
    errors: [
      {
        message: "Must contain symbols in different case",
      },
      {
        message: "Must be at least 8 symbols length",
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: "Must match with password",
      },
    ],
  },
};

// ["Email: Can't be blank", "Password: Must contain symbols, Must be at least 8 symbols", "passwordConfirmation: Must match with password"]
const humanReadableErrors = Object.entries(backendErrors).map(
  ([field, value]) => {
    const fieldMessages = value.errors.map((error) => error.message).join(", ");
    const capitalizedField = field.charAt(0).toUpperCase() + field.slice(1);
    return `${capitalizedField}: ${fieldMessages}`;
  }
);

console.log(humanReadableErrors);
