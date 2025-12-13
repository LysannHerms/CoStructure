import { forwardRef } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

// Polymorph: genau EINES der Ziele ist erlaubt
type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href"> & { to?: never; href?: never };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "to"> & { href: string; to?: never };

type ButtonAsRouter = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "href"> & { to: string; href?: never };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouter;

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function baseClasses(variant: Variant = "primary", size: Size = "md") {
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-3 text-lg",
  }[size];

  const variants = {
    primary: "bg-black text-white border border-black hover:opacity-90",
    secondary: "bg-white text-black border border-black hover:bg-black/5",
    ghost: "bg-transparent text-black border border-transparent hover:bg-black/5",
  }[variant];

  return cx(
    "inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black",
    sizes,
    variants,
  );
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant = "primary", size = "md", className, children, ...props }, ref) {
    const classes = cx(baseClasses(variant, size), className);

    if ("to" in props && props.to) {
      const { to, ...rest } = props;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={to}
          className={classes}
          {...(rest as Omit<React.ComponentProps<typeof Link>, "to">)}
        >
          {children}
        </Link>
      );
    }

    if ("href" in props && props.href) {
      const { href, ...rest } = props;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}
        >
          {children}
        </a>
      );
    }

    // Fallback: echtes <button>
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "to" | "href">)}
      >
        {children}
      </button>
    );
  },
);
