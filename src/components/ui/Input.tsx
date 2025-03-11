export function Input({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: () => void;
}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2"
        onChange={onChange}
      />
    </div>
  );
}
