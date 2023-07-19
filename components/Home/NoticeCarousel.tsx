'use client'
import { NoticeList } from "@/utils/noticeList";
import Link from "next/link";
import styles from '@/styles/common.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/scrollbar";
import { Pagination, Autoplay, Scrollbar } from "swiper";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type NoticeType = {
    id: String,
    title: string,
    link: string,
    createdAt: string,
    updatedAt: string
}
const fetchNotices = async () => {
    const { data } = await axios.get(`${process.env.HOST}/api/notice`);
    const details: NoticeType[] = data.message;
    return details;
}

const NoticeCarousel = () => {
    const [sortedNotices, setSortedNotices] = useState<NoticeType[]>();
    const { isLoading, error, data: notices } = useQuery({
        queryKey: ['notices'],
        queryFn: () => fetchNotices()
    });
    useEffect(() => {
        if (!isLoading && !error && notices) {
            const sortedValues = notices.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
            setSortedNotices(sortedValues);
        }
    }, [isLoading, error, notices]);
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
                    sortedNotices &&
                    sortedNotices.map(notice => {
                        return (
                            <SwiperSlide key={notice.id.toString()??''}>
                                <Link href={notice.link}>
                                    <div className="border-b border-blue-600/50 w-4/5 py-2">
                                        <h3 className="text-red-800 font-medium">{notice.title}</h3>
                                        <p className="text-slate-800 font-thin leading-4">{notice.link}</p>
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
export default NoticeCarousel;