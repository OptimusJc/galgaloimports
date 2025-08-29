import React from "react";
import { Link } from "react-router-dom";

// Type definitions
interface BaseButtonProps {
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "link"
    | "link-alt"
    | "secondary-alt"
    | "tertiary"
    | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Button props for regular button
interface RegularButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  children: React.ReactNode;
  asChild?: boolean;
  to?: never;
}

// Router link props
interface RouterButtonProps extends BaseButtonProps {
  children: React.ReactNode;
  to: string;
  asChild?: never;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

type ButtonProps = RegularButtonProps | RouterButtonProps;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    children,
    className,
    variant = "primary",
    size = "medium",
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    ...restProps
  } = props;

  // Base styles that apply to all buttons
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant styles
  const variants: Record<string, string> = {
    primary:
      "bg-black text-white hover:bg-gray-800 focus:ring-black border border-black",
    secondary:
      "bg-white text-black border border-black hover:bg-black hover:text-white focus:ring-black",
    "secondary-alt":
      "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200 focus:ring-gray-500",
    tertiary:
      "bg-transparent text-black border border-gray-300 hover:border-black hover:bg-gray-50 focus:ring-gray-500",
    ghost:
      "bg-transparent text-black hover:bg-gray-100 focus:ring-gray-500 border border-transparent",
    link: "bg-transparent text-black hover:text-gray-600 underline underline-offset-4 focus:ring-gray-500 border-none p-0",
    "link-alt":
      "bg-transparent text-blue-600 hover:text-blue-800 underline underline-offset-4 focus:ring-blue-500 border-none p-0",
  };

  // Size styles
  const sizes: Record<string, string> = {
    small: "px-3 py-1.5 text-sm rounded-full gap-1.5",
    medium: "px-4 py-2 text-base rounded-full gap-2",
    large: "px-6 py-3 text-lg rounded-full gap-2.5",
  };

  // Special handling for link variants
  const isLinkVariant = variant === "link" || variant === "link-alt";
  const sizeClass = isLinkVariant ? "text-base gap-1" : sizes[size];

  const buttonClasses = [baseStyles, variants[variant], sizeClass, className]
    .filter(Boolean)
    .join(" ");

  const buttonContent = (
    <>
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {leftIcon && !loading && leftIcon}
      <span>{children}</span>
      {rightIcon && !loading && rightIcon}
    </>
  );

  // Check if this should be a router link
  if ("to" in props && props.to) {
    const { to, onClick } = props;

    // Handle disabled/loading state for links
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled || loading) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        onClick(e);
      }
    };

    // Try to render as Link, fall back to regular anchor if no router context
    try {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={to}
          className={buttonClasses}
          onClick={handleLinkClick}
          style={disabled || loading ? { pointerEvents: "none" } : undefined}
          aria-disabled={disabled || loading}
        >
          {buttonContent}
        </Link>
      );
    } catch (error) {
      // Fallback to regular anchor tag if no router context
      console.warn(
        "Button: Router context not found. Rendering as anchor tag. Wrap your app with <Router> to enable routing.",
      );
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={to}
          className={buttonClasses}
          onClick={handleLinkClick}
          style={disabled || loading ? { pointerEvents: "none" } : undefined}
          aria-disabled={disabled || loading}
        >
          {buttonContent}
        </a>
      );
    }
  }

  // Regular button or asChild functionality
  const { asChild, ...buttonProps } = restProps as Omit<
    RegularButtonProps,
    keyof BaseButtonProps
  >;

  if (asChild) {
    const child = React.Children.only(children) as React.ReactElement<any>;
    return React.cloneElement(child, {
      className: [buttonClasses, child.props?.className]
        .filter(Boolean)
        .join(" "),
      ...buttonProps,
    });
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={buttonClasses}
      disabled={disabled || loading}
      {...buttonProps}
    >
      {buttonContent}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
