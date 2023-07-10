'use client'
import { SchoolFormDetailsType } from '@/app/schools/page';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlinePersonOutline } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import { convertWord } from '../CollegeDetails/CollegeDetails';
import SchoolOverView from './OverView';


const SchoolDetails = ({ id }: { id: string }) => {
    const { isLoading, error, data: SelectedSchoolData } = useQuery({
        queryKey: ['SelectedSchoolData'],
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.HOST}/api/school/${id}`);
            const details: SchoolFormDetailsType = data.data;
            return details;
        }
    });
    return (
        <div>
            {/* Head */}
            <div className="relative">
                <div className="relative h-72  overflow-hidden">
                    {
                        SelectedSchoolData?.schoolPhoto ? <Image src={SelectedSchoolData?.schoolPhoto} alt="college banner"
                            fill /> : <Skeleton height={'20rem'}  />
                    }
                </div>
                <div className="bg-black/50 absolute top-0 left-0 h-full w-full">
                    <div className="absolute md:top-1/4 md:left-[10%] top-[20%] left-[5%]">
                        <h1 className="text-white text-4xl" style={{ fontFamily: 'Poppins' }} >{convertWord(SelectedSchoolData?.schoolName)}</h1>
                        <div className="flex my-5 gap-2 items-center">
                            <span className="text-white flex bg-blue-600 rounded-full p-1 md:p-3">
                                <MdOutlinePersonOutline size={'1.5rem'} color="white" className=" text-white" />
                            </span>
                            <span className="text-white">{convertWord(SelectedSchoolData?.ownership)}</span>
                            <span className="text-white flex bg-blue-600 rounded-full p-1 md:p-3">
                                <FaLocationDot size={'1.5rem'} color="white" />
                            </span>
                            <span className="text-white">{convertWord(SelectedSchoolData?.city)}({convertWord(SelectedSchoolData?.state)})</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Middle */}
            <div>

                {
                    SelectedSchoolData && <SchoolOverView {...SelectedSchoolData} />
                }

            </div>
        </div>
    )
}

export default SchoolDetails