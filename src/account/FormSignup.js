import { logMissingFieldErrors } from "@apollo/client/core/ObservableQuery";
import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
const FormSignup = () => {
  const { handleSignup, values, handleSubmit, errors } = useForm(validate);
  return (
    <div align="left">
      <form className="sign-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              className="field"
              value={values.name}
              onChange={handleSignup}
            />{" "}
            {errors.name && <p className="form-error">{errors.name}</p>}
          </label>
          <br></br>
          <label>
            Email:
            <input
              type="text"
              name="email"
              className="field"
              value={values.email}
              onChange={handleSignup}
            />{" "}
            {errors.email && <p className="form-error">{errors.email}</p>}
          </label>
          <br></br>
          <label>
            Username:
            <input
              type="text"
              name="username"
              className="field"
              value={values.username}
              onChange={handleSignup}
            />{" "}
            {errors.username && <p className="form-error">{errors.username}</p>}
          </label>
          <br></br>
          <label>
            Level/Strand:
            <input
              type="text"
              name="levelStrand"
              className="field"
              value={values.levelStrand}
              onChange={handleSignup}
            />{" "}
            {errors.levelStrand && (
              <p className="form-error">{errors.levelStrand}</p>
            )}
          </label>
          <br></br>
          <label>
            School:
            <input
              type="text"
              name="school"
              className="field"
              value={values.school}
              onChange={handleSignup}
            />{" "}
            {errors.school && <p className="form-error">{errors.school}</p>}
          </label>
          <br></br>
          <label>
            Password:
            <input
              type="password"
              name="password"
              className="field"
              value={values.password}
              onChange={handleSignup}
            />{" "}
            {errors.password && <p className="form-error">{errors.password}</p>}
          </label>
          <br></br>
          <label>
            Confirm Password:
            <input
              type="password"
              name="password2"
              className="field"
              value={values.password2}
              onChange={handleSignup}
            />{" "}
            {errors.password2 && (
              <p className="form-error"> {errors.password2}</p>
            )}
          </label>
        </div>
        <button className="reg-btn" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
