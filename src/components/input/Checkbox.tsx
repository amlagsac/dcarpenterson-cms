interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string | undefined;
  checked: boolean;
}

export default function Checkbox(props: CheckboxProps) {
  const { name, checked, children, className, ...rest } = props;

  return (
    <input
      {...rest}
      name={name}
      type="checkbox"
      checked={checked}
      className={`border border-gray-500 rounded-sm ${className || ""}`}
    >
      {children}
    </input>
  );
}
