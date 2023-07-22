import { convertWord } from '@/utils/functions';
import React from 'react'


type CourseType = {
  courses: {
    id: string;
    courseName: string;
    courseDetails: string;
    stream: string;
    degree: string;
    specialization: string;
    courseType: string;
    studyMode: string;
  }[] | undefined,
  name: string | undefined
}

const Courses = ({ courses, name }: CourseType) => {
  return (
    <div className='bg-gray-300'>
      <div className='px-4 py-3'>
        <h2 className='md:text-3xl text-2xl'>{courses?.length} Courses are offered by {convertWord(name)}</h2>
        {/* Container */}
        <div className='mt-3 md:p-2 space-y-6'>
          {
            courses?.map(list =>
              <div key={list.id} className='bg-white shadow-md rounded p-4 border'>
                <h1 className='text-2xl'>{convertWord(list.courseName)}({convertWord(list.specialization)})</h1>
                <div className='indent-4 my-2' dangerouslySetInnerHTML={{ __html: JSON.parse(list.courseDetails) }}  ></div>
                <div className='grid md:grid-cols-3 w-3/4 mx-auto mt-4 gap-4'>
                  <div className='flex gap-2 items-center'>
                    <h4 className='text-xl'>Study Mode</h4>
                    <span className='font-bold'>{convertWord(list.studyMode)} </span>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <h4 className='text-xl'>Stream</h4>
                    <span className='font-bold'>{convertWord(list.stream)} </span>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <h4 className='text-xl'>Degree</h4>
                    <span className='font-bold'>{(list.degree.toUpperCase())} </span>
                  </div>
                  <div className='flex gap-2 items-center col-span-2'>
                    <h4 className='text-xl'>Specialization</h4>
                    <span className='font-bold'>{convertWord(list.specialization)} </span>
                  </div>
                </div>
              </div>)
          }
          {/* Item */}

        </div>
      </div>
    </div>
  )
}

export default Courses