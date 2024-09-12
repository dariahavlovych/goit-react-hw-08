import React from "react";
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd({
      ...values,
      id: nanoid(),
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <span>Name</span>
          <Field type="text" name="name"></Field>
        </label>
        <label>
          <span>Number</span>
          <Field type="tel" name="number"></Field>
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
