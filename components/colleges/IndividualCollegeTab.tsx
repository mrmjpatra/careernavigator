'use client'
import { fetchAllCollegeDataType } from '@/app/colleges';
import React, { useState } from 'react'
import Overview from './Overview';
import Courses from './Courses';
import Review from './Review';

const IndividualCollegeTab = ({ collegeDetails }: { collegeDetails: fetchAllCollegeDataType }) => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            <ul className="flex md:x-14 mb-3">
                <li className={`${activeTab === 1 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} text-xl font-bold transition-all duration-300 ease-out block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(1)} >Overview</li>

                <li className={`${activeTab === 2 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} text-xl font-bold transition-all duration-200 ease-in  block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(2)}>Courses</li>

                <li className={`${activeTab === 3 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} text-xl font-bold transition-all duration-200 ease-in  block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(3)}>Reviews</li>
            </ul>
            <div className="mt-3 rounded-sm">
                {
                    collegeDetails &&
                    activeTab === 1 && <Overview
                        id={collegeDetails?.id}
                        collegeName={collegeDetails?.collegeName}
                        description={JSON.parse(collegeDetails?.description)}
                        state={collegeDetails?.state}
                        city={collegeDetails?.city}
                        campusSize={collegeDetails?.campusSize}
                        facultyStrength={collegeDetails?.facultyStrength}
                        studentStrength={collegeDetails?.studentStrength}
                        ownership={collegeDetails?.ownership}
                        collegePhoto={collegeDetails?.collegePhoto}
                        bannerPhotos={collegeDetails?.bannerPhotos}
                        address={collegeDetails?.address}
                    />
                }

                {activeTab === 2 && <Courses name={collegeDetails?.collegeName} courses={collegeDetails?.courses} />}

                {activeTab === 3 && <Review reviews={collegeDetails?.reviews} />}
            </div>
        </div>
    )
}

export default IndividualCollegeTab