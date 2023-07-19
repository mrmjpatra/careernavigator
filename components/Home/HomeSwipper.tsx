import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/scrollbar";
import { Pagination, Autoplay, Scrollbar } from "swiper";
import Image from "next/image";
import c1 from '@/public/assets/c2.jpg';
import c2 from '@/public/assets/c3.jpg';
import c3 from '@/public/assets/c4.jpg';
import c4 from '@/public/assets/c5.jpg';
import c5 from '@/public/assets/c6.jpg';

import NoticeCarousel from "./NoticeCarousel";

const HomeSwipper = () => {
    return (
        <div className="flex flex-col md:flex-row px-4 py-4 gap-8">
            <div className="md:w-3/5">
                <Swiper 
                pagination={{
                    clickable: true,
                }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }} modules={[Pagination, Autoplay, Scrollbar]} className="mySwiper" slidesPerView={1} loop={true} >
                    <SwiperSlide>
                        <Image src={c1} width={300} height={300} alt="carousel image" className="block w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={c2} width={300} height={300} alt="carousel image" className="block w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={c3} width={300} height={300} alt="carousel image" className="block w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={c4} width={300} height={300} alt="carousel image" className="block w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={c5} width={500} height={300} alt="carousel image" className="block w-full h-full object-cover" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="md:w-2/5">
                <NoticeCarousel />
            </div>
        </div>
    )
}

export default HomeSwipper;


