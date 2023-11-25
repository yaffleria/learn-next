import { NextPage } from 'next'
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'

import styles from "./form.module.css";

type FormValues = {
  username: string;
  email: string;
  channel: string;
}

const schema = z.object({
  username: z.string().nonempty('Username is required'),
  email: z.string().nonempty('Email is required').email('Email format is not valid'),
  channel: z.string().nonempty('Channel is required')
})

const DevTool: React.ElementType = dynamic(
  () => import("@hookform/devtools").then((module) => module.DevTool),
  { ssr: false }
);

const ZodForm: NextPage = () => {
  const { register, formState, control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      channel: ''
    },
    resolver: zodResolver(schema)
  })
  const { errors } = formState
  const onSubmit = () => {
    console.log('Submit')
  }

  return (
    <div className={styles.container}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label} htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          {...register('username')}
        />
        <p className={styles.error}>{errors.username?.message}</p>

        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register('email')}
        />
        <p className={styles.error}>{errors.email?.message}</p>

        <label className={styles.label} htmlFor="channel">
          Channel
        </label>
        <input
          type="text"
          id="channel"
          {...register('channel')}
        />
        <p className={styles.error}>{errors.channel?.message}</p>

        <button
          className={styles.button}
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>  
  )
}

export default ZodForm