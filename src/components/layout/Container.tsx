type ContainerProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

export default function Container({ children, ...rest }: ContainerProps) {
  return <div {...rest}>{children}</div>;
}
