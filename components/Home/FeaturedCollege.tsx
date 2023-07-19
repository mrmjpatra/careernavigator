'use client'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { IoArrowBack } from 'react-icons/io5'
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from 'swiper';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type VideoUrlsType = {
    id: string,
    videoUrl: string,
    createdAt: string,
    updatedAt: string
}

const fetchData = async () => {
    const { data } = await axios.get(`${process.env.HOST}/api/videos`);
    const details: VideoUrlsType[] = data.message;
    return details;
}

const FeaturedCollege = () => {
    const [sortedVideoUrls, setSortedVideosUrls] = useState<VideoUrlsType[]>();
    const swiperRef = useRef<SwiperType>();
    const { isLoading, error, data: videoUrls } = useQuery({
        queryKey: ['videoUrls'],
        queryFn: () => fetchData()
    });
    useEffect(() => {
        if (!isLoading && !error && videoUrls) {
            const sortedArray = videoUrls.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
            setSortedVideosUrls(sortedArray);
            const iframe = document.querySelector('iframe');
            if (iframe) {
                // iframe.style.width = '100%';
                // iframe.style.height = '300px';
            }
        }
    }, [isLoading, error, videoUrls]);
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
                    {
                        sortedVideoUrls?.map(video => <SwiperSlide key={video.id}>
                            <div className="flex justify-center md:py-5">
                                <iframe src={video.videoUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="border-none rounded-lg shadow-md shadow-red-800 w-full h-[200px] sm:h-[350px] md:w-[836px] md:h-[441px]"></iframe>
                            </div>
                        </SwiperSlide>)
                    }
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