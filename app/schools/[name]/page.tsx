import SchoolDetails from '@/components/School/SchoolDetails'
import { convertWord, getFormattedString } from '@/utils/functions';
import axios from 'axios';
import { Poppins } from 'next/font/google';
import React from 'react'
import { BsFillEmojiFrownFill } from 'react-icons/bs';
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

const getMetaData = async (schoolName: string) => {
    try {
        const { data } = await axios.get(`${process.env.HOST}/api/school/name/${getFormattedString(schoolName)}`);
        const name = convertWord(data.message.schoolName);
        const desc: string = data.message.description;
        const description = desc.replace(/<[^>]+>/g, '');
        return { name, description };
    } catch (error) {
        return {
            name: 'Schools',
            description: 'Schools'
        }
    }
}
const getSchoolId = async (schoolName: string) => {
    try {
        const { data } = await axios.get(`${process.env.HOST}/api/school/name/${getFormattedString(schoolName)}`);
        return data.message.id;
    } catch (error) {
        return null;
    }
}

export async function generateMetadata({ params }: { params: { name: string } }) {
    const { name, description } = await getMetaData(params.name);
    return { title: name, description };
}

const SpecificSchool = async ({ params }: { params: { name: string } }) => {
    const id = await getSchoolId(params.name);
    if (!id) {
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
        <div>
            <SchoolDetails id={id} />
        </div>
    )
}

export default SpecificSchool