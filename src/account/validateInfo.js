import validator from "validator";

export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required";
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = "Enter a valid name";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.levelStrand.trim()) {
    errors.levelStrand = "Level/Strand required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters";
  } else if (
    (validator.password,
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    errors.password = "Password is strong";
  } else {
    errors.password = "Password is not strong";
  }

  if (!values.password2) {
    errors.password2 = "Confirm Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
