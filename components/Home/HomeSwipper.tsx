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
import styles from '@/styles/common.module.scss'

import { NoticeList } from "@/utils/noticeList";
import Link from "next/link";

const HomeSwipper = () => {
    return (
        <div className="flex flex-col md:flex-row px-4 py-4 gap-8">
            <div className="md:w-3/5">
                <Swiper pagination={{
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


const NoticeCarousel = () => {

    return (
        <div className="px-4">
            <h1 className="font-bold text-3xl mb-5 text-blue-800">Notices</h1>
            <Swiper
                scrollbar={{
                    hide: false,
                    draggable: true,
                    dragSize: 'auto',
                    dragClass: styles.dragNoticeScrollBar
                }}
                modules={[Scrollbar, Autoplay]}
                className="h-[300px]"
                direction="vertical"
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {
                    NoticeList.sort((a, b) => b.date.getTime() - a.date.getTime()).map(notice => {
                        console.log(notice.date)
                        return (
                            <SwiperSlide key={notice.id}>
                                <Link href={notice.link}>
                                    <div className="border-b border-blue-600/50 w-4/5 py-2">
                                        <h3 className="text-red-800 font-medium">{notice.title}</h3>
                                        <p className="text-slate-800 font-thin leading-4">{notice.content}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    }
                    )
                }
            </Swiper>
        </div>
    )
}