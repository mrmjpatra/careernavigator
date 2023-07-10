import CoachingDetails from '@/components/Coaching/CoachingDetails'
import React from 'react'

const SelectedCoachingPage = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <CoachingDetails id={params.id} />
        </div>
    )
}

export default SelectedCoachingPage