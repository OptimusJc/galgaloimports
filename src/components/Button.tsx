import React from "react";

// Type definitions
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
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
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "medium",
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      asChild = false,
      ...props
    },
    ref,
  ) => {
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
      small: "px-3 py-1.5 text-sm rounded-md gap-1.5",
      medium: "px-4 py-2 text-base rounded-md gap-2",
      large: "px-6 py-3 text-lg rounded-lg gap-2.5",
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

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement<any>;
      return React.cloneElement(child, {
        className: [buttonClasses, child.props?.className]
          .filter(Boolean)
          .join(" "),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        {...props}
      >
        {buttonContent}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;

// Demo component to showcase all variants
// const ButtonDemo: React.FC = () => {
//   const [loading, setLoading] = React.useState<Record<string, boolean>>({});
//
//   const handleLoadingDemo = (variant: string): void => {
//     setLoading((prev) => ({ ...prev, [variant]: true }));
//     setTimeout(() => {
//       setLoading((prev) => ({ ...prev, [variant]: false }));
//     }, 2000);
//   };
//
//   const ArrowRight: React.FC = () => (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M5 12h14M12 5l7 7-7 7" />
//     </svg>
//   );
//
//   const Download: React.FC = () => (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//       <polyline points="7,10 12,15 17,10" />
//       <line x1="12" y1="15" x2="12" y2="3" />
//     </svg>
//   );
//
//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-2">Relume-Style Button Component</h1>
//       <p className="text-gray-600 mb-8">
//         A comprehensive button component with all Relume variants and features.
//       </p>
//
//       {/* Basic Variants */}
//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
//         <div className="flex flex-wrap gap-4 mb-6">
//           <Button variant="primary">Primary</Button>
//           <Button variant="secondary">Secondary</Button>
//           <Button variant="secondary-alt">Secondary Alt</Button>
//           <Button variant="tertiary">Tertiary</Button>
//           <Button variant="ghost">Ghost</Button>
//         </div>
//         <div className="flex flex-wrap gap-4">
//           <Button variant="link">Link Button</Button>
//           <Button variant="link-alt">Link Alt</Button>
//         </div>
//       </section>
//
//       {/* Sizes */}
//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
//         <div className="flex flex-wrap items-center gap-4">
//           <Button variant="primary" size="small">
//             Small
//           </Button>
//           <Button variant="primary" size="medium">
//             Medium
//           </Button>
//           <Button variant="primary" size="large">
//             Large
//           </Button>
//         </div>
//       </section>
//
//       {/* With Icons */}
//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Buttons with Icons</h2>
//         <div className="flex flex-wrap gap-4 mb-4">
//           <Button variant="primary" rightIcon={<ArrowRight />}>
//             Get Started
//           </Button>
//           <Button variant="secondary" leftIcon={<Download />}>
//             Download
//           </Button>
//           <Button
//             variant="ghost"
//             leftIcon={<Download />}
//             rightIcon={<ArrowRight />}
//           >
//             Download & Continue
//           </Button>
//         </div>
//       </section>
//
//       {/* Loading States */}
//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Loading States</h2>
//         <div className="flex flex-wrap gap-4">
//           <Button
//             variant="primary"
//             loading={loading.primary}
//             onClick={() => handleLoadingDemo("primary")}
//           >
//             {loading.primary ? "Processing..." : "Click for Loading"}
//           </Button>
//           <Button
//             variant="secondary"
//             loading={loading.secondary}
//             onClick={() => handleLoadingDemo("secondary")}
//           >
//             {loading.secondary ? "Loading..." : "Secondary Loading"}
//           </Button>
//         </div>
//       </section>
//
//       {/* Disabled States */}
//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Disabled States</h2>
//         <div className="flex flex-wrap gap-4">
//           <Button variant="primary" disabled>
//             Disabled Primary
//           </Button>
//           <Button variant="secondary" disabled>
//             Disabled Secondary
//           </Button>
//           <Button variant="link" disabled>
//             Disabled Link
//           </Button>
//         </div>
//       </section>
//
//       {/* Code Example */}
//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Usage Examples</h2>
//         <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
//           <div className="mb-2">
//             {'<Button variant="primary">Primary Button</Button>'}
//           </div>
//           <div className="mb-2">
//             {
//               '<Button variant="secondary" size="large">Large Secondary</Button>'
//             }
//           </div>
//           <div className="mb-2">
//             {'<Button variant="ghost" leftIcon={<Icon />}>With Icon</Button>'}
//           </div>
//           <div>
//             {
//               '<Button variant="link" loading={isLoading}>Loading Button</Button>'
//             }
//           </div>
//         </div>
//       </section>
//
//       {/* Utility Function Note */}
//       <section>
//         <h2 className="text-xl font-semibold mb-4">Setup Required</h2>
//         <div className="bg-blue-50 p-4 rounded-lg">
//           <p className="text-blue-800 mb-2">
//             <strong>Note:</strong> This component is now self-contained with no
//             external dependencies.
//           </p>
//           <p className="text-blue-700 text-sm">
//             The className merging is handled internally without needing clsx or
//             tailwind-merge.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };
//
// export default ButtonDemo;
