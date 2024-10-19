import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const nameRegex = /^[ a-zA-Z\-\’]+$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const registerFormSchema = Yup.object().shape({
    name: Yup.string()
      .matches(nameRegex, "Invalid name")
      .min(3, "Name is too short!")
      .max(50, "Name should contain max 50 symbols")
      .required("Name is required"),
    email: Yup.string()
      .matches(emailRegex, "Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        passRegex,
        "Password must be at least 8 characters long and contains a symbol, upper and lower case letters and a number"
      )
      .max(50, "Password should contain max 50 symbols")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerFormSchema}
    >
      <Form className={s.formWrapper}>
        <label className={s.label}>
          <span>Name</span>
          <Field type="text" name="name" className={s.input}></Field>
          <ErrorMessage name="name" component="span" className={s.error} />
        </label>
        <label className={s.label}>
          <span>Email</span>
          <Field type="email" name="email" className={s.input}></Field>
          <ErrorMessage name="email" component="span" className={s.error} />
        </label>
        <label className={s.label}>
          <span>Password</span>
          <Field type="password" name="password" className={s.input}></Field>
          <ErrorMessage name="password" component="span" className={s.error} />
        </label>

        <button type="submit" className={s.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
