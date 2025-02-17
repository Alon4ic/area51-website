import { cn } from "@/lib/utils";
import Link from "next/link";

export const navLinks = [
    { id: 0, name: 'Introduction', href: '/#home' },
    { id: 1, name: 'Products', href: '/#products' },
    { id: 2, name: 'Services', href: '/#services' },
    { id: 3, name: 'Team', href: '/#team' },
    { id: 4, name: 'Contact', href: '#contact' },
    { id: 5, name: 'About Us', href: '/#about' },
];
interface NavLinksProps {
    isVertical?: boolean;
    className?: string;
}

export default function NavLinks({
    isVertical,
    className,
}: NavLinksProps) {
    return (
        <nav
            className={cn(
                'flex',
                isVertical
                    ? 'flex-col space-y-2'
                    : 'justify-between items-center xl:gap-[34px] gap-[15px] uppercase',
                className
            )}
        >
            {navLinks.map((item) => (
                <Link
                    href={item.href}
                    key={item.id}
                    className="text-white text-base hover:bg-gray-600 active:bg-gray-500 group font-normal whitespace-nowrap px-2 py-2 rounded"
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    );
}