import useForm from "./useForm";
import validate from "./validateInfo";

function ForgotPassword() {
  const { values, errors } = useForm(validate);
  return (
    <div>
      <h1> test </h1>
      <form>
        <div>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={values.name}
              className="field"
              onChange=""
            />{" "}
            {errors.email && <p className="form-error">{errors.email}</p>}
          </label>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
