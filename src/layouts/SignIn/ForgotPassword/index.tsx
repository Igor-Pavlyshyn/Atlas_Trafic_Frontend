import React, { useEffect } from "react";

import styles from "./style.module.scss";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { IFormInput } from "..";
import { useAuthMutation } from "../../../redux/api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../../../redux/slices/loginSlice";
import BackArrow from "../../../assets/BackArrow.svg";

type Props = {};

const ForgotPassword = (props: Props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSumbit: SubmitHandler<IFormInput> = ({ email }) => {
    dispatch(loginActions.addFirstStepInfo({ email, password: null }));
    sendOtp({
      url: "send-otp/",
      method: "POST",
      body: {
        email,
      },
    });
  };
  const [sendOtp, { data, error, isSuccess, isError }]: any = useAuthMutation();

  useEffect(() => {
    if (isError) {
      alert(error?.data?.detail);
    }
    if (isSuccess) {
      navigate("/signIn/verify");
    }
  }, [isSuccess, isError]);

  return (
    <div className={styles.container}>
      <h1 className={styles.container_title}>Reset your password</h1>
      <section className={styles.container_form}>
        <form
          onSubmit={handleSubmit(onSumbit)}
          className={styles.container_form_content}
        >
          <div className={styles.container_form_content_item}>
            Enter your email and we'll <br /> send you a code to reset your
            password
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
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <input placeholder="name@gmail.com" {...field} />
              )}
            />
          </div>
          <button type="submit">Send reset link</button>
        </form>
      </section>
      <Link to="/signIn" className={styles.container_back_arrow}>
        <img src={BackArrow} alt="BackArrow" />
        <div>Back</div>
      </Link>
    </div>
  );
};

export default ForgotPassword;
