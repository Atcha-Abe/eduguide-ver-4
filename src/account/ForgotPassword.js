import useForm from "./useForm";
import validate from "./validateInfo";

function ForgotPassword() {
  const { values, errors } = useForm(validate);
  return (
    <div align="center">
      <h1> Forgot Password </h1>
      <img src="./icons/Line.png" className="line"></img>
      <form className="sign-form">
        <label className="input-label">
          Email:
          <input
            type="text"
            name="email"
            value={values.name}
            className="input-field"
            onChange=""
          />{" "}
          {errors.email && <p className="form-error">{errors.email}</p>}
        </label>
      </form>
    </div>
  );
}

export default ForgotPassword;
