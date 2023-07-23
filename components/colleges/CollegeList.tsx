import Skeleton from "react-loading-skeleton";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchCollegeDetailsWithCourses } from "@/app/colleges";
import { convertWord } from "@/utils/functions";
import CollegeCard from "./CollegeCard";



const CollegeList = ({ filteredColleges, isLoading, selected, toggleModal }: { filteredColleges: fetchCollegeDetailsWithCourses[], isLoading: boolean, selected: string, toggleModal: (collegeName: string) => void }) => {

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

    return (
        <>
            <div>
                <h2 className="text-2xl font-medium text-blue-600">
                    &nbsp;Top {convertWord(selected.toLowerCase())} Colleges in India 2023
                </h2>
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
                <CollegeListComp list={sortingCollegesList} toggleModal={toggleModal} />
            </div>
        </>
    )
}

export default CollegeList;

type CollegeListCompProps = {
    list: fetchCollegeDetailsWithCourses[],
    toggleModal: (collegeName: string) => void
}

const CollegeListComp = ({ list, toggleModal }: CollegeListCompProps) => {
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

    useEffect(()=>{
        const arrayList=list.slice(0,1);
        setDisplayedColleges(arrayList);
    },[list]);

    return (
        <>
            {
                displayedColleges.map(list => <CollegeCard key={list.collegeName} data={{ ...list }} toggleModal={toggleModal} />)
            }
            <div ref={loadMoreRef}>Loading more...</div>
        </>
    )
}