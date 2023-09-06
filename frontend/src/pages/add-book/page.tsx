import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormItems from "../../components/Form/FormItems";
import AuthorSelector from "../../components/Form/AuthorSelector";
import BtnSubmitForm from "../../components/Form/BtnSubmitForm";
import { nanoid } from "@reduxjs/toolkit";
import { useAddNewBookMutation } from "../../api/apiSlice";
import HeadingSecondary from "../../components/HeadingSecondary";
import ImageInput from "../../components/ImageInput";

const AddBookPage = () => {
  const [addNewBook] = useAddNewBookMutation();
  return (
    <Formik
      initialValues={{
        id: Number(nanoid()),
        authorId: 1,
        isbn: "",
        title: "",
        description: "",
        publisher: "",
        tags: "",
        favorite: false,
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .max(25, "Must be 15 characters or less")
          .required("Required"),
        publisher: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        tags: Yup.string().required("Required"),
      })}
      onSubmit={(values: any, { setSubmitting, resetForm }) => {
        addNewBook({
          ...values,
          tags: (values.tags as string).split(" "),
        });
        resetForm();
        setSubmitting(false);
      }}
    >
      <Form>
        <HeadingSecondary title="Add new Book" />
        <div className="flex flex-col gap-4 mt-16 shadow-md px-4 pt-8 pb-16 rounded-md">
          <FormItems />
          <ImageInput />
          <AuthorSelector />
          <BtnSubmitForm title="Add new Book" />
        </div>
      </Form>
    </Formik>
  );
};

export default AddBookPage;
