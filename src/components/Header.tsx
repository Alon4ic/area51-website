'use client';

import MobileMenu from './MobileMenu';
import BurgerBtn from './BurgerBtn';
import { useState } from 'react';
import Button from './ButtonSpan';
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="xl:mx-[80px] lg:mx-[60px] sm:mx-[40px] mx-5 pt-[44px]">
            <div className="flex justify-between">
                <BurgerBtn isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

                <div className="flex phone:mr mr-0">
                    <Link href="/">
                        <Image
                            src="/images/logo.svg"
                            alt="Logo"
                            width={105}
                            height={60}
                        />
                    </Link>
                </div>
                <div className="sm:flex hidden flex-end items-center">
                    <div className="hidden laptop:flex justify-between items-center">
                        <NavLinks />
                    </div>
                    <div className="laptop:ml-[33px] ml-0">
                        <Button
                            onClick={() => {
                                document
                                    .getElementById('contact')
                                    ?.scrollIntoView({
                                        behavior: 'smooth',
                                    });
                            }}
                            className="px-[30px] py-[15px] uppercase phone:ml-[33px] ml-0 phone:flex hidden"
                        >
                            Message&nbsp;&nbsp;us
                        </Button>
                    </div>
                </div>
            </div>
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </header>
    );
}
