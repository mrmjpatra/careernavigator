import SchoolDetails from '@/components/School/SchoolDetails'
import React from 'react'

const SpecificSchool = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <SchoolDetails id={params.id}/>
        </div>
    )
}

export default SpecificSchool