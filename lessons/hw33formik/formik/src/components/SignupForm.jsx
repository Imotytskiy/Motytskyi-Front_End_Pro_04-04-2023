import React from "react";
import { Formik } from "formik";
import "../index";

const FormSignup = () => (
  <div>
    <h1>HW 33. formik</h1>
    <Formik
      initialValues={{ firstname: "", email: "", tel: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.firstname) {
          errors.firstname = "Required";
        } else if (
          /[\d]/.test(values.firstname) ||
          values.firstname.length < 2 ||
          values.firstname.length > 20
        ) {
          errors.firstname = "Invalid name";
        }

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.tel) {
          errors.tel = "Required";
        } else if (
          !/^[0-9]+$/i.test(String(values.tel)) ||
          String(values.tel).length !== 12
        ) {
          errors.tel = "Тільки цифри та довжина 12";
        }

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
          <label htmlFor="name">Ім'я</label>
          <input
            id="name"
            type="text"
            name="firstname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && (
            <div className="error">{errors.name}</div>
          )}
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
          <label htmlFor="tel">телефон</label>
          <input
            id="tel"
            type="text"
            name="tel"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tel}
          />
          {errors.tel && touched.tel && (
            <div className="error">{errors.tel}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default FormSignup;
