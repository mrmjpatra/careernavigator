import React from 'react'
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot, FaPeopleGroup } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { LiaShareAltSolid } from 'react-icons/lia'
import { PiStudentFill } from 'react-icons/pi';
import { BsBrowserChrome } from 'react-icons/bs';
import { IoCallSharp } from 'react-icons/io5';
const convertWord = (name: string | undefined) => {
  if (name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}

type detailsType = {
  details: {
    id: string;
    collegePhoto: string;
    campusSize: string;
    facultyStrength: string;
    studentStrength: string;
    address: {
      fullAddrs: string;
      phoneNumber: string;
      email: string;
      website: string | null;
    };
  } | null | undefined,
  description: string | undefined
}

const Overview = ({ details, description }: detailsType) => {
  return (
    <div className='px-4 py-3'>
      <h2 className='text-blue-500 text-xl md:text-3xl'>Description</h2>
      <hr className='bg-blue-500 w-1/2 h-1 border-t-0 my-3 rounded' />
      <p className='text-xl indent-8'>{convertWord(description?.toLowerCase())}</p>
      <div className='space-y-4 mt-5 md:grid  md:grid-cols-2 md:w-3/4 md:mx-auto mb-4'>
        <div className='flex items-center gap-2'>
          <h3 className='flex gap-2 items-center text-2xl' style={{fontFamily:'Hind'}}>
            <span className='bg-blue-600 text-white rounded-full p-2'>
              <FaPeopleGroup /></span>
            Faculty Strength</h3>
          <span>{details?.facultyStrength}</span>
        </div>
        <div className='flex items-center gap-2'>
          <h3 className='flex gap-2 items-center text-2xl' style={{fontFamily:'Hind'}}>
            <span className='bg-blue-600 text-white rounded-full p-2'>
              <PiStudentFill />
            </span>  Student Strength</h3>
          <span>{details?.studentStrength}</span>
        </div>
        <div className='flex items-center gap-2'>

          <h3 className='flex gap-2 items-center text-2xl' style={{fontFamily:'Hind'}}>

            <span className='bg-blue-600 text-white rounded-full p-2'>
              <LiaShareAltSolid />
            </span>
            Campus Size</h3>
          <span>{details?.campusSize}</span>
        </div>
        <div className='flex items-center gap-2 col-span-2'>
          <h3 className='flex gap-2 items-center text-2xl' style={{fontFamily:'Hind'}}>
            <span className='bg-blue-600 text-white rounded-full p-2'>
              <FaLocationDot />
            </span>
            Address</h3>
          <span>{details?.address.fullAddrs}</span>
        </div>
        <div className='flex items-center gap-2 col-span-2'>
          <h3 className='flex gap-2 items-center text-2xl' style={{fontFamily:'Hind'}}>
            <span className='bg-blue-600 text-white rounded-full p-2'>
              <IoCallSharp />
            </span>
            Phone Number</h3>
          <a href={`tel:${details?.address.phoneNumber}`}>{details?.address.phoneNumber}</a>
        </div>
        <div className='flex items-center gap-2'>

          <h3 className='flex gap-2 items-center text-2xl' style={{fontFamily:'Hind'}}>

            <span className='bg-blue-600 text-white rounded-full p-2'>
              <MdEmail />
            </span>
            Email</h3>
          <a href={`mailto:${details?.address.email}`}>{details?.address.email} </a>
        </div>
        {
          details?.address.website && <div className='flex items-center gap-2'>

            <h3 className='flex gap-2 items-center text-2xl' style={{fontFamily:'Hind'}}>

              <span className='bg-blue-600 text-white rounded-full p-2'>
                <BsBrowserChrome />
              </span>
              Website</h3>
            <a href={details.address.website}>{details.address.website}</a>
          </div>
        }
      </div>
    </div>
  )
}

export default Overview