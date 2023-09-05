import FormInput from "./FormInput";

type Props = {
  name: string;
  type: string;
  placeholder: string;
};

function FormItem({ name, type, placeholder }: Props) {
  return (
    <div className="w-full">
      <FormInput name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default FormItem;
