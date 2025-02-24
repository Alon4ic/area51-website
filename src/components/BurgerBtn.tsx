import React from 'react';
import { AlignJustify } from 'lucide-react';
import Button from './Button';


interface BurgerBtnProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export default function BurgerBtn({ isOpen, setIsOpen }: BurgerBtnProps) {
    return (
        <Button
            className="laptop:hidden inline-flex items-center justify-center p-2 rounded-md text-white font-bold hover:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
        >
            <AlignJustify className="h-[30px] w-[38px]" />
        </Button>
    );
}