export const initialValues = { firstname: "", email: "", tel: "" };

export const validate = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "Required";
  } else if (
    /[\d]/.test(values.firstname) ||
    values.firstname.length < 2 ||
    values.firstname.length > 20
  ) {
    errors.firstname = "Invalid name more 2 letters but less the 20 letters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.tel) {
    errors.tel = "Required";
  } else if (
    !/^[0-9]+$/i.test(String(values.tel)) ||
    String(values.tel).length !== 12
  ) {
    errors.tel = (
      <span>Тільки цифри та довжина 12 телефон, ввели {values.tel.length}</span>
    );
  }

  return errors;
};

export const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert("ПРОВАЛІДОВАНО: " + JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};
