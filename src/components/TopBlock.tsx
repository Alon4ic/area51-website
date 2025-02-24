import React from 'react';
import Button from './ButtonSpan';

export default function TopBlock() {
    return (
        <>
            <div className="flex flex-col justify-start">
                <h1 className="font-architects font-normal desktop:text-[100px] xl:text-[90px] lg:text-[80px] sm:text-[70px] text-[48px] lg:leading-[110px] sm:leading-[90px] leading-[60px] text-white mb-7">
                    Solutions&nbsp;
                    <br className="hidden lg:inline" />
                    for
                    <br className="lg:hidden inline" /> interior design
                </h1>
                <p className="max-w-[877px] text-grayText font-normal text-xl leading-[32px]">
                    Area51 is a premier provider of exceptional Italian
                    materials in the GCC region, offering a curated selection
                    that includes porcelain stone ware, sanitary ware, mixers,
                    accessories, wallpapers, pergolas, wooden flooring, and
                    mosaic tiles.
                </p>
                <div className="mt-[28px]">
                    <Button
                        className="px-[40px] py-[15px]"
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({
                                behavior: 'smooth',
                            });
                        }}
                    >
                        VISIT OUR NOT ORDINARY SPACE{' '}
                    </Button>
                </div>
            </div>
        </>
    );
}
