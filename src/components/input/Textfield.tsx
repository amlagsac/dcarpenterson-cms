interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string | undefined;
  type: string;
  required?: boolean | undefined;
  placeholder?: string | undefined;
  variant: "primary" | "secondary" | "tertiary";
  error?: string | null;
}

const textFieldVariants = {
  primary: "focus:outline-none focus:ring-2 focus:ring-blue-500",
  secondary: "focus:outline-none focus:ring-2 focus:ring-gray-500",
  tertiary: "focus:outline-none focus:ring-2 focus:ring-transparent",
};

export default function TextField(
  props: React.PropsWithChildren<TextFieldProps>,
) {
  const {
    name,
    type,
    required,
    placeholder,
    error,
    variant = "primary",
    children,
    className,
    ...rest
  } = props;
  return (
    <input
      {...rest}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className={`border ${textFieldVariants[variant]} ${className || ""} ${error ? "border-red-500 focus:ring-red-500" : ""}`}
    >
      {children}
    </input>
  );
}
