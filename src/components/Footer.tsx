import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback } from 'react';
import Button from './Button';

export default function Footer() {
    const handleMapClick = useCallback(() => {
        const isMobile =
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );

        if (isMobile) {
            const userChoice = confirm(
                'Would you like to open the address in Apple Maps or Google Maps? Click "OK" for Apple Maps or "Cancel" for Google Maps.'
            );

            if (userChoice) {
                window.open(
                    'https://maps.apple.com/?q=Warehouse+16,+Al+Quoz,+Al+Quoz+Industrial+Area+3,+Dubai',
                    '_blank'
                );
            } else {
                window.open(
                    'https://www.google.com/maps/search/?api=1&query=Warehouse+16,+Al+Quoz,+Al+Quoz+Industrial+Area+3,+Dubai',
                    '_blank'
                );
            }
        } else {
            window.open(
                'https://www.google.com/maps/search/?api=1&query=Warehouse+16,+Al+Quoz,+Al+Quoz+Industrial+Area+3,+Dubai',
                '_blank'
            );
        }
    }, []);
    return (
        <div className="custom-mx pt-[71px]">
            <div className="flex middle:flex-row flex-col justify-between desktop:pb-[114.5px] xl:pb-[68px] pb-[56px] border-b-[1.33px] border-b-[#ffffff26]">
                <div className="flex flex-col justify-start middle:mb-0 mb-[80px]">
                    <Link className="mb-[30px]" href="/">
                        <Image
                            src="/images/logo.svg"
                            alt="Logo"
                            width={105}
                            height={60}
                            className="mb-[30px]"
                        />
                    </Link>
                    <p className="font-normal text-xl leading-[34px] text-white">
                        Committed to developing innovative solutions that
                        effortlessly integrate with a variety of environments,
                        from the warmth of private homes to the majesty of
                        public spaces we put all our heart and passion in your
                        dream projects.
                    </p>
                    <div className="flex mt-[30px] justify-start items-center gap-[24px]">
                        <a
                            href="https://www.linkedin.com/company/area51dxb/"
                            target="_blank"
                        >
                            <Image
                                src="/icons/linkedin.svg"
                                alt="Linkedin"
                                width={21}
                                height={21}
                                className="w-[21px] h-[21px]"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/area_51_dxb/"
                            target="_blank"
                        >
                            <Image
                                src="/icons/instagram.svg"
                                alt="Linkedin"
                                width={21}
                                height={21}
                                className="w-[21px] h-[21px]"
                            />
                        </a>
                    </div>
                </div>
                <div className="lg:w-[549px] md:w-[476px] w-[100%] flex middle:flex-row flex-col justify-between lg:ml-[269px] middle:ml-[40px] ml-0">
                    <div className="flex flex-col justify-start w-[240px] middle:mb-0 mb-[40px] items-start">
                        <h3 className="font-normal text-[22px] leading-[32px] text-goldBase font-architects tracking--2 sm:mb-[42.6px] mb-[30px]">
                            Menu
                        </h3>
                        <Link
                            href="#products"
                            className="group text-[21.33px] text-white leading-[32px] tracking--2 mb-[17.3px] inline-block relative hover:text-[#BDBDBD] pb-[4px]"
                        >
                            Products
                            <span className="absolute left-0 top-1/2 h-[3px] bg-[#BDBDBD] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out transform -translate-y-1/2 origin-left group-[&:not(:hover)]:origin-right"></span>
                        </Link>
                        <Link
                            href="#services"
                            className="group text-[21.33px] text-white leading-[32px] tracking--2 mb-[17.3px] inline-block hover:text-[#BDBDBD] relative pb-[4px]"
                        >
                            Services
                            <span className="absolute left-0 top-1/2 h-[3px] bg-[#BDBDBD] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out transform -translate-y-1/2 origin-left group-[&:not(:hover)]:origin-right"></span>
                        </Link>
                        <Link
                            href="#team"
                            className="group text-[21.33px] text-white leading-[32px] tracking--2 mb-[17.3px] inline-block hover:text-[#BDBDBD] relative pb-[4px]"
                        >
                            Team
                            <span className="absolute left-0 top-1/2 h-[3px] bg-[#BDBDBD] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out transform -translate-y-1/2 origin-left group-[&:not(:hover)]:origin-right"></span>
                        </Link>
                        <Link
                            href="#about"
                            className="group text-[21.33px] text-white leading-[32px] tracking--2 inline-block hover:text-[#BDBDBD] relative pb-[4px]"
                        >
                            About us
                            <span className="absolute left-0 top-1/2 h-[3px] bg-[#BDBDBD] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out transform -translate-y-1/2 origin-left group-[&:not(:hover)]:origin-right"></span>
                        </Link>
                    </div>
                    <div className="flex flex-col text-start w-[249px] middle:pl-[60px] pl-0 gap-[21.3px] middle:mb-0 mb-[40px]">
                        <h3 className="font-normal text-[22px] leading-[32px] text-goldBase font-architects tracking--2 sm:pb-[21.3px] pb-[9.7px]">
                            Contacts
                        </h3>
                        <Button
                            className=" text-[21.33px] text-white  leading-[32px] tracking--2 text-left"
                            onClick={handleMapClick}
                        >
                            warehouse 16 - Al Quoz Al Quoz Industrial Area 3
                            Dubai
                        </Button>
                        <a
                            href="tel:971526731428"
                            className="text-[21.33px] text-white leading-[32px] tracking--2"
                        >
                            + 971 52 673 1428
                        </a>
                        <a
                            href="mailto:hello@area51dxb.com"
                            className="text-[21.33px] text-white leading-[32px] tracking--2"
                        >
                            hello@area51dxb.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between pt-[21px] desktop:pb-[42px] xl:pb-[45px] lg:pb-[42px] md:pb-[26px] pb-[60px]">
                <p className="font-medium text-base tracking--2 leading-[22px] text-[#828282] sm:pb-0 pb-[10px]">
                    Copyright © 2025 Area51
                </p>
                <p className="font-medium text-base tracking--2 leading-[22px] text-[#828282]">
                    Designed by Ingenious Dynamics
                </p>
            </div>
        </div>
    );
}
