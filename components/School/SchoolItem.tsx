import { SchoolFormDetailsType } from '@/app/schools/page'
import React, { useEffect } from 'react'
import Collegephoto from '@/public/assets/joshDefaltBanner1.jpg'
import Link from 'next/link'
import { GrLocation } from 'react-icons/gr'
import { MdOutlinePersonOutline, MdSchool } from 'react-icons/md'
import { IoCall } from 'react-icons/io5'
import Image from 'next/image'
import { convertWord } from '../CollegeDetails/CollegeDetails'
import { FaLocationDot } from 'react-icons/fa6'
import { BsPersonFill } from 'react-icons/bs'

const SchoolItem = ({ id, schoolName, state, city, board, ownership, schoolPhoto }: SchoolFormDetailsType) => {
    return (
        <section className='p-0 my-7 border relative hover:shadow-md  hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-out'>
            <div className='flex w-full py-3 px-2 items-center flex-col sm:flex-row '>
                <Image src={schoolPhoto ? schoolPhoto : Collegephoto} width={400} height={100} alt='School Photo' style={{ width: '200px', height: '150px', objectFit: 'cover' }} className='rounded-md shadow-md shadow-white' />
                {/* Details */}
                <div className='md:w-[80%] pt-4 pl-2 w-full flex items-center md:block'>
                    {/* CollegeDetails */}
                    <div>
                        <Link href={`/school/${id}`} >
                            <h2 className='md:text-2xl my-3 text-xl font-medium'>{schoolName.toUpperCase()}</h2>
                        </Link>
                        <div className='flex flex-col gap-2 md:border-b-2 px-3 pb-3'>
                            <div className='flex items-center gap-3'>
                                <span className='bg-blue-600 p-2 text-white rounded-full'>
                                    <FaLocationDot size={'1.2rem'} />
                                </span>
                                <span>{convertWord(state)}({convertWord(city)})</span>
                            </div>
                        </div>
                        {/* infoExtra */}
                        <div className='px-3 mt-2 flex gap-3 items-center'>
                            <div className='flex items-center gap-2'>
                                <span className='bg-blue-600 p-2 text-white rounded-full'>
                                    <BsPersonFill size={'1.2rem'} />
                                </span>
                                <span className=''>
                                    {ownership.toUpperCase()}
                                </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-blue-600 p-2 text-white rounded-full'>
                                    <MdSchool size={'1.2rem'} />
                                </span>
                                <span>{board.toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* listaction */}
                <div className='flex md:flex-col justify-center px-4 md:w-[30%] mt-3 md:mt-0 gap-3 '>
                    <button className='bg-blue-600 rounded text-white py-2 px-4 text-center shadow-md shadow-blue-400'>Apply Now</button>
                    <button className='border shadow shadow-black/50 rounded py-2 px-4 text-center flex items-center gap-2'>
                        <IoCall />
                        <span>
                            Contact
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SchoolItem