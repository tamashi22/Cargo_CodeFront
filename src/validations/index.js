import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
  login: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required").min(6).max(40),
});
export const registerCarrierSchema = Yup.object().shape({
  email: Yup.string()
    .required("Это поле обязательное")
    .email("Неправильно заполнены данные!"),

  password: Yup.string()
    .required("Это поле обязательное")
    .min(6, "Пароль должен быть больше 6 символов")
    .max(40, "Пароль не может превышать 40 символов"),
});
export const signUpSchemaFirstPart = Yup.object().shape({
  INN: Yup.string()
    .required("Это поле обязательное")
    .max(14, "ИНН не может превышать 14 символов")
    .min(14, "ИНН должен содержать 14 символов"),
  userType: Yup.string().required(),
  organization: Yup.string().when("userType", {
    is: "Юридическое лицо",
    then: (schema) => schema.required("Это поле  обязательное"),
  }),
  registrationNumber: Yup.string().required("Это поле обязательное"),
  OKPO: Yup.string().required("Это поле обязательное"),
  address: Yup.string().required("Это поле обязательное"),
  director: Yup.string().required("Это поле обязательное"),
});
