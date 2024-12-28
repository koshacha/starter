import { twMerge } from "tailwind-merge";

function cn(...args: Array<string | undefined>) {
  return twMerge.apply(null, args);
}

export default cn;
