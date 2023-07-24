import Link from 'next/link'
import React from 'react'

type fetchExamsNameType = {
  id: string,
  examName: string
  examLink:string
}
const fetchExamsName = async () => {
  const res = await fetch(`${process.env.HOST}/api/exam`, { next: { revalidate: 10 } });
  const data = await res.json();
  const details: fetchExamsNameType[] = data.message;
  return details;
}

const ExamsHomePage = async () => {
  const examNameList = await fetchExamsName();

  return (
    <div className='px-4 py-5'>
      <h1 className='text-2xl md:text-3xl font-bold text-blue-900'>Exams List</h1>
      <div className='flex flex-col mt-5 gap-3 pl-4'>
        {
          examNameList?.map(exam =>
            <Link href={`/exam/${exam.examLink}`} key={exam.id}>
              <h2 className='text-red-700 hover:text-red-900 font-medium text-xl ' >{exam.examName.toLocaleUpperCase()}</h2>
            </Link>)
        }
      </div>
    </div>
  )
}

export default ExamsHomePage