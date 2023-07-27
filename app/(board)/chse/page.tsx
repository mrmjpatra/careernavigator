import Image from 'next/image'
import React from 'react'
import cbselogo from '@/public/assets/cbseboardlogo.png'
import { tableContent } from '@/utils/cbse-table-data'
import ServiceCard from '@/components/CBSE/ServiceCard'
import Link from 'next/link';




const CBSEPage = () => {
    return (
        <div className='md:px-12 sm:px-6 px-2 py-4'>
            <h1 className='md:text-5xl text-2xl sm:text-3xl mb-4 text-blue-800 font-bold'>CBSE Board</h1>
            
            <p className='first-line:uppercase first-line:tracking-widest
  md:first-letter:text-7xl  sm:first-letter:text-5xl first-letter:text-4xl first-letter:font-bold first-letter:text-blue-900
  first-letter:mr-3 first-letter:pl-3 first-letter:float-left text-justify'>
                The Central Board of Secondary Education (CBSE) is one of the most prestigious and preferred educational boards in India. CBSE Board aims to provide holistic and healthy education to all its learners so that students can get adequate space to develop mentally and physically. CBSE Board is known for its comprehensive syllabus and well-structured exam pattern, which helps students to get a detailed idea about the entire curriculum. There are around 20,102 schools under the board which follow the NCERT curriculum.
            </p>
            <div className='my-4'>
                <h2 className='text-3xl font-bold text-blue-700'>About</h2>
                <table className='border-collapse border border-slate-500 w-full my-3 bg-blue-100 shadow-lg rounded-lg shadow-blue-800'>
                    <thead>
                        <tr>
                            <th className='flex justify-center h-28'>
                                <Image src={cbselogo} alt='cbselogo' width={100} height={100} loading='eager' priority={true} className='w-full h-auto object-contain' />
                            </th>
                            <th className=''>
                                <span className='font-medium md:text-3xl'>Central Board of Secondary Education (CBSE)</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableContent.map(content =>
                                <tr key={content.id} className='h-12  odd:bg-slate-500 odd:text-white even:bg-slate-50'>
                                    <td className='text-left pl-4 font-medium border border-slate-600'>{content.title}</td>
                                    <td className='text-left pl-6 border border-slate-600'>{content.value}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='my-4 py-4 pl-4'>
                <div className='py-4 mb-2'>
                    <h3 className='font-medium text-3xl text-blue-600'>Find the best CBSE Schools with us</h3>
                    <p className=''>Hey students we will show you the best schools and give you chance to choose with us.</p>
                </div>
                <Link href={'/schools?data=cbse'}
                    className='inline-block w-1/2 my-4 text-slate-100 px-6 py-4 bg-red-600 text-2xl font-bold text-center hover:text-white hover:bg-red-800 rounded-md hover:shadow-md hover:shadow-red-400 transition-all duration-200 ease-in'
                >Find Now</Link>
            </div>
            <div className='px-6'>
                <ServiceCard />
            </div>
        </div>
    )
}

export default CBSEPage