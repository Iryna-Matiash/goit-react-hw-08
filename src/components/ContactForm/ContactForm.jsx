import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import "yup-phone";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const phoneRegExp = /^(?:\+38)?0\d{9}$/;

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be min 3 chars")
    .max(50, "Must be max 50 chars")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Must be min 3 chars")
    .max(50, "Must be max 50 chars")
    .matches(phoneRegExp, "İnvalid phone number format")
    .required("This field is required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
        id: nanoid(),
      }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.label}>Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.group}>
          <label className={css.label}>Number</label>
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
