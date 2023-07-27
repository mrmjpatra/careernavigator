import React, { useCallback, useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import SchoolItem from './SchoolItem';
import { SchoolFormDetailsType } from '@/app/schools';
import { convertWord } from '@/utils/functions';
import { useFilterContext } from './FilterContext';
import SchoolSelectFilterComp from './SchoolSelectFilterComp';



type SchoolDisplayType = {
  schoolList: SchoolFormDetailsType[],
  isLoading: boolean

}
const SchoolDisplayComp = ({ schoolList, isLoading }: SchoolDisplayType) => {
  const [sortingValue, setSortingValue] = useState('')
  const [sortingSchoolList, setSortingSchoolList] = useState<SchoolFormDetailsType[]>([]);
  const { selectedFilters } = useFilterContext()

  const filteringCollges = useCallback(() => {
    let sortList: SchoolFormDetailsType[] = [...schoolList]; // Create a copy of the array
    if (sortingValue === 'name_asc') {
      sortList.sort((a, b) => a.schoolName.toLowerCase().localeCompare(b.schoolName.toLowerCase()));
    } else if (sortingValue === 'name_desc') {
      sortList.sort((a, b) => a.schoolName.toLowerCase().localeCompare(b.schoolName.toLowerCase())).reverse();
    }
    setSortingSchoolList(sortList);
  }, [sortingValue, schoolList]);

  useEffect(() => {
    setSortingSchoolList(schoolList);
    filteringCollges();
  }, [schoolList, filteringCollges]);

  return (
    <div>
      &nbsp;
      {/* filterListTitle */}
      <h2 className="text-2xl pl-2 font-medium text-blue-600">
       
        {
          selectedFilters.selectedCity===''?<span> Top Schools in India 2023</span>:<span>
              Top Schools in {convertWord(selectedFilters.selectedCity)}
             </span>
        }
      </h2>
      <SchoolSelectFilterComp />
      {/* filtersort */}
      <div className='text-right mt-1 font-medium'>
        <select name="sorting" id="sorting" className='py-2 px-3 mr-10 border rounded 
                    transition-all duration-200 ease-in
                    border-blue-600 outline-none font-medium'
          value={sortingValue} onChange={(e) => {
            setSortingValue(e.target.value);
          }}>
          <option defaultValue=''>Sort By</option>
          <option value="name_asc">A to Z</option>
          <option value="name_desc">Z to A</option>
        </select>
      </div>
      {
        isLoading && <div className='flex w-full items-center p-2'>
          <div className="w-[40%] h-full overflow-hidden flex"> <Skeleton width={'14rem'} height={'7rem'} /> </div>
          <div className="w-[80%]">
            <Skeleton width={'100%'} height={'6rem'} />
            <Skeleton width={'100%'} height={'1rem'} />
          </div>
          <div className='flex flex-col justify-center px-4 w-[30%] gap-3 '>
            <Skeleton width={'80%'} height={'2rem'} />
            <Skeleton width={'80%'} height={'2rem'} />
          </div>
        </div>
      }
      <SchoolListComp list={sortingSchoolList} />
    </div>
  )
}

export default SchoolDisplayComp;


type SchoolListCompProps = {
  list: SchoolFormDetailsType[],
}
const SchoolListComp = ({ list }: SchoolListCompProps) => {
  const [displayedColleges, setDisplayedColleges] = useState(list);
  const loadMoreRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setDisplayedColleges((prev) => [
          ...prev,
          ...list.slice(prev.length, prev.length + 2),
        ]);
      }
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [list]);

  useEffect(() => {
    const arrayList = list.slice(0, 1);
    setDisplayedColleges(arrayList);
  }, [list]);

  return (
    <>
      {
        displayedColleges.map(list => <SchoolItem key={list.id} data={{ ...list }}  />)
      }
      <div ref={loadMoreRef}></div>
    </>
  )
}