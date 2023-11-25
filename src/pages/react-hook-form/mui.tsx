import { NextPage } from "next";
import { TextField, Button, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

import styles from './mui.module.css'

const DevTool: React.ElementType = dynamic(
  () => import("@hookform/devtools").then((module) => module.DevTool),
  { ssr: false }
);

type FormValues = {
  email: string;
  password: string;
};

const Mui: NextPage = () => {
  const { register, formState, control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { errors } = formState

  const onSubmit = (data: FormValues) => {
    console.log("Submit", data);
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={400}>
          <TextField
            label="email"
            type="email"
            color="primary"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            color="primary"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Mui;
