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

  //   const nameRegex = /^[ a-zA-Z\-\’]+$/;
  //   const numberRegex = /^[0-9.-]*$/;

  const registerFormSchema = Yup.object().shape({
    name: Yup.string()
      //   .matches(nameRegex, "Invalid name")
      .min(3, "Name is too short!")
      .max(50, "Name should contain max 50 symbols")
      .required("Name is required"),
    email: Yup.string()
      //   .matches(nameRegex, "Invalid name")
      //   .min(3, "Name is too short!")
      //   .max(50, "Name should contain max 50 symbols")
      .required("Email is required"),
    password: Yup.string()
      //   .matches(numberRegex, "Number is invalid")
      .min(8, "Password is too short!")
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
          <Field type="text" name="email" className={s.input}></Field>
          <ErrorMessage name="email" component="span" className={s.error} />
        </label>
        <label className={s.label}>
          <span>Password</span>
          <Field type="text" name="password" className={s.input}></Field>
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
