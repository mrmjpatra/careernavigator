'use client'
import Image from "next/image";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { fetchAllCollegeDataType } from "@/app/colleges";
import { convertWord } from "@/utils/functions";
import { Poppins } from "next/font/google";
import IndividualCollegeTab from "../colleges/IndividualCollegeTab";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })


const fetchData = async (id: string) => {
  const data = await fetch(`${process.env.HOST}/api/college/alldetails/${id}`);
  const details = await data.json();
  return details.message;
}

const CollegeDetailedPage = async ({ id }: { id: string }) => {
  const collegeDetails: fetchAllCollegeDataType = await fetchData(id);
  return (
    <div>
      <div>
        {/* Head */}
        <div className="relative">
          <div className="relative h-72  overflow-hidden">
            <Image src={collegeDetails?.collegePhoto?.downloadUrl} alt="college banner"
              width={'200'} height={'100'} className="w-full h-full object-cover" loading="eager" />
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
        <IndividualCollegeTab collegeDetails={collegeDetails} />

      </div>
    </div>
  );
};

export default CollegeDetailedPage;
