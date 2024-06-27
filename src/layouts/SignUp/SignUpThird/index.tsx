import React, { useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import styles from "./style.module.scss";
import Arrow from "../../../assets/Arrow.svg";
import Pencil from "../../../assets/Pencil.svg";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";

interface IFormInput {
  firstAnswer: string;
  secondAnswer: string;
  thirdAnswer: string;
}

type Props = {};

const SignUpThird = (props: Props) => {
  const [otp, setOtp] = useState<string | undefined>();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.container_title}>Verify your email</h1>
      <section className={styles.container_form}>
        <div className={styles.container_form_content}>
          <div className={styles.container_form_content_items}>
            <div className={styles.container_form_content_item}>
              We just sent a 4 digit code to <br /> <span>name@gmail.com</span>
            </div>
            <img src={Pencil} alt="Pencil" width={24} height={24} />
          </div>
          <div className={styles.container_form_content_item}>
            <label>Code:</label>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              containerStyle={{ gap: "20px" }}
              //   renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <button type="submit" onClick={() => navigate("/")}>
            Verify email
          </button>
        </div>
      </section>
    </div>
  );
};

export default SignUpThird;
