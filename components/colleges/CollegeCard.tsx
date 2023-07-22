import { fetchCollegeDetailsWithCourses } from '@/app/colleges'
import { checkLength, convertWord } from '@/utils/functions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'

type CollegeCardProps = {
    data: fetchCollegeDetailsWithCourses,
    toggleModal: (collegeName: string) => void
}

const CollegeCard = ({ data, toggleModal }: CollegeCardProps) => {
    const { id, collegePhoto, collegeName, city, state, ownership, description, courses } = data;
    const d: string = (JSON.parse(description));
    const desc = checkLength(d, 150);
    return (
        <section key={id} className='p-0 bg-slate-100 mx-2 my-7 border relative rounded-md hover:shadow-md  hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-out'>
            <div className='flex w-full py-3 px-2 items-center flex-col sm:flex-row '>
                <figure className='md:w-[40%] w-full h-full overflow-hidden flex bg-black'>
                    <Image src={collegePhoto.downloadUrl} width={100} height={100} alt='college photo' className="object-cover w-full h-full " loading="eager" />
                </figure>
                {/* Details */}
                <div className='md:w-[80%] pt-4 pl-2'>
                    {/* CollegeDetails */}
                    <div className='flex flex-col gap-2 border-b-2 px-3 pb-3'>
                        <Link href={`/colleges/${id}`}>
                            <h2 className="font-bold text-blue-950 text-xl">{collegeName.toUpperCase()}</h2>
                        </Link>
                        <div className='flex items-center gap-2'>
                            <span className="bg-blue-600 text-white rounded-full p-2">
                                <FaLocationDot size={'1.2rem'} color="#fff" />
                            </span>
                            <span className="font-medium">
                                {convertWord(city.toLowerCase())}({convertWord(state.toLowerCase())})
                            </span>
                        </div>
                    </div>
                    {/* infoExtra */}
                    <div className='px-3'>
                        <div className='flex items-center gap-2'>
                            <span className="bg-blue-600 text-white rounded-full p-2">
                                <BsFillPersonFill size={'1.2rem'} />
                            </span>
                            <span className='font-medium '>
                                {ownership.toUpperCase()}
                            </span>
                        </div>
                        <div className='justify-between py-3 hidden md:flex'>
                            <span dangerouslySetInnerHTML={{ __html: desc }}></span>
                            <span className=" font-medium text-xl">{courses.length} + Courses</span>
                        </div>
                    </div>
                </div>
                {/* listaction */}
                <div className='flex md:flex-col justify-center px-4 md:w-[30%] mt-3 md:mt-0 gap-3 '>

                    <button onClick={() => toggleModal(collegeName)} className='bg-blue-600 rounded text-white py-2 px-4 text-center shadow-md shadow-blue-400'>Apply Now</button>

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

export default CollegeCard