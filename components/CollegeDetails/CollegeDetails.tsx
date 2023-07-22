'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Overview from "../colleges/Overview";
import Courses from "../colleges/Courses";
import Review from "../colleges/Review";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import { fetchAllCollegeDataType } from "@/app/colleges";
import { convertWord } from "@/utils/functions";
import { Poppins } from "next/font/google";
const poppins=Poppins({subsets:['latin'],weight:['400','600']})


const fetchData = async (id: string) => {
  const { data } = await axios.get(`${process.env.HOST}/api/college/alldetails/${id}`);
  const details: fetchAllCollegeDataType = data.message;
  return details;
}

const CollegeDetailedPage = ({ id }: { id: string }) => {
  const [activeTab, setActiveTab] = useState(1);
  const { isLoading, error, data: collegeDetails } = useQuery({
    queryKey: ['individualCollegeDetails'],
    queryFn: () => fetchData(id)
  });
  return (
    <div>
      <div>
        {/* Head */}
        <div className="relative">
          <div className="relative h-72  overflow-hidden">
            {
              collegeDetails?.collegePhoto.downloadUrl ? <Image src={collegeDetails?.collegePhoto?.downloadUrl} alt="college banner"
                width={'100'} height={'100'} className="w-full h-full"  /> : <Skeleton height={'20rem'} style={{ width: '100%' }} />
            }
          </div>
          <div className="bg-black/50 absolute top-0 left-0 h-full w-full">
            <div className="absolute md:top-1/4 md:left-[10%] top-[20%] left-[5%]">
              <h1 className={`text-white text-4xl ${poppins.className}`} >{convertWord(collegeDetails?.collegeName)}</h1>
              <div className="flex my-5 gap-2 items-center">
                <span className="text-white flex bg-blue-600 rounded-full p-1 md:p-3">
                  <MdOutlinePersonOutline size={'1.5rem'} color="white" className=" text-white" />
                </span>
                <span className="text-white">{convertWord(collegeDetails?.ownership)}</span>
                <span className="text-white flex bg-blue-600 rounded-full p-1 md:p-3">
                  <FaLocationDot size={'1.5rem'} color="white" />
                </span>
                <span className="text-white">{convertWord(collegeDetails?.city)}({convertWord(collegeDetails?.state)})</span>
              </div>
            </div>
          </div>
        </div>
        {/* Middle */}

        {/* Tab */}
        <div>
          <ul className="flex md:x-14 mb-3">
            <li className={`${activeTab === 1 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} text-xl font-bold transition-all duration-300 ease-out block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(1)} >Overview</li>

            <li className={`${activeTab === 2 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} text-xl font-bold transition-all duration-200 ease-in  block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(2)}>Courses</li>

            <li className={`${activeTab === 3 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} text-xl font-bold transition-all duration-200 ease-in  block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(3)}>Reviews</li>
          </ul>
          <div className="mt-3 rounded-sm">
            {
              collegeDetails &&
              activeTab === 1 && <Overview
                id={collegeDetails?.id}
                collegeName={collegeDetails?.collegeName}
                description={JSON.parse(collegeDetails?.description)}
                state={collegeDetails?.state}
                city={collegeDetails?.city}
                campusSize={collegeDetails?.campusSize}
                facultyStrength={collegeDetails?.facultyStrength}
                studentStrength={collegeDetails?.studentStrength}
                ownership={collegeDetails?.ownership}
                collegePhoto={collegeDetails?.collegePhoto}
                bannerPhotos={collegeDetails?.bannerPhotos}
                address={collegeDetails?.address}
              />
            }

            {activeTab === 2 && <Courses name={collegeDetails?.collegeName} courses={collegeDetails?.courses} />}

            {activeTab === 3 && <Review reviews={collegeDetails?.reviews} />}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CollegeDetailedPage;
