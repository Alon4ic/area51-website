import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
            className={`relative text-white font-semibold bg-transparent border-none transition-colors duration-200 ease-in-out hover:bg-goldBase active:bg-activeGold hover:text-baseText group ${className}`}
            {...props}
        >
            <span className="absolute inset-0 border border-white20 transition-colors duration-200 ease-in-out group-hover:border-white group-active:border-white"></span>
            {/* Верхние белые края */}
            <span className="absolute top-0 left-0 w-[10px] h-[1px] bg-white"></span>
            <span className="absolute top-0 right-0 w-[10px] h-[1px] bg-white "></span>
            {/* Нижние белые края */}
            <span className="absolute bottom-0 left-0 w-[10px] h-[1px] bg-white"></span>
            <span className="absolute bottom-0 right-0 w-[10px] h-[1px] bg-white "></span>
            {/* Левые белые края */}
            <span className="absolute top-0 left-0 w-[1px] h-[10px] bg-white"></span>
            <span className="absolute bottom-0 left-0 w-[1px] h-[10px] bg-white"></span>
            {/* Правые белые края */}
            <span className="absolute top-0 right-0 w-[1px] h-[10px] bg-white"></span>
            <span className="absolute bottom-0 right-0 w-[1px] h-[10px] bg-white"></span>
            {children}
        </button>
    );
}
