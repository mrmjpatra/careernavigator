'use client'

import { createContext, ReactNode, useCallback, useContext, useState } from "react"
import { CollegesFormData } from "./CollegeHome"


export const FilterContext = createContext({
    selectedFilters: {
        selectedStream: '',
        selectedDegree: '',
        selectedState: '',
        selectedCity: '',
        selectedSpecialization: '',
        selectedCourseType: '',
        selectedStudyMode: '',
        selectedOwnership: '',
    },
    handleFilterChange: (selected: string, value: string) => { },
    updateState: (value: CollegesFormData) => { }
})

export const CollegeFilterProvider = ({ children }: { children: ReactNode }) => {
    const [selectedFilters, setSelectedFilters] = useState<CollegesFormData>({
        selectedStream: '',
        selectedDegree: '',
        selectedState: '',
        selectedCity: '',
        selectedSpecialization: '',
        selectedCourseType: '',
        selectedStudyMode: '',
        selectedOwnership: '',
    });

    const handleFilterChange = useCallback((selected: string, value: string) => {
        setSelectedFilters(prev => ({ ...prev, [selected]: value }))
    }, []);
    const updateState = (value: CollegesFormData) => {
        setSelectedFilters(value);
    }
    return (
        <FilterContext.Provider value={{ selectedFilters, handleFilterChange, updateState }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => useContext(FilterContext);