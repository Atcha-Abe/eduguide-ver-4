import { useState, useEffect } from "react";
import { callbackify } from "util";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    username: "",
    levelStrand: "",
    school: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSignup = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleSignup, values, handleSubmit, errors };
};

export default useForm;
