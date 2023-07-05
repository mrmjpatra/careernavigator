import React from 'react'
import { FadeLoader } from 'react-spinners'

const CollegeLoading = () => {
    return (
        <div className='relative w-full h-80'>
            <div className='absolute left-1/2 top-1/2'>
                <FadeLoader
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    )
}

export default CollegeLoading