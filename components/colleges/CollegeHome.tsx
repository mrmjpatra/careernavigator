'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import UseCollegesFormData from '@/utils/collegesFormData';
import CollegeList from '@/components/colleges/CollegeList';
import FilteredList from '@/components/colleges/FilteredList';
import { LuSettings2 } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { useSearchParams } from 'next/navigation';
import ApplyModal from '@/components/ApplyModal';
import ApplyForm from '@/components/ApplyForm';
import { fetchCollegeDetailsWithCourses } from '@/app/colleges';
import { fetchCategoryList, fetchCollegeDataWithCourse } from '@/lib/helper-fetch';
import FetchFilterComp from './FetchFilterComp';
import { useFilterContext } from './FilterContext';

export type CollegesFormData = {
    selectedStream: string;
    selectedDegree: string;
    selectedState: string;
    selectedCity: string;
    selectedSpecialization: string;
    selectedCourseType: string;
    selectedStudyMode: string;
    selectedOwnership: string;
}
type AddCourseProps = {
    sortedDegreeList: fetchCategoryList[]
    sortedStreamList: fetchCategoryList[]
    sortedSpecializationList: fetchCategoryList[]
}

const CollegeHome = ({ sortedDegreeList, sortedStreamList, sortedSpecializationList }: AddCourseProps) => {
    const { selectedFilters, handleFilterChange, updateState } = useFilterContext();
    const { isLoading, error, data: allCollegeDetails } = useQuery({
        queryKey: ['allCollegeDetails'],
        queryFn: () => fetchCollegeDataWithCourse()
    });

    //if the user navigate using Link with query params
    const searchParams = useSearchParams();
    const stream = searchParams.get('stream');
    const degree = searchParams.get('degree');
    const state = searchParams.get('state');
    //Apply form Modal state
    const [showApplyModal, setShowApplyModal] = useState(false);
    const [collegeName, setCollegeName] = useState('');
    //custom hook for getting all the filtered arrays
    const { uniqueStatesArray, sortedCourse, sortedOwnerShip, sortedStudyMode, sortedCityList } = UseCollegesFormData()

    //if the user select any filter 
    const [filteredColleges, setFilteredColleges] = useState<fetchCollegeDetailsWithCourses[]>();
    const [isFilterSelected, setIsFilterSelected] = useState(false);

    //For Mobile responsive
    const [showModal, setShowModal] = useState(false);

    const filterCategory = useCallback(() => {
        const filterColleges = allCollegeDetails?.filter(college => {
            const matchingCourse = college.courses.find((course) => {
                const conditions = [
                    course.stream === selectedFilters.selectedStream,
                    course.degree === selectedFilters.selectedDegree,
                    course.specialization === selectedFilters.selectedSpecialization,
                    course.courseType === selectedFilters.selectedCourseType,
                    course.studyMode === selectedFilters.selectedStudyMode,
                    college.city === selectedFilters.selectedCity,
                    college.state === selectedFilters.selectedState,
                    college.ownership === selectedFilters.selectedOwnership
                ];
                return conditions.some((condition) => condition);
            });
            return matchingCourse !== undefined;
        })
        setIsFilterSelected(true);
        setFilteredColleges(filterColleges);
    }, [selectedFilters, allCollegeDetails]);

    useEffect(() => {
        if (Object.values(selectedFilters).some((val) => val !== '')) {
            filterCategory();
        } else {
            setFilteredColleges(allCollegeDetails)
        }
    }, [selectedFilters, filterCategory, allCollegeDetails]);

    const [isInitialUpdate, setIsInitialUpdate] = useState(true);

    useEffect(() => {
        // Check if it's the initial update and there are query parameters
        if (isInitialUpdate && (stream || degree || state)) {
            setIsInitialUpdate(false);
            handleFilterChange('selectedStream', stream || selectedFilters.selectedStream);
            handleFilterChange('selectedDegree', degree || selectedFilters.selectedDegree);
            handleFilterChange('selectedState', state || selectedFilters.selectedState);
        }
    }, [stream, degree, state, handleFilterChange, isInitialUpdate, selectedFilters]);



    //set the apply form modal value using the below funciton
    const toggleModal = (collegeName: string) => {
        setShowApplyModal(!showApplyModal);
        setCollegeName(collegeName);
    }

    //return the view
    return (
        <div className="xl:max-[1100px] mx-auto h-full xl:w-[96%] py-4 md:[1000px] ">
            {
                showApplyModal && <ApplyModal onClose={() => setShowApplyModal(false)}>
                    <ApplyForm instituteName={collegeName} />
                </ApplyModal>
            }
            <div className="md:flex md:gap-10">
                {/* filter state */}
                <div className='flex justify-end pr-4 pb-5 items-center cursor-pointer md:hidden' onClick={() => setShowModal(prev => !prev)} >
                    <span className='bg-blue-700 text-white rounded-full p-2 hover:bg-blue-900 hover:shadow-md hover:shadow-blue-400 transition-all duration-200 ease-in'>
                        <LuSettings2 size={'1.5rem'} />
                    </span>
                    <span className='pl-2 font-bold'>Filters</span>
                </div>
                <div className={`${showModal ? 'fixed bottom-0 top-[1%] left-[10%] shadow-lg shadow-blue-500 overflow-y-scroll z-20 w-4/5' : 'md:w-[25rem] h-[50rem] bg-blue-500/5  overflow-y-scroll md:border-2 hidden md:block shadow-lg shadow-blue-500 rounded-md'} `}>
                    <div className={`${showModal ? 'bg-white rounded-lg w-full ' : 'shadow-md shadow-white/10 pt-2'}`}>
                        <div className={`${showModal ? 'flex justify-end bg-blue-600 py-3' : 'hidden'}`}>
                            <span className='bg-red-500 p-1 m-1 rounded-full hover:bg-red-400 transition-all duration-200 ease-in cursor-pointer' onClick={() => setShowModal(false)}>
                                <IoClose color='#fff' size={'2rem'} className='' />
                            </span>
                        </div>
                        {/* /Stream */}
                        <FetchFilterComp
                            list={sortedStreamList}
                            title='Stream'
                            selected='selectedStream'
                            selectedItem={selectedFilters.selectedStream}
                        />
                        {/* Degree */}
                        <FetchFilterComp
                            list={sortedDegreeList}
                            title='Degree'
                            selected='selectedDegree'
                            selectedItem={selectedFilters.selectedDegree}
                        />
                        {/* State */}
                        <FilteredList
                            title="State"
                            list={uniqueStatesArray}
                            selectedItem={selectedFilters.selectedState}
                            selected={'selectedState'}
                        />


                        {/* City */}
                        <FilteredList
                            title='City'
                            list={sortedCityList}
                            selectedItem={selectedFilters.selectedCity}
                            selected={'selectedCity'}
                        />

                        {/* Specialization */}
                        <FetchFilterComp
                            list={sortedSpecializationList}
                            title='Specialization'
                            selected='selectedSpecialization'
                            selectedItem={selectedFilters.selectedSpecialization}
                        />

                        {/* Course TYpe */}
                        <FilteredList
                            title="Course Type"
                            list={sortedCourse}
                            selectedItem={selectedFilters.selectedCourseType}
                            selected={'selectedCourseType'}
                        />

                        {/* Study Mode */}
                        <FilteredList
                            title="Study Mode"
                            list={sortedStudyMode}
                            selectedItem={selectedFilters.selectedStudyMode}
                            selected={'selectedStudyMode'}
                        />
                        {/* Ownership */}
                        <FilteredList
                            title="Ownership"
                            list={sortedOwnerShip}
                            selectedItem={selectedFilters.selectedOwnership}
                            selected={'selectedOwnership'}
                        />
                    </div>
                </div>
                {/* Content */}
                <div className='md:w-[76%]'>
                    <div>
                        {/* list of colleges */}
                        <div className='py-5 border'>
                            {/* {allCollegeDetails &&
                                <CollegeList
                                    toggleModal={toggleModal}
                                    isLoading={isLoading}
                                    filteredColleges={allCollegeDetails}
                                />} */}
                            {
                                isFilterSelected ?
                                    (
                                        filteredColleges &&
                                        <CollegeList toggleModal={toggleModal}
                                            isLoading={isLoading}
                                            filteredColleges={filteredColleges}
                                        />
                                    ) :
                                    (
                                        <CollegeList
                                            toggleModal={toggleModal}
                                            isLoading={isLoading}
                                            filteredColleges={allCollegeDetails ?? []}
                                        />
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CollegeHome