import { convertWord, getFormattedString } from '@/utils/functions';
import React from 'react'
import { fetchProjectsType } from '../page';
import { BsFillEmojiFrownFill } from 'react-icons/bs';
import { Poppins } from 'next/font/google';
import axios from 'axios';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

const fetchProjectData = async (name: string) => {
    try {
        const res = await fetch(`${process.env.HOST}/api/projects/${getFormattedString(name)}`);
        const data = await res.json();
        return data.message as fetchProjectsType;
    } catch (error) {
        return null;
    }
}

const getMetaData = async (title: string) => {
    try {
        const { data } = await axios.get(`${process.env.HOST}/api/projects/${getFormattedString(title)}`);
        const name = convertWord(data.message.name);
        const desc: string = data.message.content;
        const description = desc.replace(/<[^>]+>/g, '');
        return { name, description };
    } catch (error) {
        return {
            name: 'Projects',
            description: 'Projects'
        }
    }
}

export async function generateMetadata({ params }: { params: { name: string } }) {
    const { name, description } = await getMetaData(params.name);
    return { title: name, description };
}

export async function generateStaticParams() {
    const res = await fetch(`${process.env.HOST}/api/projects`, { next: { revalidate: 60 } });
    const data = await res.json();
    const collegeData: fetchProjectsType[] = data.message;
    return collegeData.map(d => ({
        name: getFormattedString(d.name, '-')
    }))
}

const IndividualProjectPage = async ({ params }: { params: { name: string } }) => {
    const project = await fetchProjectData(params.name);
    if (!project) {
        return (
            <div className="px-4 py-5 flex flex-col space-y-5 justify-center items-center">
                <div>
                    <span className="bg-red-700 text-white rounded-full p-4 flex">
                        <BsFillEmojiFrownFill size={'2rem'} />
                    </span>
                </div>
                <h1 className={`text-red-900 text-4xl font-bold ${poppins.className}`}>No Details Found</h1>
            </div>
        )
    }
    return (
        <div className='w-full md:mx-auto md:w-3/4 px-2 py-6'>
            <h1 className='text-blue-600 font-bold text-4xl my-2'>{convertWord(project.name.toLowerCase())}</h1>
            <div dangerouslySetInnerHTML={{ __html: JSON.parse(project?.content) }} className='pl-5'></div>
        </div>
    )
}

export default IndividualProjectPage