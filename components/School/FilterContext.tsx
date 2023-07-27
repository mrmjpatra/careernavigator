'use client'

import { createContext, ReactNode, useCallback, useContext, useState } from "react"

export const FilterContext = createContext({
    selectedFilters: {
        selectedState: '',
        selectedCity: '',
        selectedOwnership: '',
        selectedBoard: '',
    },
    handleFilterChange: (selected: string, value: string) => { },
})

export const SchoolFilterProvider = ({ children }: { children: ReactNode }) => {
    const [selectedFilters, setSelectedFilters] = useState({
        selectedState: '',
        selectedCity: '',
        selectedOwnership: '',
        selectedBoard: '',
    });

    const handleFilterChange = useCallback((selected: string, value: string) => {
        setSelectedFilters(prev => ({ ...prev, [selected]: value }))
    }, []);

    return (
        <FilterContext.Provider value={{ selectedFilters, handleFilterChange }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => useContext(FilterContext);