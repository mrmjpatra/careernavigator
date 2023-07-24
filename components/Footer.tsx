import Image from 'next/image'
import React from 'react'
import carrernavigator from '@/public/assets/footerlogo.png'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import { TbBrandFacebook } from 'react-icons/tb'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import Link from 'next/link'

const Footer = () => {

    return (
        <div className='bg-[#061E43] text-white'>
            <div className='w-[90%] mx-auto pt-7'>
                {/* Top Footer */}
                <div className='grid  grid-cols-2 md:grid-cols-4 py-2'>
                    {/* Top COllege */}
                    <div>
                        <h1 className='text-2xl md:text-3xl font-bold'>Top Colleges</h1>
                        <ul className='pt-3 space-y-4 text-xl font-medium pl-2'>
                            <li className='text-white'>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        stream: 'mba'
                                    }
                                }} className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>
                                    M.B.A
                                </Link>
                            </li>
                            <li className='text-white/80 '>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        stream: 'mba'
                                    }
                                }} className='relative hover:text-white
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>B.Tech</Link></li>
                            <li className='text-white/80 '>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        stream: 'mba'
                                    }
                                }} className='relative hover:text-white
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>MCA</Link>
                            </li>
                            <li className='text-white/80 '>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        stream: 'bca'
                                    }
                                }} className='relative hover:text-white
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>BCA</Link>
                            </li>
                            <li className='text-white/80 '>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        stream: 'mtech'
                                    }
                                }} className='relative 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>M.Tech</Link>
                            </li>
                            <li className='text-white/80 '>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        stream: 'ma'
                                    }
                                }} className='relative hover:text-white
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>MA</Link>
                            </li>
                            <li className='text-white/80 '>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        stream: 'ba'
                                    }
                                }} className='relative hover:text-white
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>BA</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Top Exam */}
                    <div>
                        <h1 className='text-2xl md:text-3xl font-bold'>Top Exam</h1>
                        <ul className='pt-3 space-y-4 text-xl font-medium pl-2'>
                            <li className='text-white/80'>
                                <Link href='/exam/jee' className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>JEE</Link>
                            </li>
                            <li className='text-white/80'>
                                <Link href='/exam/neet' className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>NEET</Link>
                            </li>
                            <li className='text-white/80'>
                                <Link href='/exam/cat' className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>CAT</Link>
                            </li>
                            <li className='text-white/80'>
                                <Link href='/exam/gate' className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>GATE</Link>
                            </li>
                            <li className='text-white/80'>
                                <Link href='/exam/clat' className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>CLAT</Link>
                            </li>
                            <li className='text-white/80'>
                                <Link href='/exam/mat' className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>MAT</Link>
                            </li>
                            <li className='text-white/80'>
                                <Link href='/exam/xat' className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>XAT</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Board Exams */}
                    <div className='col-span-2'>
                        <h1 className='text-2xl md:text-3xl font-bold'>Board Exams</h1>
                        <ul className='grid grid-cols-2 grid-rows-5 pt-3 space-y-4 text-xl font-medium pl-2'>
                            <li className='text-white/80'>
                                <Link href='/' className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>CBSE Class 12</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>CBSE Class 11</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>CHSE Class 12</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>CHSE Class 11</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className='relative 
                                hover:text-white font-hind
                                before:absolute  before:top-[21%]
                                md:before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'> CBSE Class 12 Syllabus</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className='relative 
                                hover:text-white font-hind
                                before:absolute  before:top-[21%]
                                md:before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>CBSE Class 11 Syllabus</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className='relative 
                                hover:text-white font-hind
                                before:absolute 
                                before:top-[21%]
                                md:before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>CHSE Class 12 Syllabus</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className='relative 
                                hover:text-white font-hind
                                before:absolute  before:top-[21%]
                                md:before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'>CHSE Class 11 Syllabus</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className='relative 
                                hover:text-white font-hind
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out'> XAT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Middle Footer */}
                <hr />
                <div className='py-4'>
                    <h2 className='text-2xl font-semibold'>Other Links</h2>
                    <div className='flex md:flex-row flex-col'>
                        <ul className='flex md:flex-row flex-col gap-3 md:w-1/2 w-full md:items-center'>
                            <li>
                                <Link href={'/about'}>About</Link></li>
                            <li>
                                <Link href={'/contact'}>Contact Us</Link></li>
                            <li>
                                <Link href={'/articles'}>Articles</Link></li>
                            <li>
                                <Link href={'/terms-conditions'}>Terms & Conditions</Link></li>
                        </ul>
                        {/* Social Media Links */}
                        <div className='flex justify-end md:w-1/2'>
                            <div className='flex gap-3'>
                                <Link aria-label='Visit our facebook page' href='www.facebook.com/mrmj' className='bg-[#212730] shadow-md shadow-slate-500 duration-200 transition-all ease-in hover:bg-blue-600 text-white p-2 rounded-full' ><TbBrandFacebook className='sm:text-xl' /></Link>

                                <Link aria-label='Visit our Instagram page'href='www.instagram.com/mrmjpatra' className='bg-[#212730] shadow-md shadow-slate-500 duration-200 transition-all ease-in hover:bg-blue-600 text-white p-2 rounded-full' ><BsInstagram className='sm:text-xl' /></Link>

                                <Link aria-label='Visit our Youtube page' href='www.youtube.com/mrmjpatra' className='bg-[#212730] shadow-md shadow-slate-500 duration-200 transition-all ease-in hover:bg-blue-600 text-white p-2 rounded-full' ><AiOutlineYoutube className='sm:text-xl' /></Link>

                                <Link aria-label='Visit our Linkedin page' href='www.linkedin.com/mrmjpatra' className='bg-[#212730] shadow-md shadow-slate-500 duration-200 transition-all ease-in hover:bg-blue-600 text-white p-2 rounded-full' ><BiLogoLinkedin className='sm:text-xl' /></Link>

                                <Link aria-label='Visit our Twitter  page' href='www.twitter.com/mrmjpatra' className='bg-[#212730] shadow-md shadow-slate-500 duration-200 transition-all ease-in hover:bg-blue-600 text-white p-2 rounded-full' ><FiTwitter className='sm:text-xl' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom Footer */}
                <hr />
                <div className='flex py-2 md:flex-row flex-col md:justify-between items-center'>
                    {/* logo */}
                    <Image src={carrernavigator} width={100} alt="logo" />
                    <span>&copy;2023 College Navigator Pvt. Ltd. All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer