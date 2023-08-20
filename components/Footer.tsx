import Image from 'next/image'
import React from 'react'
import footerlogo from '@/public/assets/footerlogo.svg'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import { TbBrandFacebook } from 'react-icons/tb'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import Link from 'next/link'
import { Hind } from 'next/font/google'

const hind = Hind({ subsets: ['latin'], weight: ["400"] })
const Footer = () => {
    return (
        <div className='bg-[#061E43] text-white'>
            <div className='w-[93%] md:w-[90%] mx-auto pt-7'>
                {/* Top Footer */}
                <div className='grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-4 py-2'>
                    {/* Top COllege */}
                    <div>
                        <h1 className='text-2xl md:text-3xl font-bold'>Top Colleges</h1>
                        <ul className='pt-3 space-y-4 text-base md:text-xl font-medium pl-2'>
                            <li className='text-white'>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        degree: 'mba'
                                    }
                                }} 
                                className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>
                                    M.B.A
                                </Link>
                            </li>
                            <li className='text-white/80 '>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        degree: 'btech'
                                    }
                                }} className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>B.Tech</Link></li>
                            <li className='text-white/80 '>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        degree: 'mca'
                                    }
                                }} className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>MCA</Link>
                            </li>
                            <li className='text-white/80 '>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        degree: 'bca'
                                    }
                                }} className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>BCA</Link>
                            </li>
                            <li className='text-white/80 '>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        degree: 'mtech'
                                    }
                                }} className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>M.Tech</Link>
                            </li>
                            <li className='text-white/80 '>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        degree: 'ma'
                                    }
                                }} className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>MA</Link>
                            </li>
                            <li className='text-white/80 '>
                                <Link href={{
                                    pathname: '/colleges', query: {
                                        degree: 'ba'
                                    }
                                }} className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>BA</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Top Exam */}
                    <div>
                        <h1 className='text-2xl md:text-3xl font-bold'>Top Exam</h1>
                        <ul className='pt-3 space-y-4 text-base md:text-xl font-medium pl-2'>
                            <li className='text-white/80'>
                                <Link href='/exam/jee' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>JEE</Link>
                            </li>
                            <li className='text-white/80'>
                                <Link href='/exam/neet' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>NEET</Link>
                            </li>
                            <li className='text-white/80'>
                                <Link href='/exam/cat' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>CAT</Link>
                            </li>
                            <li className='text-white/80'>
                                <Link href='/exam/gate' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>GATE</Link>
                            </li>
                            <li className='text-white/80'>
                                <Link href='/exam/clat' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>CLAT</Link>
                            </li>
                            <li className='text-white/80'>
                                <Link href='/exam/mat' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>MAT</Link>
                            </li>
                            <li className='text-white/80'>
                                <Link href='/exam/xat' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>XAT</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Board Exams */}
                    <div className='col-span-2'>
                        <h1 className='text-2xl md:text-3xl font-bold'>Board Exams</h1>
                        <ul className='grid grid-cols-2 grid-rows-5 pt-3 space-y-4 text-base md:text-xl pl-2'>
                            <li className='text-white/80'>
                                <Link href='/cbse/class12' 
                                className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>CBSE Class 12</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/cbse/class11' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>CBSE Class 11</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>CHSE Class 12</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>CHSE Class 11</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}> CBSE Class 12 Syllabus</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>CBSE Class 11 Syllabus</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>CHSE Class 12 Syllabus</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}>CHSE Class 11 Syllabus</Link>
                            </li>
                            <li className='text-white/80'>

                                <Link href='/' className={`relative 
                                hover:text-white 
                                before:absolute before:top-[50%] before:left-0 
                                before:w-0 before:h-[3px]  before:-translate-y-[50%]  before:bg-blue-700 before:rounded-md  
                                hover:before:w-3
                                    hover:pl-3 before:duration-300 before:ease-out before:transition-all transition-all duration-300 ease-out ${hind.className}`}> XAT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Middle Footer */}
                <hr />
                <div className='py-4'>
                    <h2 className='text-2xl font-semibold'>Other Links</h2>
                    <div className='flex md:flex-row flex-col'>
                        <ul className={`flex md:flex-row flex-col gap-3 md:w-1/2 mt-2 md:mt-0 w-full md:items-center ${hind.className}`}>
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
                <div className='flex py-6 md:flex-row flex-col md:justify-between items-center'>
                    {/* logo */}
                    <Image src={footerlogo} width={200} height={200}  alt="logo" />
                    <span className='text-sm py-3 md:py-0'>&copy;2023 Institute Insider Pvt. Ltd. All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer