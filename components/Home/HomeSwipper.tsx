'use client'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/scrollbar";
import { Pagination, Autoplay, Scrollbar } from "swiper";
import Image from "next/image";
import NoticeCarousel from "./NoticeCarousel";
import { ImageRef } from "@/utils/types";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


type fetchBannerPhotosType = {
    banner: ImageRef
    id: string,
    createdAt: string,
    updatedAt: string
}

const fetch = async () => {
    const { data } = await axios.get(`${process.env.HOST}/api/banners`);
    const details: fetchBannerPhotosType[] = data.message;
    return details;
}
const HomeSwipper = () => {
    const { isLoading, error, data: bannerPhotos } = useQuery({
        queryKey: ['bannerPhotos'],
        queryFn: () => fetch()
    });
    return (
        <div className="flex flex-col md:flex-row px-4 py-4 gap-8">
            <div className="md:w-3/5">
                {
                    isLoading ? <div className='flex justify-center items-center my-8'>
                        <div className='border-8 border-blue-100 rounded-full w-24 h-24  border-t-8 border-t-blue-600  animate-spin ease-linear duration-200'></div>
                    </div> :
                        <Swiper
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }} modules={[Pagination, Autoplay, Scrollbar]} className="h-96" slidesPerView={1} loop={true} >
                            {
                                bannerPhotos?.map(photo => <SwiperSlide key={photo.id}>
                                    <Image src={photo.banner.downloadUrl} width={300} height={300} alt={photo.banner.fileName} className="block w-full h-full object-cover" />
                                </SwiperSlide>)
                            }
                        </Swiper>
                }
            </div>
            <div className="md:w-2/5">
                <NoticeCarousel />
            </div>
        </div>
    )
}

export default HomeSwipper;


