'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlinePersonOutline } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import SchoolOverView from './OverView';
import Review from '../colleges/Review';
import { fetchIndividualSchoolData } from '@/app/schools';
import { convertWord } from '@/utils/functions';


const fetch = async (id: string) => {
    const { data } = await axios.get(`${process.env.HOST}/api/school/${id}`);
    const details: fetchIndividualSchoolData = data.message;
    return details;
}

const SchoolDetails = ({ id }: { id: string }) => {
    const [activeTab, setActiveTab] = useState(1);
    const { isLoading, error, data: SelectedSchoolData } = useQuery({
        queryKey: ['SelectedSchoolData'],
        queryFn: () => fetch(id)
    });
    return (
        <div>
            {/* Head */}
            <div className="relative">
                <div className="relative h-72  overflow-hidden">
                    {
                        SelectedSchoolData?.schoolPhoto ? <Image src={SelectedSchoolData?.schoolPhoto.downloadUrl} alt="college banner"
                            fill /> : <Skeleton height={'20rem'} />
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
            <div>
                <ul className="flex md:x-14 mb-3">
                    <li className={`${activeTab === 1 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} text-xl font-bold transition-all duration-300 ease-out block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(1)} >Overview</li>
                    <li className={`${activeTab === 2 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} text-xl font-bold transition-all duration-200 ease-in  block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(2)}>Reviews</li>
                </ul>
                <div className="mt-3 rounded-sm">
                    {
                        activeTab === 1 && SelectedSchoolData && <SchoolOverView {...SelectedSchoolData} />
                    }

                    {activeTab === 2 && <Review reviews={SelectedSchoolData?.SchoolReviews} />}
                </div>
            </div>
        </div>
    )
}

export default SchoolDetails