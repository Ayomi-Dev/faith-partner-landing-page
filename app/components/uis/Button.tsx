import Link from "next/link";
import { ButtonProps, sizeStyles, variantStyles } from "@/app/types/button";
import { cn } from "@/app/lib/utils";



export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  onClick,
  type = "button",
  className,
  disabled,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center font-head font-semibold rounded-lg",
    "transition-all duration-200 whitespace-nowrap select-none",
    variantStyles[variant],
    sizeStyles
    [size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  if (href) {
    return external ? (
      <a href={href} className={base} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base} disabled={disabled}>
      {children}
    </button>
  );
}