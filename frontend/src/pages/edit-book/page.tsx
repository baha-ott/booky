import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormItems from "../../components/Form/FormItems";
import AuthorSelector from "../../components/Form/AuthorSelector";

import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../../api/apiSlice";
import HeadingSecondary from "../../components/HeadingSecondary";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import BtnSubmitForm from "../../components/Form/BtnSubmitForm";

const EditBookPage = () => {
  const { bookId } = useParams();
  const {
    data: book,
    isLoading,
    isSuccess,
    isError,
  } = useGetSingleBookQuery(bookId);

  if (isError) {
    throw new Error("something went wrong while fetching book to edit data");
  }

  const [updateBook] = useUpdateBookMutation();

  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && (
        <Formik
          initialValues={{
            id: book.id,
            authorId: book.authorId,
            isbn: book.isbn,
            title: book.title,
            description: book.description,
            publisher: book.publisher,
            tags: book.tags.join(" "),
            favorite: book.favorite,
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
            console.log(values);
            updateBook({
              ...values,
              tags: (values.tags as string).split(" "),
              thumbnail: values.thumbnail_image,
            });
            resetForm();
            setSubmitting(false);
          }}
        >
          <Form>
            <HeadingSecondary title={`Edit ${book.title} book`} />
            <div className="flex flex-col gap-4 mt-16 shadow-md px-4 pt-8 pb-16 rounded-md">
              <FormItems />
              <AuthorSelector />
              <BtnSubmitForm title="Edit book" />
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
};

export default EditBookPage;
