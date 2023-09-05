import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormItems from "../../components/Form/FormItems";
import AuthorSelector from "../../components/Form/AuthorSelector";
import BtnAddNewBook from "../../components/Form/BtnAddNewBook";
import { nanoid } from "@reduxjs/toolkit";
import { useAddNewBookMutation } from "../../api/apiSlice";
import HeadingSecondary from "../../components/HeadingSecondary";

const AddBookPage = () => {
  const [addNewBook] = useAddNewBookMutation();
  return (
    <Formik
      initialValues={{
        id: Number(nanoid()),
        authorId: 1,
        isbn: "",
        title: "",
        thumbnail: "",
        description: "",
        publisher: "",
        tags: "",
        favorite: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        addNewBook({ ...values });
        resetForm();
        setSubmitting(false);
      }}
    >
      <Form>
        <HeadingSecondary title="Add new Book" />
        <div className="flex flex-col gap-4 mt-16 shadow-md px-4 pt-8 pb-16 rounded-md">
          <FormItems />
          <AuthorSelector />
          <BtnAddNewBook />
        </div>
      </Form>
    </Formik>
  );
};

export default AddBookPage;
