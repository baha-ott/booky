import FormItem from "./FormItem";

type Props = {};

const FORM_ITEMS = [
  {
    name: "title",
    type: "text",
    placeholder: "Title",
  },
  {
    name: "isbn",
    type: "text",
    placeholder: "isbn",
  },

  {
    name: "description",
    type: "text",
    placeholder: "Description",
  },
  {
    name: "publisher",
    type: "text",
    placeholder: "Publisher",
  },
  { name: "tags", type: "text", placeholder: "Ex: tag1 tag2" },
];

function FormItems({}: Props) {
  return (
    <>
      {FORM_ITEMS.map((item) => (
        <FormItem key={item.name} {...item} />
      ))}
    </>
  );
}

export default FormItems;
