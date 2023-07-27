import { GenerateTable } from '@/components/CBSE/Syllabus/Class12'
import { questionTable } from '@/utils/Board/CBSE/Syllabus'
import React from 'react'

export async function generateMetadata() {
  const description = 'CBSE Previous Year Question Papers from 2011 to 2022 have been compiled and made available with solutions. CBSE conducts the Class 10 and Class 12 board exams in February or March. The board exams are taken by lakhs of students yearly, and the board results reflect their fundamental knowledge and scholastic skills. To score well in the board exams, one must have proper preparations and a thorough understanding of the basic concepts. One of the best ways to prepare well for the board exams is to solve the CBSE last years question papers, CBSE question paper, previous years’ question papers and CBSE sample papers. We have compiled the CBSE previous years question papers for Classes 10 and 12 students.'
  return { title: "Exam Papers", description };
}

const ExamPaper = () => {
  return (
    <div className='px-5 py-6'>
      <h1 className='text-blue-700 text-5xl font-bold'>CBSE Previous Year Question Papers</h1>
      <p className='first-letter:text-6xl first-letter:text-red-600 pl-2 first-letter:float-left leading-8 text-xl my-2'>
        CBSE Previous Year Question Papers from 2011 to 2022 have been compiled and made available with solutions. CBSE conducts the Class 10 and Class 12 board exams in February or March. The board exams are taken by lakhs of students yearly, and the board results reflect their fundamental knowledge and scholastic skills. To score well in the board exams, one must have proper preparations and a thorough understanding of the basic concepts. One of the best ways to prepare well for the board exams is to solve the CBSE last years question papers, CBSE question paper, previous years’ question papers and CBSE sample papers. We have compiled the CBSE previous years question papers for Classes 10 and 12 students.
      </p>
      <div>
        <div>
          <h2 className='text-3xl font-bold text-blue-700 text-center'>2022 Class 12 Previous Year Question</h2>
          <GenerateTable list={questionTable.class12[2022]} title='Class 11 2022-PYQ' />
        </div>
        <div>
          <h2 className='text-3xl font-bold text-blue-700 text-center'>2021 Class 12 Previous Year Question</h2>
          <GenerateTable list={questionTable.class12[2021]} title='Class 11 2021-PYQ'  />
        </div>
      </div>
      <div>
        <div>
          <h2 className='text-3xl font-bold text-blue-700 text-center'>2022 Class 11 Previous Year Question</h2>
          <GenerateTable list={questionTable.class11[2022]} title='Class 12 2022-PYQ' />
        </div>
        <div>
          <h2 className='text-3xl font-bold text-blue-700 text-center'>2021 Class 11 Previous Year Question</h2>
          <GenerateTable list={questionTable.class11[2021]} title='Class 11 2021-PYQ'  />
        </div>
      </div>

    </div>
  )
}

export default ExamPaper