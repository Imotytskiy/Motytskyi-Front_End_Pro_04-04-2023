import React from "react";
import { Formik } from "formik";
import { initialValues, validate, onSubmit } from "./formLogic";
import "../index";

export default function FormSignup() {
  return (
    <div>
      <h1>HW 33. formik</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
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
              value={values.firstname}
            />
            {errors.firstname && touched.firstname && (
              <div className="error">{errors.firstname}</div>
            )}
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="imotytskiy@gmail.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}
            <label htmlFor="tel">Телефон</label>
            <input
              id="tel"
              type="text"
              name="tel"
              placeholder="тільки цифри та довжина 12"
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
}
