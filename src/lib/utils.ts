import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SocialLinks = {
  Github: "https://github.com/soumakk",
  LinkedIn: "https://www.linkedin.com/in/soumakk/",
  X: "https://x.com/_soumakk_",
  // Instagram: 'https://www.instagram.com/__soumak__/',
};
