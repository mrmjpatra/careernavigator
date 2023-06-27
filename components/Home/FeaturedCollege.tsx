import { Swiper, SwiperSlide } from "swiper/react";
import styles from '@/styles/common.module.scss'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Image from "next/image";
import c1 from '@/public/assets/c2.jpg'
import c2 from '@/public/assets/c3.jpg'
import c3 from '@/public/assets/c4.jpg'
import c4 from '@/public/assets/c5.jpg'
import c5 from '@/public/assets/c6.jpg'
import { IoArrowBack } from 'react-icons/io5'
import { useRef } from "react";
import { Swiper as SwiperType } from 'swiper';


const FeaturedCollege = () => {
    const swiperRef = useRef<SwiperType>();
    return (
        <div className="py-5">
            <h1 className="text-blue-800 text-3xl md:text-4xl text-center mb-6">Featured College</h1>
            <div className="relative">
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    pagination={{
                        clickable: true,
                    }}
                    
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    loop={true}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="md:w-3/4 mx-auto w-[90%]"
                >
                    <SwiperSlide>
                        <div className="flex justify-center md:py-5">
                            <iframe  src="https://www.youtube.com/embed/Yiw354fkSOs" title="Pasoori Nu: SatyaPrem Ki Katha |Kartik, Kiara |Arijit, Rochak, Ali, Tulsi, Gurpreet |Sajid N, Sameer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="border-none rounded-lg shadow-md shadow-red-800 w-full h-[200px] sm:h-[350px] md:w-[836px] md:h-[441px]"></iframe>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center md:py-5">
                            <iframe  src="https://www.youtube.com/embed/Yiw354fkSOs" title="Pasoori Nu: SatyaPrem Ki Katha |Kartik, Kiara |Arijit, Rochak, Ali, Tulsi, Gurpreet |Sajid N, Sameer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="border-none rounded-lg shadow-md shadow-red-800 md:w-[836px] md:h-[441px]"></iframe>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center md:py-5">
                            <iframe  src="https://www.youtube.com/embed/Yiw354fkSOs" title="Pasoori Nu: SatyaPrem Ki Katha |Kartik, Kiara |Arijit, Rochak, Ali, Tulsi, Gurpreet |Sajid N, Sameer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="border-none rounded-lg shadow-md shadow-red-800 md:w-[836px] md:h-[441px]"></iframe>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center md:py-5">
                            <iframe  src="https://www.youtube.com/embed/Yiw354fkSOs" title="Pasoori Nu: SatyaPrem Ki Katha |Kartik, Kiara |Arijit, Rochak, Ali, Tulsi, Gurpreet |Sajid N, Sameer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="border-none rounded-lg shadow-md shadow-red-800 md:w-[836px] md:h-[441px]"></iframe>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="bg-indigo-700 text-white absolute top-1/2 w-9 h-9  justify-center items-center cursor-pointer 
                    left-[5%] md:left-[10%] rounded-full shadow-md hidden md:flex"
                >
                    <IoArrowBack className="text-2xl" />
                </div>

                <div onClick={() => {
                    swiperRef.current?.slideNext()
                }}
                    className="bg-indigo-700 text-white absolute top-1/2 w-9 h-9  justify-center items-center cursor-pointer 
                    right-[5%] md:right-[10%] rounded-full shadow-lg shadow-indigo-700 hidden md:flex"
                >
                    <IoArrowBack className="rotate-180 text-2xl" />
                </div>

            </div>
        </div>
    )
}

export default FeaturedCollege