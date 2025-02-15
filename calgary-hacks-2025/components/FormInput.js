
function FormInput({ label, type, placeholder, id, value }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-black">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        className="px-4 py-3 text-base rounded-lg border border-gray-300 border-solid"
      />
    </div>
  );
}

export default FormInput;