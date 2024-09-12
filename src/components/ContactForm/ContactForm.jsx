import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd({
      ...values,
      id: nanoid(),
    });
    actions.resetForm();
  };

  const nameRegex = /^[ a-zA-Z\-\’]+$/;
  const numberRegex = /^[0-9.-]*$/;

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .matches(nameRegex, "Invalid name")
      .min(3, "Name is too short!")
      .max(50, "Name should contain max 50 symbols")
      .required("Name is required"),
    number: Yup.string()
      .matches(numberRegex, "Number is invalid")
      .min(3, "Number is too short!")
      .max(50, "Number should contain max 50 symbols")
      .required("Number is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={s.formWrapper}>
        <label className={s.label}>
          <span>Name</span>
          <Field type="text" name="name" className={s.input}></Field>
          <ErrorMessage name="name" component="span" className={s.error} />
        </label>
        <label className={s.label}>
          <span>Number</span>
          <Field type="text" name="number" className={s.input}></Field>
          <ErrorMessage name="number" component="span" className={s.error} />
        </label>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
