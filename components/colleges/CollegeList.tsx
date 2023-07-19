import { CollegeDetails } from "@/utils/collegesFormData"
import Image from "next/image";
import Collegephoto from '@/public/assets/joshDefaltBanner1.jpg'
import { GrLocation } from "react-icons/gr";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";



const CollegeList = ({ filteredColleges, isLoading, selected,toggleModal }: { filteredColleges: CollegeDetails[], isLoading: boolean, selected: string ,toggleModal:(collegeName:string)=>void}) => {

    const [sortingValue, setSortingValue] = useState('')
    const [sortingCollegesList, setSortingCollegesList] = useState<CollegeDetails[]>([]);

    const filteringCollges = useCallback(() => {
        let sortList: CollegeDetails[] = [...filteredColleges]; // Create a copy of the array
        if (sortingValue === 'name_asc') {
            sortList.sort((a, b) => a.collegeName.toLowerCase().localeCompare(b.collegeName.toLowerCase()));
        } else if (sortingValue === 'name_desc') {
            sortList.sort((a, b) => a.collegeName.toLowerCase().localeCompare(b.collegeName.toLowerCase())).reverse();
        }
        setSortingCollegesList(sortList);
    }, [sortingValue, filteredColleges]);

    useEffect(() => {
        setSortingCollegesList(filteredColleges);
        filteringCollges();
    }, [filteredColleges, filteringCollges]);


    return (
        <>
            <div>

                <h2>&nbsp;
                    {/* filterListTitle */}
                    <span>Top {selected} Colleges in India 2023</span>
                </h2>
                {/* filtersort */}
                <div className='text-right mt-1 font-medium'>
                    <select name="sorting" id="sorting" className='py-2 px-3 mr-10 border rounded 
                    transition-all duration-200 ease-in
                    border-blue-600 outline-none font-medium'
                        value={sortingValue} onChange={(e) => {
                            setSortingValue(e.target.value);
                        }}>
                        <option defaultValue=''>Sort By</option>
                        <option value="name_asc">A to Z</option>
                        <option value="name_desc">Z to A</option>
                    </select>
                </div>
            </div>
            <div>
                {/* allcolleges and for each college one section */}
                {
                    isLoading && <div className='flex w-full items-center p-2'>
                        <div className="w-[40%] h-full overflow-hidden flex"> <Skeleton width={'14rem'} height={'7rem'} /> </div>
                        <div className="w-[80%]">
                            <Skeleton width={'100%'} height={'6rem'} />
                            <Skeleton width={'100%'} height={'1rem'} />
                        </div>
                        <div className='flex flex-col justify-center px-4 w-[30%] gap-3 '>
                            <Skeleton width={'80%'} height={'2rem'} />
                            <Skeleton width={'80%'} height={'2rem'} />
                        </div>
                    </div>
                }
                {
                    sortingCollegesList.map(college =>
                        <section key={college.id} className='p-0 my-7 border relative hover:shadow-md  hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-out'>
                            <div className='flex w-full py-3 px-2 items-center flex-col sm:flex-row '>
                                <figure className='md:w-[40%] w-full h-full overflow-hidden flex bg-black'>
                                    <Image src={college.details?.collegePhoto ?? Collegephoto} width={250} height={200} alt='' className='h-44 w-full' />
                                </figure>



                                {/* Details */}
                                <div className='md:w-[80%] pt-4 pl-2'>
                                    {/* CollegeDetails */}
                                    <div className='flex flex-col gap-2 border-b-2 px-3 pb-3'>
                                        <Link href={`/colleges/${college.id}`}>
                                            <h2>{college.collegeName.toUpperCase()}</h2>
                                        </Link>
                                        <div className='flex items-center gap-3'>
                                            <GrLocation />
                                            <span>
                                                {college.details?.address.fullAddrs.toLocaleUpperCase()}
                                            </span>
                                        </div>
                                    </div>
                                    {/* infoExtra */}
                                    <div className='px-3'>
                                        <div className='flex items-center gap-2'>
                                            <MdOutlinePersonOutline size={'1.2rem'} />
                                            <span className=''>
                                                {college.ownership.toUpperCase()}
                                            </span>
                                        </div>
                                        <div className='justify-between py-3 hidden md:flex'>
                                            <span>{college.description}</span>
                                            <span>+56 Courses</span>
                                        </div>
                                    </div>
                                </div>
                                {/* listaction */}
                                <div className='flex md:flex-col justify-center px-4 md:w-[30%] mt-3 md:mt-0 gap-3 '>
                                   
                                    <button onClick={() => toggleModal(college.collegeName)} className='bg-blue-600 rounded text-white py-2 px-4 text-center shadow-md shadow-blue-400'>Apply Now</button>

                                    <Link href={'/contact'} className='border shadow shadow-black/50 rounded py-2 px-4 text-center flex items-center gap-2'>
                                        <IoCall />
                                        <span>
                                            Contact
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </section>)
                }
            </div>
        </>
    )
}

export default CollegeList