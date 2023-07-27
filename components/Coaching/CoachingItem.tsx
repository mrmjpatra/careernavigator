import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { CgList } from 'react-icons/cg'
import { IoCall } from 'react-icons/io5'
import { CoachingFetchDataType } from '@/app/coachings'
import { convertWord, getFormattedString } from '@/utils/functions'
import { useModalContext } from '../ContactModalContext'

type CoachingItemProps = {
    data: CoachingFetchDataType
}

const CoachingItem = ({ data }: CoachingItemProps) => {
    const { coachingName, state, city, coachingPhoto, providing, id } = data;
    const { handleChange, setName } = useModalContext()
    return (
        <section className='p-0 bg-slate-100 mx-2 my-7 border relative rounded-md hover:shadow-md  hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-out'>
            <div className='flex w-full py-3 px-2 items-center flex-col sm:flex-row '>
                <Image src={coachingPhoto.downloadUrl} alt='School Photo' width={100} height={100} className='rounded-md shadow-md shadow-white w-full pb-3 md:pb-0 h-full md:w-1/2 object-cover' loading="eager" />
                {/* Details */}
                <div className='md:w-[80%] pt-4 pl-2 w-full flex items-center md:block'>
                    {/* CollegeDetails */}
                    <div>
                        <Link href={`/coachings/${getFormattedString(coachingName, '-')}`} >
                            <h2 className="font-bold text-blue-950 text-xl pb-4">{coachingName.toUpperCase()}</h2>
                        </Link>
                        <div className='flex flex-col gap-2 md:border-b-2 px-3 pb-3'>
                            <div className='flex items-center gap-2'>
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
                                    <CgList size={'1.2rem'} />
                                </span>
                                <ul className="flex gap-1 font-medium text-orange-900">
                                    {
                                        providing.map(p => <li key={p}>{convertWord(p)},</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* listaction */}
                <div className='flex md:flex-col justify-center px-4 md:w-[30%] mt-3 md:mt-0 gap-3 '>
                    <button
                        onClick={() => {
                            handleChange();
                            setName(coachingName)
                        }}
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

export default CoachingItem