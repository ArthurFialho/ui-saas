import React from "react";
import { twMerge } from "tailwind-merge";

export default function Pointer(props: {
    name: string;
    color?: "blue-gradient" | "red-gradient";
}) {
    const { name, color } = props;
    return (
        <div className="relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mouse-pointer text-white size-5"
            >
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                <path d="M13 13l6 6"></path>
            </svg>
            <div className="absolute top-full left-full">
                <div
                    className={twMerge(
                        "inline-flex rounded-full font-bold text-sm cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-400 bg-[length:200%_200%] bg-[position:0%_50%] transition-transform duration-500 hover:scale-105 hover:shadow-[0_4px_20px_rgba(34,211,238,0.4)] animate-gradientMove px-3 rounded-tl-none",
                        color === "red-gradient" &&
                            "bg-gradient-to-r from-orange-400 to-red-500 bg-[length:200%_200%] bg-[position:0%_50%]  transition-transform duration-500 hover:scale-105 hover:shadow-[0_4px_20px_rgba(239,68,68,0.4)] animate-gradientMove"
                    )}
                >
                    {name}
                </div>
            </div>
        </div>
    );
}
