import React, { useEffect } from 'react'
import { FaLocationDot, FaPeopleGroup } from 'react-icons/fa6';
import { PiStudentFill } from 'react-icons/pi';
import { LiaShareAltSolid } from 'react-icons/lia';
import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { BsBrowserChrome } from 'react-icons/bs';
import SchoolSwipper from './BannerSwipper';
import { SchoolFormDetailsType } from '@/app/schools';
import { convertWord } from '@/utils/functions';
import { Hind, Inter } from 'next/font/google';

const inter=Inter({subsets:['latin'],weight:['400','600']})
const hind=Hind({subsets:['latin'],weight:['400','600']})


const SchoolOverView = ({ description, facultyStrength, studentStrength, address, board, bannerPhotos }: SchoolFormDetailsType) => {
    

    return (
        <div className='pl-4 my-4'>
            <h2 className='text-2xl md:text-3xl text-blue-600 '>Overview</h2>
            <hr className='w-1/2 bg-blue-600 h-1' />
            <SchoolSwipper bannerPhotos={bannerPhotos} />
            {/* Swipper */}

            <h2 className='text-2xl md:text-3xl text-blue-600 '>Description</h2>
            <hr className='w-1/2 bg-blue-600 h-1' />
            <div id='preview' className={`my-4 pl-4 ${inter.className}`} dangerouslySetInnerHTML={{__html:JSON.parse(description)}} ></div>
            <div className='space-y-4 mt-5 md:grid  md:grid-cols-2 md:w-3/4 md:mx-auto mb-4'>
                <div className='flex items-center gap-2'>
                    <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`} >
                        <span className='bg-blue-600 text-white rounded-full p-2'>
                            <FaPeopleGroup /></span>
                        Faculty Strength</h3>
                    <span>{facultyStrength}</span>
                </div>
                <div className='flex items-center gap-2'>
                   <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`} >
                        <span className='bg-blue-600 text-white rounded-full p-2'>
                            <PiStudentFill />
                        </span>  Student Strength</h3>
                    <span>{studentStrength}</span>
                </div>
                <div className='flex items-center gap-2'>

                   <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`} >

                        <span className='bg-blue-600 text-white rounded-full p-2'>
                            <LiaShareAltSolid />
                        </span>
                        Board</h3>
                    <span>{board.toUpperCase()}</span>
                </div>
                <div className='flex items-center gap-2 col-span-2'>
                   <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`} >
                        <span className='bg-blue-600 text-white rounded-full p-2'>
                            <FaLocationDot />
                        </span>
                        Address</h3>
                    <span>{convertWord(address.fullAddrs)}</span>
                </div>
                <div className='flex items-center gap-2 col-span-2'>
                   <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`} >
                        <span className='bg-blue-600 text-white rounded-full p-2'>
                            <IoCallSharp />
                        </span>
                        Phone Number</h3>
                    <a href={`tel:${address.phoneNumber}`}>{address.phoneNumber}</a>
                </div>
                <div className='flex items-center gap-2'>

                   <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`} >

                        <span className='bg-blue-600 text-white rounded-full p-2'>
                            <MdEmail />
                        </span>
                        Email</h3>
                    <a href={`mailto:${address.email}`}>{address.email} </a>
                </div>
                {
                    address.website && <div className='flex items-center gap-2'>

                       <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`} >

                            <span className='bg-blue-600 text-white rounded-full p-2'>
                                <BsBrowserChrome />
                            </span>
                            Website</h3>
                        <a href={address.website}>{address.website}</a>
                    </div>
                }
            </div>
        </div>
    )
}

export default SchoolOverView