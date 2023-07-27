import React from 'react'
import { useFilterContext } from './FilterContext';
import { RxCross2 } from 'react-icons/rx';
import { convertWord, getFormattedString } from '@/utils/functions';

const SchoolSelectFilterComp = () => {
    const { selectedFilters, handleFilterChange } = useFilterContext();

    if (Object.values(selectedFilters).every(val=>val==='')) {
        return (
            <>
            </>
        )
    }
    // var result = Object.keys(selectedFilters).map((key) => [key, selectedFilters[key]]);
    const filters = Object.entries(selectedFilters).filter(value => value[1] !== '')
    return (
        <div>
            <div className="my-3 pl-2">
                <p className="pt-2 mb-2 mr-3 float-left font-medium">Applied Filter</p>
                <ul>
                    {
                        filters.map(f => 
                        <li key={f[1]} className="cursor-pointer inline-block text-slate-600 mx-2 mb-1 px-3 py-2 rounded bg-white relative transition-all duration-200 border" 
                        onClick={()=>handleFilterChange(f[0],'')} >
                            <div className="cursor-pointer flex items-center gap-2">
                                {convertWord(getFormattedString(f[1] ?? ''))}
                                <span>
                                    <RxCross2 />
                                </span>
                            </div>
                        </li>)
                    }

                </ul>
            </div>
        </div>
    )
}

export default SchoolSelectFilterComp