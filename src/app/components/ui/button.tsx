import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
}

export function Button({
    children,
    className = '',
    variant = 'primary',
    ...props
}: ButtonProps) {
    const baseClasses = "py-2 px-4 rounded-md font-medium transition-all duration-200 focus:outline-none";

    const variants = {
        primary: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white",
        secondary: "bg-white text-gray-900 hover:bg-gray-100",
        outline: "border border-white text-white hover:bg-white/10"
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}