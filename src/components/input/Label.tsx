interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

export default function Label(props: React.PropsWithChildren<LabelProps>) {
  const { htmlFor, children, className, ...rest } = props;
  return (
    <label {...rest} htmlFor={htmlFor} className={`${className || ""}`}>
      {children}
    </label>
  );
}
