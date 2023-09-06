
export default function BtnSubmitForm({ title }: { title: string }) {
  return (
    <div className="mt-8 w-full flex justify-center lg:justify-start">
      <button
        type="submit"
        className="bg-yellow-300 w-full py-2 rounded-md lg:w-auto px-12"
      >
        {title}
      </button>
    </div>
  );
}
