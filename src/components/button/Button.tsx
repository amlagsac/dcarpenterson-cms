import LoadingIcon from "../icons/LoadingIcon";

type ButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  variant: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
  loading?: boolean;
};

const variantMap = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  tertiary: "bg-transparent text-blue-500 border border-blue-500",
};

const sizeMap = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

export default function Button(props: ButtonProps) {
  const { variant, size, loading, className, children, ...rest } = props;

  return (
    <button
      className={`
                ${variantMap[variant]} 
                ${sizeMap[size]} 
                ${className || ""} 
                rounded-lg flex items-center justify-center transition
                disabled:opacity-50 disabled:cursor-not-allowed
            `}
      {...rest}
      disabled={loading}
    >
      {loading ? (
        <LoadingIcon
          className="animate-spin"
          color="#FFFFFF"
          height={"1.5rem"}
          width={"1.5rem"}
        />
      ) : (
        children
      )}
    </button>
  );
}
