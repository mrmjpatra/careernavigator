import React, { useCallback, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import CoachingItem from './CoachingItem'
import { CoachingFetchDataType } from '@/app/coachings'
import { convertWord } from '@/utils/functions'

type CoachingDisplayType = {
    coachingList: CoachingFetchDataType[],
    isLoading: boolean
    toggleModal: (value: string) => void
    selectedCity: string
}

const CoachingDisplayComp = ({ coachingList, isLoading, toggleModal, selectedCity }: CoachingDisplayType) => {
    const [sortingValue, setSortingValue] = useState('')
    const [sortedCoachingList, setSortedCoachingList] = useState<CoachingFetchDataType[]>([]);
    const filteringCollges = useCallback(() => {
        let sortList: CoachingFetchDataType[] = [...coachingList]; // Create a copy of the array
        if (sortingValue === 'name_asc') {
            sortList.sort((a, b) => a.coachingName.toLowerCase().localeCompare(b.coachingName.toLowerCase()));
        } else if (sortingValue === 'name_desc') {
            sortList.sort((a, b) => a.coachingName.toLowerCase().localeCompare(b.coachingName.toLowerCase())).reverse();
        }
        setSortedCoachingList(sortList);
    }, [sortingValue, coachingList]);

    useEffect(() => {
        setSortedCoachingList(coachingList);
        filteringCollges();
    }, [coachingList, filteringCollges]);
    return (
        <div>
            &nbsp;
            <h2 className="text-2xl font-medium text-blue-600 pl-2">
                {
                    selectedCity !== '' ? <span>Top Coachings in {convertWord(selectedCity)}</span>:<span>Coachings List</span>
                }

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
            {
                sortedCoachingList.map(coaching => <CoachingItem toggleModal={toggleModal} key={coaching.id} data={{ ...coaching }} />)
            }
        </div>
    )
}

export default CoachingDisplayComp