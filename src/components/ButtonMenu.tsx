import React from 'react';
import Button from './Button';

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonMenu({ children, className, ...props }: ButtonProps) {
	return (
        <Button
            className={`relative text-white text-base font-bold bg-transparent border-none transition-colors duration-200 ease-in-out hover:bg-goldBase active:bg-activeGold hover:text-baseText group ${className}`}
            {...props}
        >
            <span className="absolute inset-0 border border-white20 transition-colors duration-200 ease-in-out group-hover:border-activeGold group-active:border-activeGold"></span>
            {/* Верхние белые края */}
            <span className="absolute top-0 left-0 w-[10px] h-[1px] bg-activeGold"></span>
            <span className="absolute top-0 right-0 w-[10px] h-[1px] bg-activeGold "></span>
            {/* Нижние белые края */}
            <span className="absolute bottom-0 left-0 w-[10px] h-[1px] bg-activeGold"></span>
            <span className="absolute bottom-0 right-0 w-[10px] h-[1px] bg-activeGold"></span>
            {/* Левые белые края */}
            <span className="absolute top-0 left-0 w-[1px] h-[10px] bg-activeGold"></span>
            <span className="absolute bottom-0 left-0 w-[1px] h-[10px] bg-activeGold"></span>
            {/* Правые белые края */}
            <span className="absolute top-0 right-0 w-[1px] h-[10px] bg-activeGold"></span>
            <span className="absolute bottom-0 right-0 w-[1px] h-[10px] bg-activeGold"></span>
            {children}
        </Button>
    );
}
