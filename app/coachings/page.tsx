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
import { CoachingFetchDataType } from '.';
import ApplyModal from '@/components/ApplyModal';
import ApplyForm from '@/components/ApplyForm';


const fetchCoachingDetails = async () => {
    const { data } = await axios.get(`${process.env.HOST}/api/coaching`);
    const details: CoachingFetchDataType[] = data.message;
    return details;
}

const CoachingHomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [isFilterSelected, setIsFilterSelected] = useState(false);
    const [filteredSchools, setFilteredSchools] = useState<CoachingFetchDataType[]>([]);

    //Apply form Modal state
    const [showApplyModal, setShowApplyModal] = useState(false);
    const [coachingName, setCoachingName] = useState('');

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


    //set the apply form modal value using the below funciton
    const toggleModal = (coachingName: string) => {
        setShowApplyModal(!showApplyModal);
        setCoachingName(coachingName);
    };


    return (
        <div className="xl:max-[1100px] mx-auto h-full xl:w-[90%] py-4 md:[1000px] ">
            {
                showApplyModal && <ApplyModal onClose={() => setShowApplyModal(false)}>
                    <ApplyForm instituteName={coachingName} />
                </ApplyModal>
            }
            <div className="md:flex md:gap-3 md:justify-between">
                {/* filter state */}
                <div className='flex justify-end pr-4 items-center cursor-pointer md:hidden' onClick={() => setShowModal(prev => !prev)} >
                    <LuSettings2 color='#0081fa' />
                    <span>Filters</span>
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
                <div className='md:w-[76%]'>
                    {/* filterListCont */}
                    <div className='py-5 border'>
                        {
                            isFilterSelected ?
                                <CoachingDisplayComp selectedCity={listOfCategoryList.selectedCity} toggleModal={toggleModal} isLoading={isLoading} coachingList={filteredSchools} /> : <CoachingDisplayComp selectedCity={listOfCategoryList.selectedCity} toggleModal={toggleModal} isLoading={isLoading} coachingList={allCoachingDetails ? allCoachingDetails : []} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoachingHomePage