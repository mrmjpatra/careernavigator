import React from 'react'
import Collegephoto from '@/public/assets/joshDefaltBanner1.jpg'
import Link from 'next/link'
import { IoCall } from 'react-icons/io5'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import { BsPersonFill } from 'react-icons/bs'
import { MdSchool } from 'react-icons/md'
import { SchoolFormDetailsType } from '@/app/schools'
import { convertWord, getFormattedString } from '@/utils/functions'
import { useModalContext } from '../ContactModalContext'

type SchoolItemProps = {
    data: SchoolFormDetailsType,
}

const SchoolItem = ({ data }: SchoolItemProps) => {
    const { id, schoolName, state, city, board, ownership, schoolPhoto } = data;
    const {setName,handleChange,showContactModal}=useModalContext();
    return (
        <section className='p-0 bg-slate-100 mx-2 my-7 border relative rounded-md hover:shadow-md  hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-out'>
            <div className='flex w-full py-3 px-2 items-center flex-col sm:flex-row '>
                <Image src={schoolPhoto.downloadUrl ? schoolPhoto.downloadUrl : Collegephoto} width={100} height={100} alt='School Photo' className='rounded-md shadow-md shadow-white w-full pb-3 md:pb-0 h-full md:w-1/2 object-cover' loading='eager' />
                {/* Details */}
                <div className='md:w-[80%] pl-2 w-full flex items-center md:block'>
                    {/* CollegeDetails */}
                    <div>
                        <Link href={`/schools/${getFormattedString(schoolName,'-')}`} >
                            <h2 className="font-bold text-blue-950 text-xl pb-4">{schoolName.toUpperCase()}</h2>
                        </Link>
                        <div className='flex flex-col gap-2 md:border-b-2 px-3 pb-3'>
                            <div className='flex items-center gap-3'>
                                <span className='bg-blue-600 p-2 text-white rounded-full'>
                                    <FaLocationDot size={'1.2rem'} />
                                </span>
                                <span className="font-medium text-sky-900 ">{convertWord(state)}({convertWord(city)})</span>
                            </div>
                        </div>
                        {/* infoExtra */}
                        <div className='px-3 mt-2 flex gap-3 items-center'>
                            <div className='flex items-center gap-2'>
                                <span className='bg-blue-600 p-2 text-white rounded-full'>
                                    <BsPersonFill size={'1.2rem'} />
                                </span>
                                <span className='font-medium text-orange-900'>
                                    {ownership.toUpperCase()}
                                </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-blue-600 p-2 text-white rounded-full'>
                                    <MdSchool size={'1.2rem'} />
                                </span>
                                <span className='font-medium text-indigo-900'>{board.toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* listaction */}
                <div className='flex md:flex-col justify-center px-4 md:w-[30%] mt-3 md:mt-0 gap-3 '>
                    <button
                        onClick={() => {setName(schoolName),handleChange() }}
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