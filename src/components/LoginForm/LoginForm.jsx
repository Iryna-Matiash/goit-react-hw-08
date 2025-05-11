import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    console.log(values);
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("You have successfully logged in!");
      })
      .catch(() => {
        toast.error("Something went wrong...");
      });
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoCapitalize="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password"></Field>
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
