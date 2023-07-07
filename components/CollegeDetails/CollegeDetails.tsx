'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Overview from "../colleges/Overview";
import Courses from "../colleges/Courses";
import Review from "../colleges/Review";
import Admission from "../colleges/Admission";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CollegeDetails } from "@/utils/collegesFormData";
import Skeleton from "react-loading-skeleton";

export const convertWord = (name: string | undefined) => {
  if (name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}
const CollegeDetailedPage = ({ id }: { id: string }) => {
  const [activeTab, setActiveTab] = useState(1);
  const { isLoading, error, data: collegeDetails } = useQuery({
    queryKey: ['collegeDetails'],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3000/api/college/colleges/${id}`);
      const details: CollegeDetails = data.data;
      return details;
    }
  });
  return (
    <div>
      <div>
        {/* Head */}
        <div className="relative">
          <div className="relative h-72  overflow-hidden">
            {
              collegeDetails?.details?.collegePhoto ? <Image src={collegeDetails?.details?.collegePhoto} alt="college banner"
                fill />:<Skeleton/>
            }
          </div>
          <div className="bg-black/50 absolute top-0 left-0 h-full w-full">
            <div className="absolute top-1/2 left-[10%]">
              <h1 className="text-white text-4xl" style={{ fontFamily: 'Poppins' }} >{convertWord(collegeDetails?.collegeName)}</h1>
              <div className="flex my-5 gap-2 items-center">
                <span className="text-white flex bg-blue-600 rounded-full p-3">
                  <MdOutlinePersonOutline size={'1.5rem'} color="white" className=" text-white" />
                </span>
                <span className="text-white">{convertWord(collegeDetails?.ownership)}</span>
                <span className="text-white flex bg-blue-600 rounded-full p-3">
                  <FaLocationDot size={'1.5rem'} color="white" className="" />
                </span>
                <span className="text-white">{convertWord(collegeDetails?.city)}({convertWord(collegeDetails?.state)})</span>
              </div>
            </div>
          </div>
        </div>
        {/* Middle */}
        <div>
          {/* Tab */}
          <div>
            <ul className="flex px-14 mb-3">
              <li className={`${activeTab === 1 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} transition-all duration-300 ease-out block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(1)} >Overview</li>
              <li className={`${activeTab === 2 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} transition-all duration-200 ease-in  block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(2)}>Courses</li>
              <li className={`${activeTab === 3 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} transition-all duration-200 ease-in  block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(3)}>Admission</li>
              <li className={`${activeTab === 4 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} transition-all duration-200 ease-in  block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(4)}>Reviews</li>
            </ul>
            <div className="p-3 px-8 mt-3 rounded-sm">
              {activeTab === 1 && <Overview description={collegeDetails?.description} details={collegeDetails?.details} />}
              {activeTab === 2 && <Courses />}
              {activeTab === 3 && <Admission />}
              {activeTab === 4 && <Review />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailedPage;
