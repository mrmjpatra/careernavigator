'use client'
import { CoachingFetchDataType } from '@/app/coachings/page';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlinePersonOutline } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import { convertWord } from '../CollegeDetails/CollegeDetails';
import { CgList } from 'react-icons/cg';

const CoachingDetails = ({ id }: { id: string }) => {
    const { isLoading, error, data: SelectedCoachingData } = useQuery({
        queryKey: ['selectedCoachingData'],
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.HOST}/api/coaching/${id}`);
            const details: CoachingFetchDataType = data.data;
            return details;
        }
    });
    return (
        <div>
            <div className="relative">
                <div className="relative h-72  overflow-hidden">
                    {
                        SelectedCoachingData?.coachingPhoto ? <Image src={SelectedCoachingData?.coachingPhoto} alt="college banner"
                            fill /> : <Skeleton height={'20rem'} />
                    }
                </div>
                <div className="bg-black/50 absolute top-0 left-0 h-full w-full">
                    <div className="absolute md:top-1/4 md:left-[10%] top-[20%] left-[5%]">
                        <h1 className="text-white text-4xl" style={{ fontFamily: 'Poppins' }} >{convertWord(SelectedCoachingData?.coachingName)}</h1>
                        <div className="flex my-5 gap-2 items-center">
                            <span className='bg-blue-600 p-2 text-white rounded-full'>
                                <CgList size={'1.2rem'} />
                            </span>
                            <ul>
                                {
                                    SelectedCoachingData &&
                                    SelectedCoachingData.providing.map(p => <li key={p} className='text-white' >{convertWord(p)}</li>)
                                }
                            </ul>
                            <span className="text-white flex bg-blue-600 rounded-full p-1 md:p-3">
                                <FaLocationDot size={'1.5rem'} color="white" />
                            </span>
                            <span className="text-white">{convertWord(SelectedCoachingData?.city)}({convertWord(SelectedCoachingData?.state)})</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachingDetails