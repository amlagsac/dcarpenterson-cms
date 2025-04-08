export default function Divider(props: React.HTMLAttributes<HTMLHRElement>) {
  const { className } = props;
  return <hr className={`${className}`} />;
}
