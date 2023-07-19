'use client'

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import UseCollegesFormData, { CollegeDetails } from '@/utils/collegesFormData';
import CollegeList from '@/components/colleges/CollegeList';
import FilteredList from '@/components/colleges/FilteredList';
import FilteredListName from '@/components/colleges/FilteredListName';
import { LuSettings2 } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { useSearchParams } from 'next/navigation';
import ApplyModal from '@/components/ApplyModal';
import ApplyForm from '@/components/ApplyForm';

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


const fetchCollegeDetails = async () => {
  const { data } = await axios.get(`${process.env.HOST}/api/college/colleges`);
  const details: CollegeDetails[] = data.collegeDetails;
  return details;
}

const Colleges = () => {
  //if the user navigate using Link with query params
  const searchParams = useSearchParams();
  const stream = searchParams.get('stream');
    //Apply form Modal state
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [collegeName, setCollegeName] = useState('');
  //custom hook for getting all the filtered arrays
  const { uniqueStatesArray, sortedStreamList, sortedDegreeList, sortedCityList, sortedSpecializationList, sortedCourse, sortedOwnerShip, sortedStudyMode } = UseCollegesFormData()

  //filter selected state values
  const [collegesFormData, setCollegesFormData] = useState<CollegesFormData>({
    selectedStream: stream ?? '',
    selectedDegree: '',
    selectedState: '',
    selectedCity: '',
    selectedSpecialization: '',
    selectedCourseType: '',
    selectedStudyMode: '',
    selectedOwnership: '',
  })

  //if the user select any filter 
  const [filteredColleges, setFilteredColleges] = useState<CollegeDetails[]>([]);
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  //For Mobile responsive
  const [showModal, setShowModal] = useState(false);


  //Fetching all the colleges from apis
  const { isLoading, error, data: allCollegeDetails } = useQuery({
    queryKey: ['collegeData'],
    queryFn: () => fetchCollegeDetails()
  });

  const filterColleges = useCallback(() => {
    if (allCollegeDetails && Object.values(collegesFormData).some((element) => element !== '')) {
      const filteredColleges = allCollegeDetails.filter((college) => {

        const matchingCourse = college.courses.find((course) => {
          const conditions = [
            course.stream === collegesFormData.selectedStream,
            course.degree === collegesFormData.selectedDegree,
            course.specialization === collegesFormData.selectedSpecialization,
            course.courseType === collegesFormData.selectedCourseType,
            course.studyMode === collegesFormData.selectedStudyMode,
            college.city === collegesFormData.selectedCity,
            college.state === collegesFormData.selectedState,
            college.ownership === collegesFormData.selectedOwnership
          ];
          return conditions.some((condition) => condition);
        });
        return matchingCourse !== undefined;
      });

      setFilteredColleges(filteredColleges);
      setIsFilterSelected(true);
    }
  }, [allCollegeDetails, collegesFormData])


  //for every filter value change reload the component 
  useEffect(() => {
    filterColleges();
  }, [filterColleges, collegesFormData]);

  //set filter value in the object
  const handleFilterChange = (selected: string, value: string) => {
    setCollegesFormData(prev => ({ ...prev, [selected]: value }))
  };
  //set the apply form modal value using the below funciton
  const toggleModal = (collegeName: string) => {
    setShowApplyModal(!showApplyModal);
    setCollegeName(collegeName);

  };

  //return the view
  return (
    <div className="xl:max-[1100px] mx-auto h-full xl:w-[90%] py-4 md:[1000px] ">
      {
        showApplyModal && <ApplyModal onClose={()=>setShowApplyModal(false)}>
          <ApplyForm collegeName={collegeName} />
        </ApplyModal>
      }
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
            {/* /Stream */}
            <FilteredList
              title="Stream"
              list={sortedStreamList}
              selectedItem={collegesFormData.selectedStream}
              selected={'selectedStream'}
              onFilterChange={handleFilterChange}
              name='name'
              isLoading={isLoading}
            />
            {/* Degree */}
            <FilteredList
              title="Degree"
              list={sortedDegreeList}
              selectedItem={collegesFormData.selectedDegree}
              selected={'selectedDegree'}
              onFilterChange={handleFilterChange}
              name='name'
              isLoading={isLoading}
            />
            {/* State */}
            <FilteredList
              title="State"
              list={uniqueStatesArray}
              selectedItem={collegesFormData.selectedState}
              selected={'selectedState'}
              onFilterChange={handleFilterChange}
              isLoading={isLoading}
            />


            {/* City */}
            <FilteredListName
              title='City'
              list={sortedCityList}
              selectedItem={collegesFormData.selectedCity}
              selected='selectedCity'
              onFilterChange={handleFilterChange}
              isLoading={isLoading}
            />

            {/* Specialization */}
            <FilteredListName
              title='Specialization'
              list={sortedSpecializationList}
              selectedItem={collegesFormData.selectedSpecialization}
              selected='selectedSpecialization'
              onFilterChange={handleFilterChange}
              name='name'
              isLoading={isLoading}
            />

            {/* Course TYpe */}
            <FilteredList
              title="Course Type"
              list={sortedCourse}
              selectedItem={collegesFormData.selectedCourseType}
              selected={'selectedCourseType'}
              onFilterChange={handleFilterChange}
              isLoading={isLoading}
            />

            {/* Study Mode */}
            <FilteredList
              title="Study Mode"
              list={sortedStudyMode}
              selectedItem={collegesFormData.selectedStudyMode}
              selected={'selectedStudyMode'}
              onFilterChange={handleFilterChange}
              isLoading={isLoading}
            />
            {/* Ownership */}
            <FilteredList
              title="Ownership"
              list={sortedOwnerShip}
              selectedItem={collegesFormData.selectedOwnership}
              selected={'selectedOwnership'}
              onFilterChange={handleFilterChange}
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
                  isFilterSelected ? <CollegeList toggleModal={toggleModal} isLoading={isLoading} selected={collegesFormData.selectedStream.toUpperCase()} filteredColleges={filteredColleges} /> :
                    <CollegeList toggleModal={toggleModal} selected={collegesFormData.selectedStream.toUpperCase()} isLoading={isLoading} filteredColleges={allCollegeDetails ? allCollegeDetails : []} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Colleges