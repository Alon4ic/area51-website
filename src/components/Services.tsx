import React from 'react';
import BlockServices from './BlockServices';
import LinesService from './LinesService';

export default function Services() {
    return (
        <div className="custom-mx desktop:pt-[100px] xl:pt-[80px] md:pt-[60px] pt-[40px]">
            <div className="md:flex block justify-between desktop:mb-[100px] lg:mb-[80px] mb-[60px]desktop:pb-[100px] lg:pb-[80px] phone:pb-[60px] pb-5">
                <div className="lg:pr-4 pr-0 md:mb-0 mb-10">
                    <h2 className="font-normal desktop:text-[100px] xl:text-[90px] sm:text-[70px] text-[40px] xl:leading-[130px] sm:leading-[90px] leading-[60px] text-white font-architects">
                        Building your
                        <br /> modern space
                    </h2>
                </div>
                <div className="md:w-[45.7%] w-[100%]">
                    <p className="text-styles pb-2">
                        AREA 51 is a Design HUB where we empower design experts
                        with cutting-edge materials to create extraordinary
                        spaces.
                    </p>
                    <p className="text-styles pb-2">
                        With 25 years of industry expertise, we specialize in
                        sourcing a wide array of high-end Italian materials,
                        including porcelain stoneware, mosaic tiles, sanitary
                        ware, mixers, wooden flooring, artistic wallpapers, and
                        more.
                    </p>
                    <p className="text-styles">
                        Our brands seamlessly combine timeless craftsmanship
                        with advanced technology, guaranteeing unmatched quality
                        and visual elegance.
                    </p>
                </div>
            </div>
            <BlockServices />
            <div className="desktop:mt-[100px] lg:mt-[80px] phone:mt-[60px] mt-[20px] relative">
                <div className="w-full desktop:h-[768px] xl:h-[698px] sm:h-[630px] h-[493px] md:bg-[url('/images/bg-service.jpg')] phone:bg-[url('/images/md-bg-service.jpg')] bg-[url('/images/phone-bg-service.jpg')] lg:bg-left-top bg-center-top bg-no-repeat desktop:bg-cover lg:bg-auto md:bg-cover bg-auto"></div>
                <LinesService />
            </div>
        </div>
    );
}
