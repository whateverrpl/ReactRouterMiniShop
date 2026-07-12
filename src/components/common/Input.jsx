function Input({
  children,
  placeholder,
  type = "text",
  htmlForId,
  isTextArea = false,
  ...props
}) {
  const className =
    "p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer";

  return (
    <div className="flex flex-col">
      {isTextArea ? (
        <textarea
          className={className}
          id={htmlForId}
          placeholder={placeholder}
          required
          {...props}
        />
      ) : (
        <input
          className={className}
          id={htmlForId}
          type={type}
          placeholder={placeholder}
          required
          {...props}
        />
      )}

      <label
        className="text-sm text-gray-500 peer-placeholder-shown:text-gray-400 peer-focus:text-blue-500"
        htmlFor={htmlForId}
      >
        {children}
      </label>
    </div>
  );
}

export default Input;
