import Class12Syallbus from '@/components/CBSE/Syllabus/Class12'
import { getFormattedString } from '@/utils/functions';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata():Promise<Metadata> {
    const description = ' The National Council of Educational Research and Training (NCERT) is an autonomous body that aims to provide high-quality education to school children in India. Its primary work is to prepare and publish model textbooks, supplementary materials, educational kits, and more. NCERT textbooks serve as the foundation of the schooling system. The CBSE Board follows NCERT Books in the school curriculum for Classes 1 to 12, and other state boards have also adopted NCERT Books in their course curriculum.'
    const keywords=getFormattedString(description," ");
    return { title: "Syllabus", description,keywords };
}

const Syllabus = () => {
    return (
        <div>
            <Class12Syallbus />
        </div>
    )
}

export default Syllabus