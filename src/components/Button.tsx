import React, { type HtmlHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva(
    "border h-12 rounded-full px-6 font-medium transition-all duration-300",
    {
        variants: {
            variant: {
                primary:
                    "bg-lime-400 text-neutral-950 border-lime-400 hover:animate-pulse hover:shadow-[0_0_25px_rgba(163,230,53,0.7)] transform hover:scale-110 active:scale-95",
                secondary:
                    "border-white text-white bg-transparent hover:bg-white hover:text-neutral-950 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transform hover:scale-110 active:scale-95",
            },
        },
    }
);

export default function Button(
    props: {
        variant: "primary" | "secondary";
    } & HtmlHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, ...otherProps } = props;

    return (
        <button
            className={classes({
                variant,
                className,
            })}
            {...otherProps}
        />
    );
}
