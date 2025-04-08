type BoxProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
> & {
  dropShadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

const dropShadowMap = {
  none: "drop-shadow-none",
  xs: "drop-shadow-xs",
  sm: "drop-shadow-sm",
  md: "drop-shadow-md",
  lg: "drop-shadow-lg",
  xl: "drop-shadow-xl",
  "2xl": "drop-shadow-2xl",
};

export default function Box(props: BoxProps) {
  const { dropShadow = "md", children, className, ...rest } = props;

  return (
    <div
      className={`${dropShadowMap[dropShadow]} ${className || ""} `}
      {...rest}
    >
      {children}
    </div>
  );
}
