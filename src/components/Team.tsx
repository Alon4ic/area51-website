import Image from 'next/image';
import React from 'react';

const blocksData = [
    {
        id: 1,
        image: '/images/ava-1.png',
        title: 'Cristina Ibelli',
        description: 'Founder',
        skills: ['English', 'Italian'],
        linkedinUrl: ' https://www.linkedin.com/in/cristina-ibelli-087462ba/',
    },
    {
        id: 2,
        image: '/images/ava-2.png',
        title: 'Alina Haisina',
        description: 'Business Developer & Project Advisor',
        skills: ['English', 'Russian'],
        linkedinUrl: 'https://www.linkedin.com/in/alina-haisina-46a56b82/',
    },
    {
        id: 3,
        image: '/images/ava-3.png',
        title: 'Tamer Zaki',
        description: 'Business Developer & Project Advisor',
        skills: ['English', 'Arabic'],
        linkedinUrl: 'https://www.linkedin.com/in/tamer-zaki-63525260/',
    },
    {
        id: 4,
        image: '/images/ava-4.png',
        title: 'Ilaria Ricatti',
        description: 'Business Developer & Project Advisor',
        skills: ['English', 'Italian'],
        linkedinUrl: 'https://www.linkedin.com/in/ilaria-ricatti/',
    },
];

export default function Team() {
    return (
        <div className="desktop:pt-[100px] xl:pt-[80px] phone:pt-[60px] pt-[40px] desktop:pb-[98px] xl:pb-[80px] phone:pb-[60px] pb-[40px] custom-mx ">
            <div className="flex justify-center text-center phone:pb-[60px] pb-[40px]">
                <h2 className="font-architects desktop:text-[60px] phone:text-[50px] text-[40px] phone:leading-[80px] leading-[60px] text-white">
                    Our Non-Ordinary Team
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 desktop:gap-[40px] lg:gap-6 phone:gap-[40px] gap-5">
                {blocksData.map((block) => (
                    <div
                        key={block.id}
                        className=" transition-shadow duration-300"
                    >
                        <Image
                            src={block.image}
                            alt={block.title}
                            width={416}
                            height={500}
                            className="w-full max-h-[500px] object-cover deesktop:mb-[30px] mb-6 object-top"
                        />
                        <h3 className="text-white mt-[30px] font-normal desktop:text-[35px] xl:text-[28px] text-2xl leading-[34px]">
                            {block.title}
                        </h3>
                        <p className="text-lightGray desktop:text-xl xl:text-base lg:text-sm text-base desktop:leading-[34px] lg:leading-[26px] phone:leading-[34px] leading-6 desktop:mt-[10px] mt-1">
                            {block.description}
                        </p>
                        <div className="flex justify-between items-center gap-2 mt-2 desktop:mb-[30px] lg:mb-6 phone:mb-[30px] mb-4">
                            <div>
                                {block.skills
                                    .slice(0, 3)
                                    .map((skill, index) => (
                                        <span
                                            key={index}
                                            className="text-[#f2f2f2] desktop:text-2xl lg:text-lg phone:text-2xl text-base font-normal desktop:leading-[34px] lg:leading-[26px] md:leading-[34px] leading-6 pr-5"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                            </div>
                            <div>
                                <a
                                    href={block.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center text-white "
                                >
                                    <Image
                                        src="/icons/linkedin.svg"
                                        alt="Linkedin"
                                        width={30}
                                        height={34}
                                        className="desktop:w-[30px] xl:w-[25px] lg:w-[21px] w-[30px] desktop:h-[30px] xl:h-[25px] lg:h-[21px] h-[30px]"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
