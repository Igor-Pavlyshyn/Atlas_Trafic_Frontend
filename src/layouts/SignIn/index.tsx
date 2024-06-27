import React from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import styles from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";

interface IFormInput {
  email: string;
  password: string;
}

type Props = {};

const SignIn = (props: Props) => {
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSumbit: SubmitHandler<IFormInput> = (data) => navigate("/");

  return (
    <div className={styles.container}>
      <h1 className={styles.container_title}>Sign in</h1>
      <section className={styles.container_form}>
        <form
          onSubmit={handleSubmit(onSumbit)}
          className={styles.container_form_content}
        >
          <div className={styles.container_form_content_item}>
            <label>Email or phone</label>
            {/* <input {...register("email")} /> */}
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
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
            <p>Forgot password?</p>
          </div>
          <button type="submit">Sign in</button>
          <span>
            Don’t have an account yet? <Link to="/signUp">Sign up now</Link>
          </span>
        </form>
      </section>
    </div>
  );
};

export default SignIn;
