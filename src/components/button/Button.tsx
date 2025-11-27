import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | undefined;
}

export default function ButtonComponent(props: ButtonProps) {
    const { children, className, onClick, type, variant } = props;
    const primaryStyle = "bg-white text-zinc-900 hover:bg-white/50";
    const secondaryStyle =
        "border-2 border-white text-white hover:bg-white hover:text-neutral-900";

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${className} ${variant === "primary" ? primaryStyle : secondaryStyle} transition-all cursor-pointer`}
        >
            {children}
        </button>
    );
}
