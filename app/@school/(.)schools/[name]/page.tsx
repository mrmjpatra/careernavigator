import Modal from '@/components/Modal/Modal'
import SchoolDetails from '@/components/School/SchoolDetails'
import { convertWord, getFormattedString } from '@/utils/functions';
import axios from 'axios';
import React from 'react';

const getSchoolId = async (schoolName: string) => {
    try {
        const { data } = await axios.get(`${process.env.HOST}/api/school/name/${getFormattedString(schoolName)}`);
        return data.message.id;
    } catch (error) {
        return null
    }
}

const SchoolModalPage = async ({ params }: { params: { name: string } }) => {
    const id = await getSchoolId(params.name);
    if (!id) {
        return(
            <>
            </>
        )
    }
    return (
        <Modal>
            <SchoolDetails id={id} />
        </Modal>
    )
}

export default SchoolModalPage