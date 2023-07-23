'use client'
import Link from "next/link";
import styles from '@/styles/common.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/scrollbar";
import { Pagination, Autoplay, Scrollbar } from "swiper";
import { NoticeType } from "./HomeSwipper";

const NoticeCarousel = ({sortedNotices}:{sortedNotices:NoticeType[]}) => {
    return (
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
                sortedNotices?.map(notice => {
                    return (
                        <SwiperSlide key={notice.id.toString() ?? ''}>
                            <Link href={notice.link}>
                                <div className="border-b border-blue-600/50 w-4/5 py-2">
                                    <h2 className="text-red-800 font-medium">{notice.title} </h2>
                                    <p className="text-slate-800 font-thin leading-4">{notice.link}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                }
                )
            }
        </Swiper>
    )
}
export default NoticeCarousel;