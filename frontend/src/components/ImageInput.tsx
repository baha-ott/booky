import { ErrorMessage, Field } from "formik";

export default function ImageInput() {
  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleIcon = async (e: any, setFieldValue: any) => {
    const file = e.target.files[0];
    //check the size of image
    if (file?.size / 1024 / 1024 < 2) {
      const base64 = await convertToBase64(file);
      setFieldValue("thumbnail", base64);
    } else {
      throw new Error("Failed to upload the image");
    }
  };

  return (
    <div className="flex gap-2">
      <label
        htmlFor="thumbnail"
        className="w-1/3 text-xl lg:h-1/6 xl:w-1/12 flex flex-col"
      >
        thumbnail
      </label>
      <Field name="thumbnail">
        {({ form, field }: { form: any; field: any }) => {
          const { setFieldValue } = form;
          console.log(form);
          return (
            <input
              type="file"
              className="form-control"
              required
              onChange={(e) => handleIcon(e, setFieldValue)}
            />
          );
        }}
      </Field>
      <div className="text-danger">
        <ErrorMessage name="thumbnail" />
      </div>
    </div>
  );
}
