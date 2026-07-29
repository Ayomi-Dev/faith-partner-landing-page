export type Variant = "primary" | "secondary" | "outline" | "ghost" | "emerald";
export type Size = "sm" | "md" | "lg";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean; 
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gold text-navy-dark hover:bg-gold-dark hover:shadow-gold hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-white border-2 border-white/70 hover:bg-white/10 hover:border-white",
  outline:
    "bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white",
  ghost:
    "bg-transparent text-navy-dark hover:bg-gray-100",
  emerald:
    "bg-emerald text-white hover:bg-emerald-700 hover:-translate-y-0.5",
};

export const sizeStyles: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm gap-1.5",
  md: "px-7 py-3.5 text-[0.925rem] gap-2",
  lg: "px-9 py-4 text-base gap-2",
};