'use client'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/scrollbar";
import { Pagination, Autoplay, Scrollbar } from "swiper";
import Image from "next/image";
import { fetchBannerPhotosType } from "./HomeSwipper";


const BannerPhotos = ({ bannerPhotos }: { bannerPhotos: fetchBannerPhotosType[] }) => {
    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }} modules={[Pagination, Autoplay, Scrollbar]} className="md:h-96 h-48" slidesPerView={1} loop={true} >
            {
                bannerPhotos?.map(photo => <SwiperSlide key={photo.id}>
                    <Image src={photo.banner.downloadUrl} width={300} height={300} alt={photo.banner.fileName} className="block w-full h-full object-cover" />
                </SwiperSlide>)
            }
        </Swiper>
    )
}

export default BannerPhotos