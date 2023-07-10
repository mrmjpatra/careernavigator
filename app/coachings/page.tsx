'use client'
import CoachingDisplayComp from '@/components/Coaching/CoachingDisplayComp';
import SchoolCategoryComp from '@/components/School/SchoolCategoryComp';
import SchoolDisplayComp from '@/components/School/SchoolDisplayComp';
import UseCollegesFormData from '@/utils/collegesFormData';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { LuSettings2 } from 'react-icons/lu';

export type CoachingFetchDataType = {
    id: string
    coachingName: string,
    description: string,
    providing: string[],
    state: string,
    city: string,
    coachingPhoto: string,
    facultyStrength: string,
    address: {
        fullAddrs: string;
        phoneNumber: string;
        email: string;
        website: string | null;
    },
    bannerPhotostring: string[],
}

const fetchCoachingDetails = async () => {
    const { data } = await axios.get(`${process.env.HOST}/api/coaching`);
    const details: CoachingFetchDataType[] = data.coachingList;
    return details;
}

const CoachingHomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [isFilterSelected, setIsFilterSelected] = useState(false);
    const [filteredSchools, setFilteredSchools] = useState<CoachingFetchDataType[]>([]);

    const [listOfCategoryList, setListOfCategoryList] = useState({
        selectedState: '',
        selectedCity: '',
        selectedProvider: '',
    })
    const { uniqueStatesArray, sortedCityList, soretdCoachingList } = UseCollegesFormData();

    const { isLoading, error, data: allCoachingDetails } = useQuery({
        queryKey: ['coachingData'],
        queryFn: () => fetchCoachingDetails()
    });

    const handleFilterChange = (selected: string, value: string) => {
        setListOfCategoryList(prev => ({ ...prev, [selected]: value }))
    };

    const filterSchools = useCallback(() => {
        if (allCoachingDetails && Object.values(listOfCategoryList).some((element) => element !== '')) {
            setIsFilterSelected(true);
            const filterdData = allCoachingDetails.filter(coach => (coach.state === listOfCategoryList.selectedState || coach.city === listOfCategoryList.selectedCity));
            setFilteredSchools(filterdData);

        }
    }, [allCoachingDetails, listOfCategoryList]);


    useEffect(() => {
        filterSchools();
    }, [listOfCategoryList, filterSchools]);


    return (
        <div className="xl:max-[1100px] mx-auto h-full xl:w-[90%] py-4 md:[1000px] ">
            <div className="md:flex md:gap-3 md:justify-between">
                {/* filter state */}
                <div className='flex justify-end pr-4 items-center cursor-pointer md:hidden' onClick={() => setShowModal(prev => !prev)} >
                    <LuSettings2 color='#0081fa' />
                    <span>Filters</span>
                </div>
                <div className={`${showModal ? 'fixed bottom-0 top-[1%] left-[10%] shadow-lg shadow-blue-500 overflow-y-scroll z-20 w-4/5' : 'md:w-[280px] md:border hidden md:block'}`}>
                    <div className={`${showModal ? 'bg-white rounded-lg w-full ' : 'shadow-md shadow-white/10 pt-2'}`}>
                        <div className={`${showModal ? 'flex justify-end bg-blue-600 py-3' : 'hidden'}`}>
                            <span className='bg-red-500 p-1 m-1 rounded-full hover:bg-red-400 transition-all duration-200 ease-in cursor-pointer' onClick={() => setShowModal(false)}>
                                <IoClose color='#fff' size={'2rem'} className='' />
                            </span>
                        </div>

                        {/* ALL Category List */}
                        <SchoolCategoryComp
                            title='State'
                            list={uniqueStatesArray}
                            onFilterChange={handleFilterChange}
                            selected='selectedState'
                            checked={listOfCategoryList.selectedState}
                            isLoading={isLoading}
                        />
                        <SchoolCategoryComp
                            title='City'
                            list={sortedCityList}
                            onFilterChange={handleFilterChange}
                            selected='selectedCity'
                            checked={listOfCategoryList.selectedCity}
                            isLoading={isLoading}

                        />
                        <SchoolCategoryComp
                            title='Providing'
                            list={soretdCoachingList}
                            onFilterChange={handleFilterChange}
                            selected='selectedProvider'
                            checked={listOfCategoryList.selectedProvider}
                            isLoading={isLoading}

                        />
                    </div>
                </div>
                {/* Content */}
                <div className='md:w-[72%]'>
                    <div>
                        {/* selcted column */}
                        <div></div>
                        {/* list of colleges */}
                        <div>
                            {/* filterListCont */}
                            <div className='py-5 mt-5 border'>
                                {
                                    isFilterSelected ?
                                        <CoachingDisplayComp isLoading={isLoading} coachingList={filteredSchools} /> : <CoachingDisplayComp isLoading={isLoading} coachingList={allCoachingDetails ? allCoachingDetails : []} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoachingHomePage