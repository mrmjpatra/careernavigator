'use client'

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import UseCollegesFormData, { CollegeDetails } from '@/utils/collegesFormData';
import CollegeList from '@/components/colleges/CollegeList';
import FilteredList from '@/components/colleges/FilteredList';
import FilteredListName from '@/components/colleges/FilteredListName';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { LuSettings2 } from 'react-icons/lu';
import Modal from '@/components/colleges/Modal';
import { IoClose } from 'react-icons/io5';

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

  const { uniqueStatesArray, sortedStreamList, sortedDegreeList, sortedCityList, sortedSpecializationList, sortedCourse, sortedOwnerShip, sortedStudyMode } = UseCollegesFormData()
  const [collegesFormData, setCollegesFormData] = useState<CollegesFormData>({
    selectedStream: '',
    selectedDegree: '',
    selectedState: '',
    selectedCity: '',
    selectedSpecialization: '',
    selectedCourseType: '',
    selectedStudyMode: '',
    selectedOwnership: '',
  })
  const [filteredColleges, setFilteredColleges] = useState<CollegeDetails[]>([]);
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    filterColleges();
  }, [filterColleges, collegesFormData]);

  const handleFilterChange = (selected: string, value: string) => {
    setCollegesFormData(prev => ({ ...prev, [selected]: value }))
  };
  return (
    <div className="xl:max-[1100px] mx-auto h-full xl:w-[90%] py-4 md:[1000px] ">
      <SkeletonTheme baseColor="#cecece" highlightColor="#444">
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
                    isFilterSelected ? <CollegeList isLoading={isLoading} selected={collegesFormData.selectedStream.toUpperCase()} filteredColleges={filteredColleges} /> :
                      <CollegeList selected={collegesFormData.selectedStream.toUpperCase()} isLoading={isLoading} filteredColleges={allCollegeDetails ? allCollegeDetails : []} />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  )
}

export default Colleges