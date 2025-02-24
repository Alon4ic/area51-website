import React from 'react';
import LinesAbout from './LinesAbout';

export default function About() {
    return (
        <>
            <div className="flex flex-col justify-start max-w-[1005px] custom-mx desktop:pt-[744px] xl:pt-[706px] lg:pt-[627px] md:pt-[593px] sm:pt-[450px] phone:pt-[376px] pt-[106px] md:pb-[100px] pb-[60px]">
                <h2 className="font-normal font-architects desktop:text-[70px] phone:text-[50px] text-[40px] md:leading-[130px] leading-[70px] text-white">
                    The Story Behind Area51
                </h2>
                <p className="font-normal desktop:text-xl md:text-lg text-base md:leading-[32px] text-white mt-5">
                    As Interior material finishes consultant we wanted to create
                    a NON-ORDINARY material hub dedicated to Architects and
                    Interior designers where project ideas can be easily
                    designed, refined and realized. The ARCHI-SPACE has been
                    designed by Arch. Arnaldo Puglia and developed daily by a
                    friendship team work, so this is a special thanks to the
                    Architect Arnaldo, our Italian Business Partners, the Artist
                    Alina, the Art Director Federica, the Interior Decorator
                    Tatiana.
                </p>
            </div>
            <LinesAbout />
        </>
    );
}
