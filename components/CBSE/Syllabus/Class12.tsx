import { syllabusTable } from '@/utils/Board/CBSE/Syllabus'
import React from 'react'

const Class12Syallbus = () => {
    return (
        <div className='px-7 py-6'>
             <h1 className='text-5xl font-bold text-blue-700 my-2'>Syllabus</h1>
            <div className='space-y-4'>
                <p className='first-letter:text-6xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-3 first-letter:float-left leading-8 font-medium'>
                    CBSE Syllabus contains the list of topics and subtopics to be covered in the course of study during an academic year. For the new academic session 2023-24, CBSE has released the latest syllabus for classes 9 to 12 on its official website. Check out the CBSE syllabus for class 1 to 12 in this article. The exams will be conducted based on the CBSE Syllabus prescribed by the board. The syllabus includes a summary and a list of chapters to be studied by students in Class. Most competitive exams ask questions based on CBSE Syllabus. Every year CBSE issues the syllabus for classes 1 to 12. From basic information to detailed one, the syllabus contains all the information needed by a student and the teacher.
                </p>
                <p className='leading-8 font-medium'> Here, we have provided the CBSE curriculum for class 1 to class 12 in a detailed manner for all the subjects. NCERT releases books which are purely based on the CBSE Syllabus. Students are recommended to study from NCERT Books to get better results. Knowing the syllabus at the beginning of the academic session is important to every student. This will help them understand what they must study for the entire year. Also, they can plan their studies in advance.</p>
            </div>
            <div className='my-4'>
                <h1 className='text-3xl font-bold text-blue-700'>CBSE Class 12 Syllabus</h1>
                <p className='pl-2 leading-8 font-medium'>
                    Class 12 is the final stage of schooling. Knowing the syllabus is a part of exam preparation. Students aiming to score high marks in CBSE Class 12 must thoroughly understand the syllabus of all the subjects. During studies, it will help them keep track of what they have studied till now and what they need to cover. Moreover, it will keep them focussed, and they will not get diverted to unnecessary topics that are unimportant from an exam perspective.
                </p>
                <GenerateTable list={syllabusTable.class12} title='CBSE Class 12 Syllabus' />
            </div>
            <div>
                <h1 className='text-3xl font-bold text-blue-700'>CBSE Class 11 Syllabus</h1>
                <p className='pl-2 leading-8 font-medium'>
                    As students get into CBSE Class 11, they start feeling the pressure of their studies. This is because of more number of subjects and vast syllabus. Here, students mostly have part 1 and part 2 textbooks of a single subject. They often get confused about where to start and what to study. In this, the class 11 syllabus plays a crucial role. Students must follow the syllabus and study the topics which are mentioned in it. In this way, they could able to complete the entire syllabus in time and also able to score good marks.
                </p>
                <GenerateTable list={syllabusTable.class11} title='CBSE Class 11 Syllabus' />
            </div>
        </div>
    )
}

export default Class12Syallbus;

export const GenerateTable = ({ list,title }: {
    list: {
        id: string;
        title: string;
        link: string;
    }[],
    title:string
}) => {
    return (
        <table className="border-collapse border border-slate-500 bg-blue-100 shadow-lg rounded-lg shadow-blue-800 w-3/4 mx-auto my-5 px-5 py-4">
            <thead className='h-14 '>
                <tr>
                    <th className='text-2xl w-full' colSpan={2}>{title}</th>
                </tr>
            </thead>
            <tbody>
                {
                    syllabusTable.class12.filter((_, index) => index % 2 === 0).map((value, index) => (
                        <tr className="border border-slate-700 h-11 odd:bg-slate-500 odd:text-white even:bg-slate-50" key={value.id}>
                            <td className="border border-slate-600 pl-4">
                                <a href={`https://${value.link}`}>{value.title}</a>
                            </td>
                            {index * 2 + 1 < syllabusTable.class12.length ? <td className="border border-slate-600 pl-4">{syllabusTable.class12[index * 2 + 1].title}</td> : null}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}


