import SchoolDetails from '@/components/School/SchoolDetails'
import { convertWord, getFormattedString } from '@/utils/functions';
import axios from 'axios';
import React from 'react'

const getMetaData = async (schoolName: string) => {
    const { data } = await axios.get(`${process.env.HOST}/api/school/name/${getFormattedString(schoolName)}`);
    const name = convertWord(data.message.schoolName);
    const desc: string = data.message.description;
    const description = desc.replace(/<[^>]+>/g, '');
    return { name, description };
}
const getSchoolId = async (schoolName: string) => {
    const { data } = await axios.get(`${process.env.HOST}/api/school/name/${getFormattedString(schoolName)}`);
    return data.message.id;
}

export async function generateMetadata({ params }: { params: { name: string } }) {
    const { name, description } = await getMetaData(params.name);
    return { title: name, description };
}

const SpecificSchool =async ({ params }: { params: { name: string } }) => {
    const id = await getSchoolId(params.name)
    return (
        <div>
            <SchoolDetails id={id} />
        </div>
    )
}

export default SpecificSchool