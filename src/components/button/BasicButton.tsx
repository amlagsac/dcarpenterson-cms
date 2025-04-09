export default function BasicButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { className, children, ...rest } = props;

  return (
    <button {...rest} className={`${className || ""}`}>
      {children}
    </button>
  );
}
