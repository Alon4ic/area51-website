import React, { useEffect } from 'react';
import { navLinks } from './NavLinks';
import Link from 'next/link';
import Image from 'next/image';
import ButtonMenu from './ButtonMenu';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={onClose}
        >
            {/* Фон затемнения */}
            <div className="fixed inset-0 bg-black/80" onClick={onClose}></div>
            <div
                className={`fixed top-0 left-0 w-[100vw] bg-[#1e1e1e] shadow-lg transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Верхняя панель с логотипом и кнопкой */}
                <div
                    className="flex justify-between px-10 py-5 items-center"
                    onClick={onClose}
                >
                    <Link href="/" onClick={onClose}>
                        <Image
                            src="/images/Logo.svg"
                            alt="logo"
                            width={105}
                            height={60}
                        />
                    </Link>
                    <button
                        onClick={onClose}
                        className="text-black bg-transparent hover:bg-[#454441] text-sm p-2"
                    >
                        <Image
                            src="/icons/x.svg"
                            alt="Button"
                            width={46}
                            height={46}
                        />
                    </button>
                </div>
                <div className="relative flex phone:pt-[34px] pt-[70px] middle:gap-[205px] gap-[100px]">
                    <div className="flex md:max-w-[359px] w-[100%] flex-col md:justify-start justify-center md:items-start items-center phone:gap-[15px] gap-0 md:pl-[40px] pl-0">
                        {navLinks.map((item) => (
                            <Link
                                href={item.href}
                                key={item.id}
                                className="group phone:text-[30px] text-[34px] text-white hover:text-[#BDBDBD] leading-[58px] font-medium relative pb-2 mb-2" // Добавлен класс group
                                onClick={onClose}
                            >
                                {item.name}
                                <span className="absolute left-0 top-1/2 h-[3px] bg-[#BDBDBD] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out transform -translate-y-1/2 origin-left group-[&:not(:hover)]:origin-right"></span>
                            </Link>
                        ))}
                        <ButtonMenu
                            className="mt-4 px-[92px] py-[15px]"
                            onClick={() => {
                                document
                                    .getElementById('contact')
                                    ?.scrollIntoView({
                                        behavior: 'smooth',
                                    });
                                onClose();
                            }}
                        >
                            Message us
                        </ButtonMenu>
                    </div>
                    <div
                        className="md:flex hidden flex-col justify-center items-start mr-[40px]"
                        onClick={onClose}
                    >
                        <div>
                            <p className="max-w-[391px] text-base text-[#828282] leading-7 font-normal pb-[30px]">
                                Committed to developing innovative solutions
                                that effortlessly integrate with a variety of
                                environments, from the warmth of private homes
                                to the majesty of public spaces we put all our
                                heart and passion in your dream projects.
                            </p>
                            <div className="flex gap-[10px] mb-[16px] z-[100] cursor-pointer">
                                <Image
                                    src="/icons/burger_email.svg"
                                    alt="mail"
                                    width={31}
                                    height={24}
                                />
                                <a
                                    href="mailto:admin@hello@area51dxb.com"
                                    className="text-lg leading-6 font-normal text-white"
                                >
                                    hello@area51dxb.com
                                </a>
                            </div>
                            <div className="flex gap-[10px] cursor-pointer">
                                <Image
                                    src="/icons/burger_coll.svg"
                                    alt="mail"
                                    width={24}
                                    height={24}
                                />
                                <a
                                    href="tel:971526731428"
                                    className="text-lg font-normal text-white cursor-pointer"
                                >
                                    + 971 52 673 1428
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="phone:pt-[49px] pt-[36px] pb-[22px] flex justify-center">
                    <div>
                        <p className="uppercase font-extrabold text-white text-[12.5px] leading-[17px] tracking-[10%]">
                            Copyright 2025, Active Tribe
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6 pb-[19px]">
                    <a
                        className="w-[31.4px] h-[31.4px] rounded-full bg-goldBase flex justify-center items-center"
                        href="https://www.linkedin.com/company/area51dxb/"
                        target="_blank"
                    >
                        <Image
                            src="/icons/linkedin_menu.svg"
                            alt="Linkedin"
                            width={15}
                            height={15}
                        />
                    </a>
                    <a
                        className="w-[31.4px] h-[31.4px] rounded-full bg-goldBase flex justify-center items-center"
                        href="https://www.instagram.com/area_51_dxb/"
                        target="_blank"
                    >
                        <Image
                            src="/icons/instagram_menu.svg"
                            alt="Instagram"
                            width={15}
                            height={15}
                            className="width-[15.7px] height-[15.7px]"
                        />
                    </a>
                    <a
                        className="w-[31.4px] h-[31.4px] rounded-full bg-goldBase flex justify-center items-center text-baseText"
                        href="https://www.facebook.com"
                        target="_blank"
                    >
                        <Image
                            src="/icons/facebook_menu.svg"
                            alt="Facebook"
                            width={8}
                            height={15}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
