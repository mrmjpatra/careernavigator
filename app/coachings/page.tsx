'use client'
import CoachingDisplayComp from '@/components/Coaching/CoachingDisplayComp';
import UseCollegesFormData from '@/utils/collegesFormData';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { LuSettings2 } from 'react-icons/lu';
import { CoachingFetchDataType } from '.';
import { useFilterContext } from '@/components/Coaching/CoachingFilterContext';
import CoachingCategoryComp from '@/components/Coaching/CoachingCategoryComp';


const fetchCoachingDetails = async () => {
    const { data } = await axios.get(`${process.env.HOST}/api/coaching`);
    const details: CoachingFetchDataType[] = data.message;
    return details;
}

const CoachingHomePage = () => {
    const { selectedFilters } = useFilterContext();
    const [showModal, setShowModal] = useState(false);
    const [isFilterSelected, setIsFilterSelected] = useState(false);
    const [filteredCoachings, setFilteredSchools] = useState<CoachingFetchDataType[] | undefined>();
    const { uniqueStatesArray, sortedCityList, soretdCoachingList } = UseCollegesFormData();

    const { isLoading, error, data: allCoachingDetails } = useQuery({
        queryKey: ['coachingData'],
        queryFn: () => fetchCoachingDetails()
    });
    const filterCategory = useCallback(() => {
        const filterSchools = allCoachingDetails?.filter(coach => {
            return (coach.state === selectedFilters.selectedState || coach.city === selectedFilters.selectedCity)
        })
        setFilteredSchools(filterSchools);
    }, [allCoachingDetails, selectedFilters]);

    useEffect(() => {
        if (Object.values(selectedFilters).some((val) => val !== '')) {
            filterCategory();
        } else {
            setFilteredSchools(allCoachingDetails)
        }
    }, [selectedFilters, filterCategory, allCoachingDetails]);

    return (
        <div className="xl:max-[1100px] mx-auto h-full xl:w-[96%] py-4 md:[1000px] ">
            <div className="md:flex md:gap-3 md:justify-between">
                {/* filter state */}
                <div className='flex justify-end pr-4 pb-5 items-center cursor-pointer md:hidden' onClick={() => setShowModal(prev => !prev)} >
                    <span className='bg-blue-700 text-white rounded-full p-2 hover:bg-blue-900 hover:shadow-md hover:shadow-blue-400 transition-all duration-200 ease-in'>
                        <LuSettings2 size={'1.5rem'} />
                    </span>
                    <span className='pl-2 font-bold'>Filters</span>
                </div>
                <div className={`${showModal ? 'fixed bottom-0 top-[1%] left-[10%] shadow-lg shadow-blue-500 overflow-y-scroll z-20 w-4/5' : 'md:w-[25rem] h-[50rem] bg-blue-500/5  overflow-y-scroll md:border-2 hidden md:block shadow-lg shadow-blue-500 rounded-md'}`}>
                    <div className={`${showModal ? 'bg-white rounded-lg w-full ' : 'shadow-md shadow-white/10 pt-2'}`}>
                        <div className={`${showModal ? 'flex justify-end bg-blue-600 py-3' : 'hidden'}`}>
                            <span className='bg-red-500 p-1 m-1 rounded-full hover:bg-red-400 transition-all duration-200 ease-in cursor-pointer' onClick={() => setShowModal(false)}>
                                <IoClose color='#fff' size={'2rem'} className='' />
                            </span>
                        </div>

                        {/* ALL Category List */}
                        <CoachingCategoryComp
                            title='State'
                            list={uniqueStatesArray}
                            selected='selectedState'
                            checked={selectedFilters.selectedState}
                        />
                        <CoachingCategoryComp
                            title='City'
                            list={sortedCityList}
                            selected='selectedCity'
                            checked={selectedFilters.selectedCity}
                        />
                        <CoachingCategoryComp
                            title='Providing'
                            list={soretdCoachingList}
                            selected='selectedProvider'
                            checked={selectedFilters.selectedProvider}
                        />
                    </div>
                </div>
                {/* Content */}
                <div className='md:w-[76%]'>
                    {/* filterListCont */}
                    <div className='py-5 border'>
                        {
                            isFilterSelected ?
                                (
                                    filteredCoachings &&
                                    <CoachingDisplayComp
                                        isLoading={isLoading}
                                        coachingList={filteredCoachings}
                                    />) :
                                <CoachingDisplayComp
                                    isLoading={isLoading}
                                    coachingList={allCoachingDetails ? allCoachingDetails : []}
                                />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoachingHomePage