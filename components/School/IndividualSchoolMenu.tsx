'use client'

import { useState } from "react";
import SchoolOverView from "./OverView";
import Review from "../colleges/Review";
import { fetchIndividualSchoolData } from "@/app/schools";

const IndividualSchoolMenu = ({ schoolData }: { schoolData: fetchIndividualSchoolData }) => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div>
            <ul className="flex md:x-14 mb-3">
                <li className={`${activeTab === 1 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} text-xl font-bold transition-all duration-300 ease-out block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(1)} >Overview</li>
                <li className={`${activeTab === 2 ? 'border-b-2 border-blue-700 rounded shadow-md shadow-blue' : 'border-b-0 rounded-none shadow-none'} text-xl font-bold transition-all duration-200 ease-in  block py-3 px-6  cursor-pointer mr-3 bg-white`} onClick={() => setActiveTab(2)}>Reviews</li>
            </ul>
            <div className="mt-3 rounded-sm">
                {activeTab === 1 && <SchoolOverView {...schoolData} />}
                {activeTab === 2 && <Review reviews={schoolData?.SchoolReviews} />}
            </div>
        </div>
    )
}

export default IndividualSchoolMenu