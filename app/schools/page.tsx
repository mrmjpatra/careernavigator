'use client'
import SchoolCategoryComp from '@/components/School/SchoolCategoryComp';
import SchoolDisplayComp from '@/components/School/SchoolDisplayComp';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { LuSettings2 } from 'react-icons/lu';
import { SchoolFormDetailsType } from '.';
import UseCollegesFormData from '@/utils/collegesFormData';
import { useFilterContext } from '@/components/School/FilterContext';


const fetchSchoolDetails = async () => {
    const { data } = await axios.get(`${process.env.HOST}/api/school`);
    const details: SchoolFormDetailsType[] = data.message;
    return details;
}

const SchoolHomePage = () => {
    const { selectedFilters, handleFilterChange } = useFilterContext()
    const searchParams = useSearchParams()
    const board = searchParams.get('data');
    const [showModal, setShowModal] = useState(false);
    const [isFilterSelected, setIsFilterSelected] = useState(false);
    const [filteredSchools, setFilteredSchools] = useState<SchoolFormDetailsType[] | undefined>();

    const { uniqueStatesArray, sortedCityList, sortedOwnerShip, sortedBoardList } = UseCollegesFormData();

    const { isLoading, error, data: allSchoolDetails } = useQuery({
        queryKey: ['schoolData'],
        queryFn: () => fetchSchoolDetails()
    });
    
    const filterCategory = useCallback(() => {
        const filterSchools = allSchoolDetails?.filter(school => {
            return (
                school.state === selectedFilters.selectedState ||
                school.city === selectedFilters.selectedCity ||
                school.ownership === selectedFilters.selectedOwnership ||
                school.board === selectedFilters.selectedBoard
            )
        })
        setIsFilterSelected(true);
        setFilteredSchools(filterSchools);
    }, [allSchoolDetails, selectedFilters]);

    const [isInitialUpdate, setIsInitialUpdate] = useState(true);


    useEffect(() => {
        if (Object.values(selectedFilters).some((val) => val !== '')) {
            filterCategory();
        } else {
            setFilteredSchools(allSchoolDetails)
        }
    }, [selectedFilters, filterCategory, allSchoolDetails]);

    useEffect(() => {
        // Check if it's the initial update and there are query parameters
        if (isInitialUpdate && (board)) {
            setIsInitialUpdate(false);
            handleFilterChange('selectedBoard', board);
        }
    }, [board, handleFilterChange, isInitialUpdate, selectedFilters]);


    //set the apply form modal value using the below funciton


    return (
        <div className="xl:max-[1100px] mx-auto h-full xl:w-[96%] py-4 md:[1000px] ">
            <div className="md:flex md:gap-3 md:justify-between pb-4">
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
                        <SchoolCategoryComp
                            title='State'
                            list={uniqueStatesArray}
                            selected='selectedState'
                            checked={selectedFilters.selectedState}
                        />
                        <SchoolCategoryComp
                            title='City'
                            list={sortedCityList}
                            selected='selectedCity'
                            checked={selectedFilters.selectedCity}

                        />
                        <SchoolCategoryComp
                            title='Board'
                            list={sortedBoardList}
                            selected='selectedBoard'
                            checked={selectedFilters.selectedBoard}
                        />
                        <SchoolCategoryComp
                            title='Ownership'
                            list={sortedOwnerShip}
                            selected='selectedOwnership'
                            checked={selectedFilters.selectedOwnership}
                        />
                    </div>
                </div>
                {/* Content */}
                <div className='md:w-[76%]'>
                    {/* filterListCont */}
                    <div className='py-5     border'>
                        {
                            isFilterSelected ?
                                (
                                    filteredSchools &&
                                    <SchoolDisplayComp
                                        isLoading={isLoading}
                                        schoolList={filteredSchools}
                                    />) :
                                <SchoolDisplayComp
                                    isLoading={isLoading}
                                    schoolList={allSchoolDetails ? allSchoolDetails : []}
                                />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolHomePage