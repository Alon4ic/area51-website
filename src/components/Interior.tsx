import Image from 'next/image';
import React, { useState } from 'react';
import Button from './ButtonSpan';
import { imagesByButton } from '../constants/imageConstants'; // Путь к вашему файлу

export default function Interior() {
    const [activeButton, setActiveButton] = useState(1);

    return (
        <div className="desktop:py-[100px] xl:py-[80px] md:py-[60px] py-[40px] custom-mx">
            <div className="mb-[53px] text-center">
                <h2 className="font-normal text-[60px] leading-[80px] text-white font-architects">
                    Interior Products
                </h2>
                <p className="font-normal text-grayText text-xl leading-[34px]">
                    Dive in our exclusive range of premium interior products,
                    featuring renowned Italian brands. From elegant tiles and
                    wooden parquet to stylish wallpapers, mixers, and sanitary
                    ware, we offer unmatched quality and timeless designs.
                    Transform your spaces with materials that blend class and
                    functionality seamlessly.
                </p>
            </div>

            <div className="flex flex-wrap w-full desktop:mb-[80px] mb-[40px]">
                {/* Кнопка 1 */}
                <button
                    className={`flex middle:w-1/4 sm:w-1/2 w-full pt-[20px] pb-[25px] justify-center items-center uppercase group border-b-[2px] border-b-[#46484b] middle:border-r-0 sm:border-r-[#46484b] border-r border-r-transparent ${
                        activeButton === 1
                            ? 'bg-goldBase text-baseText border-b-goldBase border-r-goldBase'
                            : 'bg-transparent text-grayText'
                    }`}
                    onClick={() => setActiveButton(1)}
                >
                    <span
                        className={`before:content-[''] before:w-2 before:h-2 before:mr-2 before:inline-block pb-[3px] pr-4 ${
                            activeButton === 1
                                ? 'before:bg-graySpan'
                                : 'before:bg-white '
                        }`}
                    ></span>
                    <span>TILES & SLABS</span>
                </button>

                {/* Кнопка 2 */}
                <button
                    className={`flex middle:w-1/4 sm:w-1/2 w-full pt-[20px] pb-[25px] justify-center items-center uppercase  group border-b-[2px] border-b-[#46484b] middle:border-l-0 sm:border-l-[#46484b] border-l border-l-transparent ${
                        activeButton === 2
                            ? 'bg-goldBase text-baseText border-b-goldBase border-l-goldBase'
                            : 'bg-transparent text-grayText'
                    }`}
                    onClick={() => setActiveButton(2)}
                >
                    <span
                        className={`before:content-[''] before:w-2 before:h-2 before:mr-2 before:inline-block pb-[3px] pr-4 ${
                            activeButton === 2
                                ? 'before:bg-graySpan'
                                : 'before:bg-white'
                        }`}
                    ></span>
                    <span>TAPS & FITTINGS</span>
                </button>

                {/* Кнопка 3 */}
                <button
                    className={`flex middle:w-1/4 sm:w-1/2 w-full pt-[20px] pb-[25px] justify-center items-center uppercase group border-b-[2px] middle:border-b-[#46484b] sm:border-b-transparent border-b-[#46484b] middle:border-r-0 sm:border-r-[#46484b] border-r border-r-transparent ${
                        activeButton === 3
                            ? 'bg-goldBase text-baseText border-b-goldBase border-r-goldBase'
                            : 'bg-transparent text-grayText'
                    }`}
                    onClick={() => setActiveButton(3)}
                >
                    <span
                        className={`before:content-[''] before:w-2 before:h-2 before:mr-2 before:inline-block pb-[3px] pr-4 ${
                            activeButton === 3
                                ? 'before:bg-graySpan'
                                : 'before:bg-white'
                        }`}
                    ></span>
                    <span>WOODEN PARQUET</span>
                </button>

                {/* Кнопка 4 */}
                <button
                    className={`flex middle:w-1/4 sm:w-1/2 w-full pt-[20px] pb-[25px] justify-center items-center uppercase group border-b-[2px] middle:border-b-[#46484b] sm:border-b-transparent border-b-[#46484b] middle:border-l-0 sm:border-l-[#46484b] border-l border-l-transparent ${
                        activeButton === 4
                            ? 'bg-goldBase text-baseText border-b-goldBase border-l-goldBase'
                            : 'bg-transparent text-grayText'
                    }`}
                    onClick={() => setActiveButton(4)}
                >
                    <span
                        className={`before:content-[''] before:w-2 before:h-2 before:mr-2 before:inline-block pb-[3px] pr-4 ${
                            activeButton === 4
                                ? 'before:bg-graySpan'
                                : 'before:bg-white'
                        }`}
                    ></span>
                    <span>WALLPAPER</span>
                </button>
            </div>

            <div className="grid desktop:grid-cols-4 md:grid-cols-2 grid-cols gap-[30px] transition-all duration-500">
                {imagesByButton[activeButton.toString()].map(
                    (imgSrc, index) => (
                        <Image
                            key={index}
                            src={imgSrc}
                            alt={`Image ${index + 1}`}
                            width={622}
                            height={411}
                            className="w-[100%] h-[100%] object-contain shadow-md"
                        />
                    )
                )}
            </div>
            <div className="flex justify-center phone:pt-[60px] pt-[40px]">
                <Button
                    className="uppercase py-[15px] px-[30px]"
                    onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({
                            behavior: 'smooth',
                        });
                    }}
                >
                    Transform Space with Area51!
                </Button>
            </div>
        </div>
    );
}
