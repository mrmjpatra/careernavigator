'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

type fetchExamsNameType = {
  id: string,
  examName: string
}
const fetchExamsName = async () => {
  const { data } = await axios.get(`${process.env.HOST}/api/exam`);
  const details: fetchExamsNameType[] = data.message;
  return details;
}

const ExamsHomePage = () => {
  const { isLoading, error, data: examNameList } = useQuery({
    queryKey: ['examNameList'],
    queryFn: () => fetchExamsName()
  });

  return (
    <div>
      <h1 className='text-2xl font-bold text-blue-600 text-center'>Exams List</h1>
      {
        examNameList?.map(exam => <Link href={`/exam/${exam.examName}`} key={exam.id}> <h2 >{exam.examName.toLocaleUpperCase()}</h2></Link>)
      }
    </div>
  )
}

export default ExamsHomePage