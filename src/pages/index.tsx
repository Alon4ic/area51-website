import Head from 'next/head';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
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
            <Head>
                <title>
                    Area51 - Premium Italian Interior Design Materials in GCC
                </title>
                <meta
                    name="description"
                    content="Area51 offers premium Italian materials for interior design in the GCC region, including porcelain stoneware, mosaic tiles, sanitary ware, mixers, wallpapers, and wooden flooring. Discover timeless craftsmanship and advanced technology with our curated design solutions."
                />
                <meta
                    name="keywords"
                    content="interior design, Italian materials, porcelain stoneware, mosaic tiles, sanitary ware, mixers, wallpapers, wooden flooring, pergolas, GCC, Area51, design hub, architects, premium interior products"
                />
                <meta
                    property="og:title"
                    content="Area51 - Premium Italian Interior Design Solutions"
                />
                <meta
                    property="og:description"
                    content="Transform your spaces with Area51\u2019s exclusive Italian materials: porcelain stoneware, mosaic tiles, sanitary ware, wallpapers, and more. 25 years of expertise in GCC."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.area51design.com"
                />
                <meta
                    property="og:image"
                    content="https://www.area51design.com/images/og-image.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Area51 - Premium Italian Interior Design Solutions"
                />
                <meta
                    name="twitter:description"
                    content="Explore Area51\u2019s curated Italian materials for interior design: tiles, sanitary ware, wallpapers, and more. Timeless quality for GCC architects."
                />
                <meta
                    name="twitter:image"
                    content="https://www.area51design.com/images/twitter-image.jpg"
                />
            </Head>
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
            </div>
            <div className="bg-bgGreen">
                <Materials />
            </div>
            <div className="bg-baseText border-b-bgGreen" id="team">
                <Team />
            </div>
            <div className="bg-baseText" id="contact">
                <Contact />
            </div>
            <div
                className="xl:bg-[url('/images/about.jpg')] lg:bg-[url('/images/xl-about.jpg')] md:bg-[url('/images/md-about.jpg')] bg-[url('/images/md-about.jpg')] bg-no-repeat md:bg-center bg-cover bg-left relative bg-baseText"
                id="about"
            >
                <About />
            </div>
            <div className="bg-baseText">
                <Footer />
            </div>
        </>
    );
}
