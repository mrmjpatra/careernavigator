import React, { CSSProperties } from 'react'
import { FadeLoader } from 'react-spinners'

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Loading = () => {
    return (
        <div className='relative w-full h-80'>
            <div className='absolute left-1/2 top-1/2'>
                <FadeLoader
                    color='rgb(37 99 235)'
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    cssOverride={override}
                    loading={true}
                />
            </div>
        </div>
    )
}

export default Loading