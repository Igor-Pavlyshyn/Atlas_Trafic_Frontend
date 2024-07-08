import { SubmitHandler, useForm, Controller } from "react-hook-form";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../../../redux/slices/loginSlice";

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { control, register, handleSubmit } = useForm<IFormInput>();
  const onSumbit: SubmitHandler<IFormInput> = ({
    confirmPassword,
    password,
    email,
  }) => {
    if (password !== confirmPassword) {
      return alert("Password and Confirm Password should be same");
    }
    dispatch(loginActions.addFirstStepInfo({ email, password }));
    navigate("/signUp/security");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.container_title}>Sign up</h1>
      <section className={styles.container_form}>
        <form
          onSubmit={handleSubmit(onSumbit)}
          className={styles.container_form_content}
        >
          <div className={styles.container_form_content_item}>
            <label>Full Name</label>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Required",
                validate: (value) => {
                  const parts = value.split(" ");
                  if (
                    parts.length === 2 &&
                    parts.every((word) => /^[A-Z]/.test(word))
                  ) {
                    return true;
                  }
                  return "Full Name must consist of two words, each starting with an uppercase letter";
                },
              }}
              render={({ field }) => <input {...field} />}
            />
          </div>
          <div className={styles.container_form_content_item}>
            <label>Email</label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format or phone",
                },
              }}
              render={({ field }) => <input {...field} />}
            />
            {/* {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
              )} */}
          </div>
          <div className={styles.container_form_content_item}>
            <label>Password</label>
            <input {...register("password")} type="password" />
          </div>
          <div className={styles.container_form_content_item}>
            <label>Confirm Password</label>
            <input {...register("confirmPassword")} type="password" />
          </div>
          <button type="submit">Next</button>
          <span>
            Alredy have an account? <Link to="/signIn">Sign in</Link>
          </span>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
