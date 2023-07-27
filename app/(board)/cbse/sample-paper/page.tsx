import React from 'react'

export async function generateMetadata() {
  const description = ' The National Council of Educational Research and Training (NCERT) is an autonomous body that aims to provide high-quality education to school children in India. Its primary work is to prepare and publish model textbooks, supplementary materials, educational kits, and more. NCERT textbooks serve as the foundation of the schooling system. The CBSE Board follows NCERT Books in the school curriculum for Classes 1 to 12, and other state boards have also adopted NCERT Books in their course curriculum.'
  return { title: "Sample Paper", description };
}

const SamplePaper = () => {
  return (
    <div>SamplePaper</div>
  )
}

export default SamplePaper