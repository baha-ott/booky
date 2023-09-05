// formik
import { ErrorMessage, Field } from "formik";

type Props = {
  name: string;
  type: string;
  placeholder: string;
};

function FormInput({ name, type, placeholder }: Props) {
  return (
    <div className="flex gap-4">
      <label htmlFor={name} className="w-1/3 lg:h-1/6 xl:w-1/12 flex flex-col">
        {name}
        <span className="text-xs text-red-500 inline">
          <ErrorMessage name={name} />
        </span>
      </label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="border rounded-md px-2 py-1 w-full"
      />
    </div>
  );
}

export default FormInput;
