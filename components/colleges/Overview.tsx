import { FaPhone } from 'react-icons/fa';
import { FaLocationDot, FaPeopleGroup } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { LiaShareAltSolid } from 'react-icons/lia'
import { PiStudentFill } from 'react-icons/pi';
import { BsBrowserChrome } from 'react-icons/bs';
import { IoCallSharp } from 'react-icons/io5';
import { ImageRef } from '@/utils/types';
import BannerSwipper from '../School/BannerSwipper';
import { Hind } from 'next/font/google';
const hind=Hind({subsets:['latin'],weight:['400','600']})

type OverviewProps = {
  id: string,
  collegeName: string,
  description: string,
  state: string,
  city: string,
  ownership: string,
  collegePhoto: ImageRef;
  bannerPhotos: ImageRef[]
  campusSize: string;
  facultyStrength: string;
  studentStrength: string;
  address: {
    fullAddrs: string;
    phoneNumber: string;
    email: string;
    website?: string;
  };

}


const Overview = ({ description, bannerPhotos, campusSize, facultyStrength, studentStrength, address }: OverviewProps) => {
  return (
    <div className='px-4 py-3'>
      <h2 className='text-blue-500 text-xl md:text-3xl'>Description</h2>
      <hr className='bg-blue-500 w-1/2 h-1 border-t-0 my-3 rounded' />
      <p className='text-xl indent-8' dangerouslySetInnerHTML={{ __html: (description) }} ></p>
      <BannerSwipper bannerPhotos={bannerPhotos} />
      <div className='space-y-4 mt-5 md:grid  md:grid-cols-2 md:w-3/4 md:mx-auto mb-4'>
        <div className='flex items-center gap-2'>
          <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`}>
            <span className='bg-blue-600 text-white rounded-full p-2'>
              <FaPeopleGroup /></span>
            Faculty Strength</h3>
          <span>{facultyStrength}</span>
        </div>
        <div className='flex items-center gap-2'>
        <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`}>
            <span className='bg-blue-600 text-white rounded-full p-2'>
              <PiStudentFill />
            </span>  Student Strength</h3>
          <span>{studentStrength}</span>
        </div>
        <div className='flex items-center gap-2'>
           <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`}>
            <span className='bg-blue-600 text-white rounded-full p-2'>
              <LiaShareAltSolid />
            </span>
            Campus Size</h3>
          <span>{campusSize}</span>
        </div>
        <div className='flex items-center gap-2 col-span-2'>
           <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`}>
            <span className='bg-blue-600 text-white rounded-full p-2'>
              <FaLocationDot />
            </span>
            Address</h3>
          <span>{address.fullAddrs}</span>
        </div>
        <div className='flex items-center gap-2 col-span-2'>
           <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`}>
            <span className='bg-blue-600 text-white rounded-full p-2'>
              <IoCallSharp />
            </span>
            Phone Number</h3>
          <a href={`tel:${address.phoneNumber}`}>{address.phoneNumber}</a>
        </div>
        <div className='flex items-center gap-2'>

           <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`}>

            <span className='bg-blue-600 text-white rounded-full p-2'>
              <MdEmail />
            </span>
            Email</h3>
          <a href={`mailto:${address.email}`}>{address.email} </a>
        </div>
        {
          address.website && <div className='flex items-center gap-2'>

             <h3 className={`flex gap-2 items-center text-2xl ${hind.className}`}>

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

export default Overview