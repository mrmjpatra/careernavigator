import ContactUsForm from '@/components/ContactUsForm'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { TiLocation } from 'react-icons/ti'

const About = () => {
  return (
    <div>
      <ContactUsForm />
      <div className='py-5 px-10'>
        <h3 className='text-3xl font-bold text-blue-500 my-4'>Address</h3>
        <div className='space-y-6'>
          <div className='flex items-center pl-4'>
            <span className='bg-blue-600 p-2 rounded-full text-white flex mr-4'>
              <TiLocation size={'2rem'} />
            </span>
            <p className='font-medium'>
              Choudwar, Cuttack, Odisha
            </p>
          </div>
          <div className='flex items-center pl-4'>
            <span className='bg-blue-600 p-3 rounded-full text-white flex mr-4'>
              <FaPhoneAlt size={'1.5rem'} />
            </span>
            <a className='font-medium' href='tel:+919090323291'>
              +91 9090323291
            </a>
          </div>
          <div className='flex items-center pl-4'>
            <span className='bg-blue-600 p-2 rounded-full text-white flex mr-4'>
              <MdEmail size={'2rem'} />
            </span>
            <a className='font-medium' href='mailto:carrernavigator@gmail.com'>
              carrernavigator@gmail.com
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About