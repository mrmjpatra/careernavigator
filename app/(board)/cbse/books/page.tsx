import { GenerateTable } from '@/components/CBSE/Syllabus/Class12'
import { booksTable } from '@/utils/Board/CBSE/Syllabus'
import { getFormattedString } from '@/utils/functions';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata():Promise<Metadata> {
  const description = 'The National Council of Educational Research and Training (NCERT) is an autonomous body that aims to provide high-quality education to school children in India. Its primary work is to prepare and publish model textbooks, supplementary materials, educational kits, and more. NCERT textbooks serve as the foundation of the schooling system. The CBSE Board follows NCERT Books in the school curriculum for Classes 1 to 12, and other state boards have also adopted NCERT Books in their course curriculum.';
  const keywords=getFormattedString(description,' ')
  return { title: "Books", description,keywords };
}

const Book = () => {
  return (
    <div className='px-5 py-6'>
      <h1 className='text-blue-700 text-5xl font-bold'>CBSE Books</h1>
      <div className='space-y-3'>
        <p className='first-letter:text-6xl first-letter:text-red-600 pl-2 first-letter:float-left leading-8 text-xl my-2'>
          The National Council of Educational Research and Training (NCERT) is an autonomous body that aims to provide high-quality education to school children in India. Its primary work is to prepare and publish model textbooks, supplementary materials, educational kits, and more. NCERT textbooks serve as the foundation of the schooling system. The CBSE Board follows NCERT Books in the school curriculum for Classes 1 to 12, and other state boards have also adopted NCERT Books in their course curriculum.
        </p>
        <p className='text-xl first-letter:pl-10'>
          CBSE NCERT Books are regarded as the best study material for students from Classes 1 to 12. These books are meticulously designed by subject experts who conduct in-depth research and analysis of specific subjects, taking into consideration the students’ comprehension levels. Written in a simple language, NCERT textbooks cover the fundamentals of all topics. They serve as a fundamental resource for elementary, secondary, and senior secondary school education. Furthermore, the NCERT PDF Download is beneficial for students aiming to excel in various competitive exams after completing their schooling and graduation, including JEE, NEET, UPSC, and more.
        </p>
      </div>
      <div className='my-4'>
        <h2 className='text-3xl font-bold text-blue-600'> NCERT Solutions for Class 1 to 12 in PDF | Subject List</h2>
        <p className='first-letter:pl-5 my-2 text-xl'>The CBSE NCERT Solutions showcased in the given resource cover all the necessary aspects of the NCERT Syllabus. The examination authorities of competitive as well as board exams have clearly emphasised the importance of textbooks. The syllabus of these exams is mapped with the NCERT books. Therefore, the students can expect a lot of questions taken directly from these textbooks</p>
        <div className='space-y-10 my-4'>
          <div className='space-y-2'>
            <h3 className='text-red-600 font-bold text-3xl'>Class 12 NCERT Solutions</h3>
            <p className='text-xl'>If one is looking for the perfect NCERT Solutions for Class XII, to download the Class 12 subjects chapter-wise in PDF format. Here are the Subject-wise NCERT solved solutions.</p>
            <GenerateTable list={booksTable.class12} title='Class 12 NCERT Solutions' />
          </div>
          <div className='space-y-2'>
            <h3 className='text-red-600 font-bold text-3xl'>Class 11 NCERT Solutions</h3>
            <p className='text-xl'>If one is looking for the perfect NCERT Solutions for Class XI, to download the Class 12 subjects chapter-wise in PDF format. Here are the Subject-wise NCERT solved solutions.</p>
            <GenerateTable list={booksTable.class11} title='Class 11 NCERT Solutions' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book