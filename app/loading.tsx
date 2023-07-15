'use client'
import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='relative w-full h-80'>
            <div className='absolute left-1/2 top-1/2'>
                <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor='#e5efff'
                    color='#0055f3'
                />
            </div>
        </div>
    )
}

export default Loading