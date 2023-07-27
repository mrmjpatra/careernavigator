import Skeleton from "react-loading-skeleton";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { fetchCollegeDetailsWithCourses } from "@/app/colleges";
import { convertWord, getFormattedString } from "@/utils/functions";
import CollegeCard from "./CollegeCard";
import { CollegesFormData } from "./CollegeHome";
import SelectedFilterComp from "./SelectedFilterComp";
import { useFilterContext } from "./FilterContext";
type CollegeListProps = {
    filteredColleges: fetchCollegeDetailsWithCourses[]
    isLoading: boolean
}


const CollegeList: FC<CollegeListProps> = ({ filteredColleges, isLoading }) => {
    const {selectedFilters}=useFilterContext();
    const [sortingValue, setSortingValue] = useState('')
    const [sortingCollegesList, setSortingCollegesList] = useState<fetchCollegeDetailsWithCourses[]>(filteredColleges);

    const filteringCollges = useCallback(() => {
        let sortList: fetchCollegeDetailsWithCourses[] = [...filteredColleges]; // Create a copy of the array
        if (sortingValue === 'name_asc') {
            sortList.sort((a, b) => a.collegeName.toLowerCase().localeCompare(b.collegeName.toLowerCase()));
        } else if (sortingValue === 'name_desc') {
            sortList.sort((a, b) => a.collegeName.toLowerCase().localeCompare(b.collegeName.toLowerCase())).reverse();
        }
        setSortingCollegesList(sortList);
    }, [sortingValue, filteredColleges]);



    useEffect(() => {
        filteringCollges();
    }, [filteredColleges, filteringCollges, sortingValue]);
    console.log(filteredColleges)

    return (
        <>
            <div>
                <h2 className="text-2xl font-medium text-blue-600">
                    &nbsp;Top  {convertWord(getFormattedString(selectedFilters?.selectedStream ?? ''))} Colleges in India 2023
                </h2>
                <SelectedFilterComp />
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
            </div>
            <div>
                {/* allcolleges and for each college one section */}
                {
                    isLoading &&
                    <div className='flex md:flex-row flex-col items-center p-2'>
                        <div className="w-[40%]  h-full overflow-hidden flex"> <Skeleton width={'14rem'} height={'7rem'} /> </div>
                        <div className="w-[80%]">
                            <Skeleton width={'100%'} height={'6rem'} />
                            <Skeleton width={'100%'} height={'1rem'} />
                        </div>
                        <div className='flex  '>
                            <Skeleton width={'80%'} height={'2rem'} />
                            <Skeleton width={'80%'} height={'2rem'} />
                        </div>
                    </div>
                }
                <CollegeListComp list={sortingCollegesList} />
            </div>
        </>
    )
}

export default CollegeList;

type CollegeListCompProps = {
    list: fetchCollegeDetailsWithCourses[],
}

const CollegeListComp = ({ list }: CollegeListCompProps) => {
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
                displayedColleges.map(list => <CollegeCard key={list.collegeName} data={{ ...list }}  />)
            }
            <div ref={loadMoreRef}>Loading more...</div>
        </>
    )
}