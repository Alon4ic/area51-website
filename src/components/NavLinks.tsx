import { cn } from '@/lib/utils';
import Link from 'next/link';

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

export default function NavLinks({ isVertical, className }: NavLinksProps) {
    return (
        <nav
            className={cn(
                'flex',
                isVertical
                    ? 'flex-col space-y-2'
                    : 'justify-between items-center desktop:gap-[50px] xl:gap-[40px] gap-[30px] uppercase',
                className
            )}
        >
            {navLinks.map((item) => (
                <Link
                    href={item.href}
                    key={item.id}
                    className="relative text-white hover:text-[#BDBDBD] text-base  group font-normal whitespace-nowrap py-2 rounded overflow-hidden"
                >
                    {item.name}
                    <span className="absolute left-0 top-1/2 h-[2px] bg-[#BDBDBD] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out transform -translate-y-1/2 origin-left group-[&:not(:hover)]:origin-right"></span>
                </Link>
            ))}
        </nav>
    );
}
