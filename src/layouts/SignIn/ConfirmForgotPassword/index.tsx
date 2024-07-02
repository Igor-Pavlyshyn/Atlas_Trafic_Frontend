import { useEffect } from "react";

import styles from "./style.module.scss";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { useAuthMutation } from "../../../redux/api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import BackArrow from "../../../assets/BackArrow.svg";
import { ReducersType } from "../../../redux/store";

type Props = {};

interface IFormInput {
  password: string;
  confirm_password: string;
}

const ConfirmForgotPassword = (props: Props) => {
  const navigate = useNavigate();

  const { email, otp } = useSelector(
    (state: ReducersType) => state.reducers.loginReducer
  );
  const [resetPassword, { error, isError, isSuccess }]: any = useAuthMutation();

  const { control, handleSubmit } = useForm<IFormInput>();
  const onSumbit: SubmitHandler<IFormInput> = ({
    password,
    confirm_password,
  }) => {
    resetPassword({
      url: "reset-password/",
      method: "POST",
      body: {
        email,
        otp,
        new_password: password,
        repeat_password: confirm_password,
      },
    });
  };

  useEffect(() => {
    if (!email || !otp) {
      navigate("/signIn/forgot-password");
    }
    if (isError) {
      alert(error?.data?.detail);
    }
    if (isSuccess) {
      navigate("/signIn");
    }
  }, [isSuccess, isError, email, otp]);

  return (
    <div className={styles.container}>
      <h1 className={styles.container_title}>Reset your password</h1>
      <section className={styles.container_form}>
        <form
          onSubmit={handleSubmit(onSumbit)}
          className={styles.container_form_content}
        >
          <div className={styles.container_form_content_item}>
            <label>New password</label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Required",
              }}
              render={({ field }) => <input {...field} />}
            />
            <p>
              Password must contain at least 6 characters, including 1 uppercase
              letter, 1 lowercase letter, 1 <br /> number, and 1 special
              character
            </p>
          </div>
          <div className={styles.container_form_content_item}>
            <label>Confirm Password</label>
            <Controller
              name="confirm_password"
              control={control}
              rules={{
                required: "Required",
              }}
              render={({ field }) => <input {...field} />}
            />
          </div>
          <button type="submit">Reset password</button>
        </form>
      </section>
      <Link to="/signIn" className={styles.container_back_arrow}>
        <img src={BackArrow} alt="BackArrow" />
        <div>Back</div>
      </Link>
    </div>
  );
};

export default ConfirmForgotPassword;
