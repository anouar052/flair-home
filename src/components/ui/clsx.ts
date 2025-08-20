import { type ClassValue, clsx as cx } from "clsx";
import { twMerge } from "tailwind-merge";

export function clsx(...inputs: ClassValue[]) {
  return twMerge(cx(inputs));
}
