import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';



const SchoolSwipper = ({ bannerPhotos }: { bannerPhotos: string[] }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };


    if (!bannerPhotos ||  bannerPhotos.length===0) {
        return(
            <div className='px-4 py-5'>
                <h1 className='text-2xl text-blue-600 font-medium'>No Banners Uploaded</h1>
            </div>
        )
    }

    return (
        <div className='py-5 pt-6'>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper">
                {
                    bannerPhotos?.map(photo => <SwiperSlide key={photo}>
                        <div className='pb-12'>
                            <Image src={photo} alt='banner' width={400} height={100} style={{ width: '80%' }} className='mx-auto h-[30rem] rounded shadow-md shadow-blue-600 mb-5 object-cover' />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default SchoolSwipper