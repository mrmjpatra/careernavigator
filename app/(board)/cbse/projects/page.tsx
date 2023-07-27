import { checkLength, convertWord, getFormatedDate, getFormattedString } from '@/utils/functions';
import Link from 'next/link';
import React from 'react'
export type fetchProjectsType = {
  id: string,
  name: string,
  content: string
  createdAt: string
  updatedAt: string
}
const fetchProjects = async () => {
  const res = await fetch(`${process.env.HOST}/api/projects`, { next: { revalidate: 60 } });
  const data = await res.json();
  return data.message as fetchProjectsType[];
}

export async function generateMetadata() {
  const description = ' A CBSE Science fair project allows you to pose your own questions and answer them. Science is a very useful and fascinating subject, but its most amazing aspect is that despite it being very close to us “in our day-to-day lives”, many of us choose to keep ourselves ignorant about even its most basic principles. Doing a CBSE Science project involves several steps that include developing and “owning” the question; researching literature; forming a hypothesis; experimenting and designing; organising and gathering data etc. Given its crucial importance in understanding our technical world and our function within it, you develop and apply skills in literary and laboratory research, statistical analysis, and public speaking while gaining a sense of empowerment and building self-esteem.'
  return { title: "Projects", description };
}


const Projects = async () => {
  const projectsList = await fetchProjects();
  return (
    <div className='px-5 py-6'>
      <h1 className='text-blue-700 text-5xl font-bold'>CBSE Projects</h1>
      <p className='first-letter:text-6xl first-letter:text-red-600 pl-2 first-letter:float-left leading-8 text-xl my-2'>
        A CBSE Science fair project allows you to pose your own questions and answer them. Science is a very useful and fascinating subject, but its most amazing aspect is that despite it being very close to us “in our day-to-day lives”, many of us choose to keep ourselves ignorant about even its most basic principles. Doing a CBSE Science project involves several steps that include developing and “owning” the question; researching literature; forming a hypothesis; experimenting and designing; organising and gathering data etc. Given its crucial importance in understanding our technical world and our function within it, you develop and apply skills in literary and laboratory research, statistical analysis, and public speaking while gaining a sense of empowerment and building self-esteem.
      </p>
      <div className='px-3'>
        {
          projectsList.map(list => <ProjectCard key={list.id} {...list} />)
        }
      </div>
    </div>
  )
}

export default Projects;


const ProjectCard = ({ name, content, updatedAt }: fetchProjectsType) => {
  const desc = checkLength((JSON.parse(content)), 100);
  return (
    <div className='my-3'>
      <Link href={`/cbse/projects/${getFormattedString(name, '-')}`} className='text-2xl text-blue-500 font-bold hover:text-red-500 ' >
        <h2 className='text-3xl'>{convertWord(name)}</h2>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: desc }} className='text-gray-800 pl-2 text-xl'>
      </div>
      <span className='text-gray-700 pl-1'>Published Date: {getFormatedDate(updatedAt)}</span>
      <hr className='h-1 text-gray-200' />
    </div>
  )
}