'use client'

import { createContext, ReactNode, useCallback, useContext, useState } from "react"



export const FilterContext = createContext({
    selectedFilters: {
        selectedState: '',
        selectedCity: '',
        selectedProvider: '',
    },
    handleFilterChange: (selected: string, value: string) => { },
})

export const CoachingFilterProvider = ({ children }: { children: ReactNode }) => {
    const [selectedFilters, setSelectedFilters] = useState({
        selectedState: '',
        selectedCity: '',
        selectedProvider: '',
    });

    const handleFilterChange = (selected: string, value: string) => {
        console.log("first")
        setSelectedFilters(prev => ({ ...prev, [selected]: value }))
    }

    return (
        <FilterContext.Provider value={{ selectedFilters, handleFilterChange }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => useContext(FilterContext);