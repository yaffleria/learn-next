import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

import styles from "./form.module.css";

type FormValues = {
  username: string
  email: string
  channel: string
  social: {
    twitter: string
    facebook: string
  }
};

const DevTool: React.ElementType = dynamic(
  () => import('@hookform/devtools').then((module) => module.DevTool),
  { ssr: false }
)

const Tester: NextPage = () => {
  const { register, handleSubmit, control, formState } = useForm<FormValues>({
    defaultValues: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await response.json()
      
      return {
        username: 'Batman',
        email: data.email,
        channel: '',
        social: {
          twitter: '',
          facebook: ''
        }
      }
    }
  });
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
        <label className={styles.label} htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: { value: true, message: "Username is required" },
          })}
        />
        <p className={styles.error}>{errors.username?.message}</p>

        <label className={styles.label} htmlFor="email">Email</label>
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

        <label className={styles.label} htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel", {
          required: { value: true, message: 'Channel is required' }
        })} />
        <p className={styles.error}>{errors.channel?.message}</p>

        <label className={styles.label} htmlFor="twitter">Twitter</label>
        <input type="text" id="twitter" {...register("social.twitter", {
          required: { value: true, message: 'Twitter is required' }
        })} />
        <p className={styles.error}>{errors.social?.twitter?.message}</p>

        <label className={styles.label} htmlFor="facebook">Facebook</label>
        <input type="text" id="facebook" {...register("social.facebook", {
          required: { value: true, message: 'Facebook is required' }
        })} />
        <p className={styles.error}>{errors.social?.facebook?.message}</p>

        <button className={styles.button}>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Tester;
