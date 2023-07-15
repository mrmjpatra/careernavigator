import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner';



type ExamCategoryProps = {
    api: string,
    property: string,
    title: string,
    examId: string
}
const ReusableComp = ({ title, api, property, examId }: ExamCategoryProps) => {
    const [examData, setExamData] = useState<any[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`${process.env.HOST}/api/exam/${api}`);
            const details: any[] = data.message;
            setExamData(details);
            setLoading(false);
        }
        fetchData();
        if (examData) {
            const preview = document.getElementById('preview');
            const values = examData?.find(exam => exam.examId === examId);
            if (preview && values) {
                const key = Object.keys(values)[1]
                preview.innerHTML = JSON.parse(values[key])
            }
        }
    }, [examId, examData, title, api, property]);


    return (
        <div>
            {
                loading ? <div className='flex justify-center'><InfinitySpin
                    width='200'
                    color="#003cc7"
                /></div> : <><h1 className='text-2xl font-bold text-blue-600 text-center'>{title}</h1>
                    <div id='preview'></div></>
            }

        </div>
    )
}

export default ReusableComp