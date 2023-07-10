'use client'
import SchoolCategoryComp from '@/components/School/SchoolCategoryComp';
import SchoolDisplayComp from '@/components/School/SchoolDisplayComp';
import UseCollegesFormData from '@/utils/collegesFormData';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { LuSettings2 } from 'react-icons/lu';

export type SchoolFormDetailsType = {
    id: string
    schoolName: string,
    description: string,
    state: string,
    city: string,
    ownership: string,
    board: string,
    facultyStrength: string,
    studentStrength: string,
    address: {
        fullAddrs: string,
        phoneNumber: string,
        email: string,
        website?: string
    },
    schoolPhoto: string,
    bannerPhotos: string[]
}
const fetchSchoolDetails = async () => {
    const { data } = await axios.get(`${process.env.HOST}/api/school`);
    const details: SchoolFormDetailsType[] = data.schoolList;
    return details;
}

const SchoolHomePage = () => {
    const searchParams = useSearchParams()

    const search = searchParams.get('data')
    console.log(search)

    const [showModal, setShowModal] = useState(false);
    const [isFilterSelected, setIsFilterSelected] = useState(false);
    const [filteredSchools, setFilteredSchools] = useState<SchoolFormDetailsType[]>([]);
    const [listOfCategoryList, setListOfCategoryList] = useState({
        selectedState: '',
        selectedCity: '',
        selectedOwnership: '',
        selectedBoard: '',
    })
    const { uniqueStatesArray, sortedCityList, sortedOwnerShip, sortedBoardList } = UseCollegesFormData();

    const { isLoading, error, data: allSchoolDetails } = useQuery({
        queryKey: ['schoolData'],
        queryFn: () => fetchSchoolDetails()
    });
    const filterSchools = useCallback(() => {
        if (allSchoolDetails && Object.values(listOfCategoryList).some((element) => element !== '')) {
            setIsFilterSelected(true);
            const filterdData = allSchoolDetails.filter(school => (school.state === listOfCategoryList.selectedState || school.city === listOfCategoryList.selectedCity ||
                school.ownership === listOfCategoryList.selectedOwnership ||
                school.board === listOfCategoryList.selectedBoard));
            setFilteredSchools(filterdData);
        }
    }, [allSchoolDetails, listOfCategoryList]);

    const handleFilterChange = (selected: string, value: string) => {
        setListOfCategoryList(prev => ({ ...prev, [selected]: value }))
    };
    useEffect(() => {
        if (search !== null) {
            setListOfCategoryList(prev => ({ ...prev, selectedBoard: search }))
        }
        filterSchools();
    }, [listOfCategoryList, filterSchools, search]);
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
                            title='Board'
                            list={sortedBoardList}
                            onFilterChange={handleFilterChange}
                            selected='selectedBoard'
                            checked={listOfCategoryList.selectedBoard}
                            isLoading={isLoading}

                        />
                        <SchoolCategoryComp
                            title='Ownership'
                            list={sortedOwnerShip}
                            onFilterChange={handleFilterChange}
                            selected='selectedOwnership'
                            checked={listOfCategoryList.selectedOwnership}
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
                                        <SchoolDisplayComp isLoading={isLoading} schoolList={filteredSchools} /> : <SchoolDisplayComp isLoading={isLoading} schoolList={allSchoolDetails ? allSchoolDetails : []} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolHomePage