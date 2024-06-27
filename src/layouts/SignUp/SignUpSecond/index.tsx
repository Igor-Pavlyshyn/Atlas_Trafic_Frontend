import React from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import styles from "./style.module.scss";
import Arrow from "../../../assets/Arrow.svg";
import { Link, useNavigate } from "react-router-dom";

interface IFormInput {
  firstAnswer: string;
  secondAnswer: string;
  thirdAnswer: string;
}

type Props = {};

const SignUpSecond = (props: Props) => {
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSumbit: SubmitHandler<IFormInput> = (data) =>
    navigate("/signUp/verify");

  return (
    <div className={styles.container}>
      <h1 className={styles.container_title}>Security update questions</h1>
      <section className={styles.container_form}>
        <form
          onSubmit={handleSubmit(onSumbit)}
          className={styles.container_form_content}
        >
          <div className={styles.container_form_content_item}>
            <h1>Question 1</h1>
            <div className={styles.container_form_content_item_text}>
              <label>What was your favorite dish as a child?</label>
              <img src={Arrow} alt="Arrow" />
            </div>
            <input
              placeholder="Answer 1"
              {...register("firstAnswer")}
              type="text"
            />
          </div>
          <div className={styles.container_form_content_item}>
            <h1>Question 2</h1>
            <div className={styles.container_form_content_item_text}>
              <label>What was the name of your first pet?</label>
              <img src={Arrow} alt="Arrow" />
            </div>
            <input
              placeholder="Answer 2"
              {...register("secondAnswer")}
              type="text"
            />
          </div>
          <div className={styles.container_form_content_item}>
            <h1>Question 3</h1>
            <div className={styles.container_form_content_item_text}>
              <label>What was your favorite subject in school?</label>
              <img src={Arrow} alt="Arrow" />
            </div>
            <input
              placeholder="Answer 3"
              {...register("secondAnswer")}
              type="text"
            />
          </div>
          <button type="submit">Next</button>
        </form>
      </section>
    </div>
  );
};

export default SignUpSecond;
