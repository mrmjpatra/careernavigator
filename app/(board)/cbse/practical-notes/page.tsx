import { GenerateTable } from '@/components/CBSE/Syllabus/Class12'
import { practicalTable } from '@/utils/Board/CBSE/Syllabus'
import { getFormattedString } from '@/utils/functions';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: 'Practical Notes',
  description:'CBSE practical experiments are as important as theoretical knowledge to the students. The human mind learns better when it sees things. Hence, practical knowledge is vital for all students. The practical experiments also help students learn better as they can visualise the concepts and principles. Students must know that CBSE practical exam for Class 11 and Class 12 consists of 30 marks.',
  keywords:getFormattedString('CBSE practical experiments are as important as theoretical knowledge to the students. The human mind learns better when it sees things. Hence, practical knowledge is vital for all students. The practical experiments also help students learn better as they can visualise the concepts and principles. Students must know that CBSE practical exam for Class 11 and Class 12 consists of 30 marks.',' ')
}

const PracticalNotes = () => {
  return (
    <div className='px-5 py-4'>
      <h1 className='text-5xl font-bold text-blue-700 my-2'>Practical Notes</h1>
      <div className='space-y-4'>
        <p className='first-letter:text-6xl text-xl first-letter:text-red-600 first-letter:float-left'>
          CBSE practical experiments are as important as theoretical knowledge to the students. The human mind learns better when it sees things. Hence, practical knowledge is vital for all students. The practical experiments also help students learn better as they can visualise the concepts and principles. Students must know that CBSE practical exam for Class 11 and Class 12 consists of 30 marks.
        </p>
        <p className='text-xl'>
          For Classes 9 and 10, the practical exam is for 20 marks. As the final exam approaches, students become busy with their exam preparation and ignore preparing for the CBSE practical exams.  But, they must aim to get full marks in the practical exam to increase their overall marks in the final exam. Therefore, students are advised to pay attention to the practical exam and prepare for all the Physics, Chemistry, and Biology experiments and viva questions.
        </p>
      </div>
      <div>
        <GenerateTable list={practicalTable.class12} title='CBSE Practical for Class 12' />
        <GenerateTable list={practicalTable.class11} title='CBSE Practical for Class 11' />
        <GenerateTable list={practicalTable.class10} title='CBSE Practical for Class 10' />
        <GenerateTable list={practicalTable.class9} title='CBSE Practical for Class 9' />
        <GenerateTable list={practicalTable.class68} title='CBSE Practical for Class 6 to 8' />

      </div>
    </div>
  )
}

export default PracticalNotes