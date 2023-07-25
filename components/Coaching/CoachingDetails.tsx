"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import { CgList } from "react-icons/cg";
import CoachingOverView from "./CoachingOverView";
import { FetchIndividualCoachingData } from "@/app/coachings";
import Review from "../colleges/Review";
import { convertWord } from "@/utils/functions";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })


const fetch = async (id: string) => {
  const { data } = await axios.get(`${process.env.HOST}/api/coaching/${id}`);
  const details: FetchIndividualCoachingData = data.message;
  return details;
}

const CoachingDetails = ({ id }: { id: string }) => {
  const [activeTab, setActiveTab] = useState(1);
  const { isLoading, error, data: SelectedCoachingData } = useQuery({
    queryKey: ["selectedCoachingData"],
    queryFn: () => fetch(id),
  });
  return (
    <div>
      <div className="relative">
        <div className="relative h-72  overflow-hidden">
          {SelectedCoachingData ? (
            <Image
              src={SelectedCoachingData?.coachingPhoto.downloadUrl}
              alt="college banner"
              loading="eager"
              fill
            />
          ) : (
            <Skeleton height={"20rem"} />
          )}
        </div>
        <div className="bg-black/50 absolute top-0 left-0 h-full w-full">
          <div className="absolute md:top-1/4 md:left-[10%] top-[20%] left-[5%]">
            <h1
              className={`text-white text-4xl ${poppins.className}`}
            >
              {convertWord(SelectedCoachingData?.coachingName)}
            </h1>
            <div className="flex my-5 gap-2 items-center">
              <span className="bg-blue-600 p-2 text-white rounded-full">
                <CgList size={"1.2rem"} />
              </span>
              <ul className="flex gap-1 font-medium text-orange-500">
                {SelectedCoachingData &&
                  SelectedCoachingData.providing.map((p) => (
                    <li key={p} className="text-white">
                      {convertWord(p)},
                    </li>
                  ))}
              </ul>
              <span className="text-white flex bg-blue-600 rounded-full p-1 md:p-3">
                <FaLocationDot size={"1.5rem"} color="white" />
              </span>
              <span className="text-white">
                {convertWord(SelectedCoachingData?.city)}(
                {convertWord(SelectedCoachingData?.state)})
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Middle */}
      <div>
        <ul className="flex md:x-14 mb-3">
          <li className={`${activeTab === 1 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} text-xl font-bold transition-all duration-300 ease-out block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(1)} >Overview</li>
          <li className={`${activeTab === 2 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} text-xl font-bold transition-all duration-200 ease-in  block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(2)}>Reviews</li>
        </ul>
        <div className="mt-3 rounded-sm">
          {
            activeTab === 1 && SelectedCoachingData && <CoachingOverView {...SelectedCoachingData} />
          }

          {activeTab === 2 && <Review reviews={SelectedCoachingData?.CoachingReviews} />}
        </div>
      </div>
    </div>
  );
};

export default CoachingDetails;
