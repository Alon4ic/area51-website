import React, { useState, useEffect } from 'react';

const backgroundImages = [
    '/images/material11.png',
    '/images/material2.jpg',
    '/images/material3.jpg',
];

const smallScreenBackgroundImages = [
    '/images/md-material1.png',
    '/images/md-material2.jpg',
    '/images/md-material3.jpg',
];

export default function Materials() {
    const [activeBackground, setActiveBackground] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 720); // md breakpoint
        };

        handleResize(); // Проверка при загрузке
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const currentBackgroundImages = isSmallScreen
        ? smallScreenBackgroundImages
        : backgroundImages;

    return (
        <div
            className="relative w-full desktop:h-[946px] xl:h-[710px] lg:h-[593px] md:h-[473px] h-[1200px] bg-cover md:bg-center bg-left"
            style={{
                backgroundImage: `url(${currentBackgroundImages[activeBackground]})`,
            }}
        >
            {/* Прозрачные кнопки */}
            <div className="absolute inset-0 flex md:flex-row flex-col xl:mx-[80px] lg:mx-[60px] md:mx-[40px] mx-0">
                <button
                    className="flex-1 flex flex-col justify-start bg-transparent hover:bg-black/10 transition-colors desktop:pt-[767px] xl:pt-[575px] lg:pt-[481px] md:pt-[383px] pt-[332px] md:pb-0 pb-[27px] border-r md:border-r-gray30 border-r-transparent border-b md:border-b-0 border-b-gray30 md:px-0 px-10"
                    onClick={() => setActiveBackground(0)}
                >
                    <a className="font-normal desktop:text-lg lg:text-sm desktop:leading-[34px] lg:leading-[25.5px] text-grayText underline">
                        View
                    </a>
                    <span className="text-white font-medium desktop:text-[30px] xl:text-2xl lg:text-xl text-base desktop:leading-[34px] xl:leading-[25.5px] lg:leading-[21.3px] leading-[17px]">
                        Project consultancy
                    </span>
                </button>
                <button
                    className="flex-1 flex flex-col justify-start bg-transparent hover:bg-black/10 transition-colors desktop:pt-[767px] xl:pt-[575px] lg:pt-[481px] md:pt-[383px] pt-[332px] md:pb-0 pb-[27px] border-r md:border-r-gray30 border-r-transparent border-b md:border-b-0 border-b-gray30 md:px-0 px-10"
                    onClick={() => setActiveBackground(0)}
                >
                    <a className="font-normal desktop:text-lg lg:text-sm desktop:leading-[34px] lg:leading-[25.5px] text-grayText underline left-padding">
                        View
                    </a>
                    <span className="text-white font-medium desktop:text-[30px] xl:text-2xl lg:text-xl text-base desktop:leading-[34px] xl:leading-[25.5px] lg:leading-[21.3px] leading-[17px] left-padding">
                        Materials selections
                    </span>
                </button>
                <button
                    className="flex-1 flex flex-col justify-start bg-transparent hover:bg-black/10 transition-colors desktop:pt-[767px] xl:pt-[575px] lg:pt-[481px] md:pt-[383px] pt-[332px] md:pb-0 pb-[27px] md:px-0 px-10"
                    onClick={() => setActiveBackground(0)}
                >
                    <a className="font-normal desktop:text-lg lg:text-sm desktop:leading-[34px] lg:leading-[25.5px] text-grayText underline left-padding">
                        View
                    </a>
                    <span className="text-white font-medium desktop:text-[30px] xl:text-2xl lg:text-xl text-base desktop:leading-[34px] xl:leading-[25.5px] lg:leading-[21.3px] leading-[17px] left-padding">
                        Mood boards
                    </span>
                </button>
            </div>
        </div>
    );
}

