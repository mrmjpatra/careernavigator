'use client'
import useSorting from '@/hooks/useSorting';
import { Degree, DegreeList, Specialization, SpecializationList, Stream, StreamList } from '@/utils/formData';
import { ChangeEvent, useCallback, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { TiTick } from 'react-icons/ti'
const College = () => {
  const [selectedStream, setSelectedStream] = useState<string>(''); // Update initial value to an empty string
  const [degree, setDegree] = useState(false)
  const [state, setState] = useState(false)
  const [city, setCity] = useState(false)
  const [specialization, setSpecialization] = useState(false)
  const [courseType, setCourseType] = useState(false)
  const [studyMode, setStudyMode] = useState(false)
  const [ownership, setOwnership] = useState(false);
  const { data: sortedStreamList } = useSorting(StreamList, useCallback((a: Stream, b: Stream) => a.name.localeCompare(b.name), []))
  const { data: sortedDegreeList } = useSorting(DegreeList, useCallback((a: Degree, b: Degree) => a.name.localeCompare(b.name), []))

  const { data: sortedSpecializationList } = useSorting(SpecializationList, useCallback((a: Specialization, b: Specialization) => a.name.localeCompare(b.name), []));

  console.log(selectedStream)

  return (
    <div className="xl:max-[1100px] mx-auto h-full xl:w-[90%] py-4">
      <div className="flex gap-3 justify-between">
        <div className="w-[280px] border">
          <div className="shadow-md shadow-white/10 pt-2">
            {/* /Stream */}
            <div>
              <div>
                <section className="border-b border-black/10 mb-3 px-4 pb-5">
                  <div className="py-3 uppercase font-medium">Stream</div>
                  <div className="max-h-[165px] overflow-y-auto pr-1">
                    {/* FilterSearch */}
                    <div className="mb-3 sticky top-0 z-10 bg-white">
                      <input type="text" placeholder="Search....." id="Stream" className='w-full pt-2 pr-3 pb-2 pl-9 rounded border border-black' />
                      <FiSearch className='absolute top-3 left-3' />
                    </div>
                    {/* StreamLIst */}
                    <ul>

                      {
                        sortedStreamList.map((stream) => (
                          <li key={stream.id} className='flex items-center gap-3 mb-3 relative'>
                            <input
                              type="radio"
                              name="stream"
                              value={stream.value}
                              checked={stream.value === selectedStream}
                              onChange={() => setSelectedStream(stream.value)}
                              className="hidden"
                              id={stream.value}
                            />
                            <label
                              htmlFor={stream.value}
                              className="flex items-center gap-3 mb-3 cursor-pointer"
                            >
                              <span
                                className={`w-5 h-5 inline-block border-2 rounded-full ${stream.value === selectedStream ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
                                  }`}
                              >
                                {stream.value === selectedStream && (
                                  <span  ><TiTick color='white' /></span>

                                )}
                              </span>
                              <span>{stream.name}</span>
                            </label>

                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </section>
              </div>

            </div>
            {/* Degree */}
            <div>
              <div>
                <section className="border-b border-black/10 mb-3 px-4 pb-5">
                  <div className="py-3 uppercase font-medium">Degree</div>
                  <div className="max-h-[165px] overflow-y-auto pr-1">
                    {/* FilterSearch */}
                    <div className="mb-3 sticky top-0 z-10 bg-white">
                      <input type="text" placeholder="Search....." id="Stream" className='w-full pt-2 pr-3 pb-2 pl-9 rounded border border-black' />
                      <FiSearch className='absolute top-3 left-3' />
                    </div>
                    {/* StreamLIst */}
                    <ul>

                    </ul>
                  </div>
                </section>
              </div>

            </div>
            {/* State */}
            <div>
              <div>
                <section className="border-b border-black/10 mb-3 px-4 pb-5">
                  <div className="py-3 uppercase font-medium">State</div>
                  <div className="max-h-[165px] overflow-y-auto pr-1">
                    {/* FilterSearch */}
                    <div className="mb-3 sticky top-0 z-10 bg-white">
                      <input type="text" placeholder="Search....." id="Stream" className='w-full pt-2 pr-3 pb-2 pl-9 rounded border border-black' />
                      <FiSearch className='absolute top-3 left-3' />
                    </div>
                    {/* StreamLIst */}
                    <ul>

                    </ul>
                  </div>
                </section>
              </div>

            </div>
            {/* City */}
            <div>
              <div>
                <section className="border-b border-black/10 mb-3 px-4 pb-5">
                  <div className="py-3 uppercase font-medium">City</div>
                  <div className="max-h-[165px] overflow-y-auto pr-1">
                    {/* FilterSearch */}
                    <div className="mb-3 sticky top-0 z-10 bg-white">
                      <input type="text" placeholder="Search....." id="Stream" className='w-full pt-2 pr-3 pb-2 pl-9 rounded border border-black' />
                      <FiSearch className='absolute top-3 left-3' />
                    </div>
                    {/* StreamLIst */}
                    <ul>

                    </ul>
                  </div>
                </section>
              </div>

            </div>
            {/* Specialization */}
            {/* Course TYpe */}
            {/* Study Mode */}
            {/* Ownership */}
          </div>
        </div>
        {/* Content */}
        <div></div>
      </div>
    </div>
  )
}

export default College