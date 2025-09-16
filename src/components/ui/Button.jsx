import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Button({ 
  href,        // si présent -> <Link>
  children, 
  className, 
  variant = "primary", // "primary" | "secondary"
  ...props 
}) {
  const baseStyles =
    "cursor-pointer inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer select-none hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#008CFF] text-white focus:ring-blue-600",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300",
    blue: "bg-[#008CFF] text-white focus:ring-blue-600",
    whiteOnBlue: "bg-white text-[#008CFF] focus:ring-blue-600",
  };

  const classes = twMerge(clsx(baseStyles, variants[variant], className));

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}