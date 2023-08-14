import React from "react";
import { Formik } from "formik";
import "./FormikForm.css";

export default function FormikForm() {
  return (
    <div>
      <h1>HW 33. Formik</h1>
      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Name is required";
          }

          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.phone) {
            errors.phone = "Phone is required";
          } // You can add further phone number validation here if needed

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && <div>{errors.name}</div>}

            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {errors.phone && touched.phone && <div>{errors.phone}</div>}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
