import { cn } from "@/app/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block font-head text-[0.7rem] font-semibold tracking-[0.12em] uppercase",
        "text-yellow-700 bg-yellow-50 border border-yellow-200 px-4 py-1 rounded-full mb-4",
        className
      )}
    >
      {children}
    </span>
  );
}