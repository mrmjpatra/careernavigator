import React from 'react'
import Collegephoto from '@/public/assets/joshDefaltBanner1.jpg'
import Link from 'next/link'
import { IoCall } from 'react-icons/io5'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import { BsPersonFill } from 'react-icons/bs'
import { MdSchool } from 'react-icons/md'
import { SchoolFormDetailsType } from '@/app/schools'
import { convertWord } from '@/utils/functions'

type SchoolItemProps = {
    data: SchoolFormDetailsType,
    toggleModal: (collegeName: string) => void
}

const SchoolItem = ({ data, toggleModal }: SchoolItemProps) => {
    const { id, schoolName, state, city, board, ownership, schoolPhoto } = data;
    return (
        <section className='p-0 bg-slate-100 mx-2 my-7 border relative rounded-md hover:shadow-md  hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-out'>
            <div className='flex w-full py-3 px-2 items-center flex-col sm:flex-row '>
                <Image src={schoolPhoto.downloadUrl ? schoolPhoto.downloadUrl : Collegephoto} width={400} height={100} alt='School Photo' style={{ width: '200px', height: '150px', objectFit: 'cover' }} className='rounded-md shadow-md shadow-white' />
                {/* Details */}
                <div className='md:w-[80%] pt-4 pl-2 w-full flex items-center md:block'>
                    {/* CollegeDetails */}
                    <div>
                        <Link href={`/schools/${id}`} >
                            <h2 className='md:text-2xl text-blue-500 my-3 text-xl font-medium'>{schoolName.toUpperCase()}</h2>
                        </Link>
                        <div className='flex flex-col gap-2 md:border-b-2 px-3 pb-3'>
                            <div className='flex items-center gap-3'>
                                <span className='bg-blue-600 p-2 text-white rounded-full'>
                                    <FaLocationDot size={'1.2rem'} />
                                </span>
                                <span className="font-medium text-sky-600">{convertWord(state)}({convertWord(city)})</span>
                            </div>
                        </div>
                        {/* infoExtra */}
                        <div className='px-3 mt-2 flex gap-3 items-center'>
                            <div className='flex items-center gap-2'>
                                <span className='bg-blue-600 p-2 text-white rounded-full'>
                                    <BsPersonFill size={'1.2rem'} />
                                </span>
                                <span className='font-medium text-orange-600'>
                                    {ownership.toUpperCase()}
                                </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-blue-600 p-2 text-white rounded-full'>
                                    <MdSchool size={'1.2rem'} />
                                </span>
                                <span className='font-medium text-indigo-500' >{board.toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* listaction */}
                <div className='flex md:flex-col justify-center px-4 md:w-[30%] mt-3 md:mt-0 gap-3 '>
                    <button
                        onClick={() => toggleModal(schoolName)}
                        className='bg-blue-600 rounded text-white py-2 px-4 text-center shadow-md shadow-blue-400'>Apply Now</button>
                    <Link href={'/contact'} className='border shadow shadow-black/50 rounded py-2 px-4 text-center flex items-center gap-2'>
                        <IoCall />
                        <span>
                            Contact
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SchoolItem