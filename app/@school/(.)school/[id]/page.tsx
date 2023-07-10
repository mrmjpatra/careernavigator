import Modal from '@/components/Modal/Modal'
import SchoolDetails from '@/components/School/SchoolDetails'
import React from 'react'

const SchoolModalPage = ({ params }: { params: { id: string } }) => {
    return (
        <Modal>
            <SchoolDetails id={params.id} />
        </Modal>
    )
}

export default SchoolModalPage