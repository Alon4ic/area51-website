import Header from '@/components/Header';
import Interior from '@/components/Interior';
import LinesTop from '@/components/LinesTop';
import Materials from '@/components/Materials';
import Outdoor from '@/components/Outdoor';
import Services from '@/components/Services';
import Team from '@/components/Team';
import TopBlock from '@/components/TopBlock';

export default function Home() {
    return (
        <>
            <div className="lg:bg-[url('/images/bg-top.jpg')] bg-[url('/images/bg-top-smal.jpg')] relative bg-left bg-cover">
                <Header />
                <div
                    id="home"
                    className="custom-mx xl:pt-[152px] sm:pt-[100px] pt-[52px] desktop:pb-[267px] xl:pb-[148px] lg:pb-[161px] sm:pb-[231px] pb-[138px]"
                >
                    <TopBlock />
                    <div className="absolute bottom-[38px] right-[79px] hidden desktop:block">
                        <p className="text-grayText font-normal text-lg">
                            Area51 Al Quoz Showroom
                        </p>
                    </div>
                    <LinesTop />
                </div>
            </div>
            <div id="services" className="bg-bgGreen">
                <Services />
            </div>
            <div id="products">
                <div className="bg-baseText">
                    <Interior />
                </div>
                <div className="bg-bgGreen">
                    <Outdoor />
                </div>
                <div className="bg-bgGreen">
                    <Materials />
                </div>
                <div className="bg-baseText">
                    <Team />
                </div>
            </div>
        </>
    );
}
