"use client";
import Link from "next/link";
import { clsx } from "./clsx";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "white" | "ghost";
type ButtonElement = "a" | "button";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
}

interface LinkButtonProps extends BaseButtonProps {
  as?: "a";
  href: string;
  onClick?: never;
}

interface RegularButtonProps extends BaseButtonProps {
  as: "button";
  href?: never;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

type ButtonProps = LinkButtonProps | RegularButtonProps;

const getVariantStyles = (variant: ButtonVariant): string => {
  const variants = {
    white: "bg-white text-black hover:bg-neutral-200",
    ghost: "bg-transparent text-white hover:bg-white/10",
  } as const;
  
  return variants[variant];
};

const baseStyles = "inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm uppercase tracking-wide transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2";

export function Button({
  children,
  as = "a",
  variant = "white",
  className,
  disabled = false,
  ...props
}: ButtonProps) {
  const combinedClassName = clsx(
    baseStyles,
    getVariantStyles(variant),
    disabled && "pointer-events-none",
    className
  );

  if (as === "button") {
    const buttonProps = props as RegularButtonProps;
    return (
      <button 
        type="button" 
        onClick={buttonProps.onClick} 
        className={combinedClassName}
        disabled={disabled}
        aria-disabled={disabled}
      >
        {children}
      </button>
    );
  }

  const linkProps = props as LinkButtonProps;
  return (
    <Link 
      href={linkProps.href} 
      className={combinedClassName}
      aria-disabled={disabled}
    >
      {children}
    </Link>
  );
}
