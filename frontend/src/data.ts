import * as Yup from "yup";
export const FormAddBookSchema = Yup.object({
    title: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Required"),
    description: Yup.string().max(25, "Must be 25 characters or less"),
    thumbnail: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    tags: Yup.string().required("Required"),
})