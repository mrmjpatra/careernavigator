import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Pagination, Autoplay, EffectFade } from "swiper";
import Image from 'next/image';
import { ImageRef } from '@/utils/types';
import { convertWord } from '@/utils/functions';

export type ReviewsType = {
  reviews: {
    id: string,
    name: string
    content: string
    createdAt: string
    updatedAt: string
    photo: ImageRef
  }[] | undefined
}


const Review = ({ reviews }: ReviewsType) => {
  return (
    <div>
      <div className=' px-6'>
        <h1 className='text-3xl font-bold text-blue-600 my-2'>Reviews</h1>
        <hr className='w-1/2 bg-blue-600 rounded h-1 mb-2' />
      </div>
      <div className='bg-gray-400 px-2 py-4'>
        {
          (reviews && reviews?.length > 0) ?
            <Swiper loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              spaceBetween={20}
              modules={[Pagination, Autoplay]} className="py-6">
              {
                reviews.map(list =>
                  <SwiperSlide key={list.id}>
                    <div className='flex flex-col justify-center items-center bg-white rounded-md shadow-md py-4'>
                      <Image src={list.photo.downloadUrl} alt='personreview' width={70} height={70}
                        className='rounded-full shadow-lg shadow-blue-500 w-32 h-32' />
                      <h2 className='text-2xl font-bold text-blue-600 mt-4'>{convertWord(list.name)}</h2>
                      <p className='font-medium text-gray-800 py-3'>{convertWord(list.content)}.</p>
                    </div>
                  </SwiperSlide>)
              }
            </Swiper> : (<div>
              <h2 className='text-3xl text-blue-600 font-bold'>No Reviews</h2>
            </div>)
        }



      </div>
    </div>
  )
}

export default Review