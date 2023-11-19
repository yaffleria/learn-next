import { DevTool } from "@hookform/devtools";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

import styles from "./form.module.css";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const Tester: NextPage = () => {
  const { register, handleSubmit, control, formState } = useForm<FormValues>();
  const { errors } = formState

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: { value: true, message: "Username is required" },
          })}
        />
        <p className={styles.error}>{errors.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid email format ",
            },
            validate: {
              notAdmin: (fieldValue) => {
                return (fieldValue !== 'admin@example.com' || "Enter a different email address")
              },
              notBlackList: (fieldValue) => {
                return !fieldValue.endsWith('baddomain.com') || "This domain is not supported"
              }
            }
          })}
        />
        <p className={styles.error}>{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel", {
          required: { value: true, message: 'Channel is required' }
        })} />
        <p className={styles.error}>{errors.channel?.message}</p>

        <button className={styles.button}>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Tester;
