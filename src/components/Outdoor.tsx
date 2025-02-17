import React, { useState } from 'react';
import Button from './Button';
import Image from 'next/image';

const imagesByBtn: { [key: string]: string[] } = {
    1: [
        '/images/outdoor/outdoor1-img1.jpg',
        '/images/outdoor/outdoor1-img2.jpg',
        '/images/outdoor/outdoor1-img3.jpg',
        '/images/outdoor/outdoor1-img4.jpg',
    ],
    2: [
        '/images/outdoor/outdoor2-img1.jpg',
        '/images/outdoor/outdoor2-img2.jpg',
        '/images/outdoor/outdoor2-img3.jpg',
        '/images/outdoor/outdoor2-img4.jpg',
    ],
    3: [
        '/images/outdoor/outdoor1-img1.jpg',
        '/images/outdoor/outdoor1-img2.jpg',
        '/images/outdoor/outdoor1-img3.jpg',
        '/images/outdoor/outdoor1-img4.jpg',
    ],
    4: [
        '/images/outdoor/outdoor1-img1.jpg',
        '/images/outdoor/outdoor1-img2.jpg',
        '/images/outdoor/outdoor1-img3.jpg',
        '/images/outdoor/outdoor1-img4.jpg',
    ],
};

export default function Outdoor() {
    const [activeButton, setActiveButton] = useState(1);
    return (
        <div className="desktop:py-[100px] xl:py-[80px] md:py-[60px] py-[40px] custom-mx">
            <div className="mb-[53px] text-center">
                <h2 className="font-normal text-[60px] leading-[80px] text-white font-architects">
                    Outdoor products
                </h2>
                <p className="font-normal text-grayText text-xl leading-[34px]">
                    Discover premium outdoor solutions crafted with elegance and
                    durability. From stylish tiles and pool decks to pergolas
                    and outdoor showers, our collection combines luxury and
                    functionality to enhance your outdoor spaces. Explore
                    top-quality materials designed to transform your living
                    areas into stunning retreats.
                </p>
            </div>
            <div className="flex flex-wrap w-full desktop:mb-[80px] mb-[40px]">
                {/* Кнопка 1 */}
                <button
                    className={`flex middle:w-1/4 sm:w-1/2 w-full pt-[20px] pb-[25px] justify-center items-center uppercase group border-b-[2px] middle:border-b-bottomGray sm:border-b-transparent border-b-[#4F4F4f]  ${
                        activeButton === 1
                            ? 'bg-goldBase text-baseText border-b-goldBase'
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
                    <span>TILES</span>
                </button>

                {/* Кнопка 2 */}
                <button
                    className={`flex middle:w-1/4 sm:w-1/2 w-full pt-[20px] pb-[25px] justify-center items-center uppercase  group border-b-[2px] middle:border-b-bottomGray sm:border-b-transparent border-b-[#4F4F4f] ${
                        activeButton === 2
                            ? 'bg-goldBase text-baseText border-b-goldBase'
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
                    <span>SHOWERS</span>
                </button>

                {/* Кнопка 3 */}
                <button
                    className={`flex middle:w-1/4 sm:w-1/2 w-full pt-[20px] pb-[25px] justify-center items-center uppercase group border-b-[2px] middle:border-b-bottomGray sm:border-b-transparent border-b-[#4F4F4f] ${
                        activeButton === 3
                            ? 'bg-goldBase text-baseText border-b-goldBase'
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
                    <span>PERGOLAS</span>
                </button>

                {/* Кнопка 4 */}
                <button
                    className={`flex middle:w-1/4 sm:w-1/2 w-full pt-[20px] pb-[25px] justify-center items-center uppercase group border-b-[2px] middle:border-b-bottomGray sm:border-b-transparent border-b-[#4F4F4f] ${
                        activeButton === 4
                            ? 'bg-goldBase text-baseText border-b-goldBase'
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
                    <span>DECKING</span>
                </button>
            </div>

            <div className="grid desktop:grid-cols-4 md:grid-cols-2 grid-cols gap-[30px] transition-all duration-500">
                {imagesByBtn[activeButton.toString()].map((imgSrc, index) => (
                    <Image
                        key={index}
                        src={imgSrc}
                        alt={`Image ${index + 1}`}
                        width={622}
                        height={411}
                        className="w-full h-auto object-cover  shadow-md"
                    />
                ))}
            </div>
            <div className="flex justify-center phone:pt-[60px] pt-[40px]">
                <Button className="uppercase py-[15px] px-[30px]">
                    Transform Space with Area51!
                </Button>
            </div>
        </div>
    );
}
