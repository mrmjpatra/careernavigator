"use client";
import { useEffect, useState } from "react";
import SwipperTab from "./SwipperTab";
import ReusableComp from "./ReusableComp";
import { Hind } from "next/font/google";
import { fetchExamDataType } from "@/app/(exams)/exam";
import { useSearchParams } from "next/navigation";
const hind = Hind({ subsets: ['latin'], weight: ['400', '600'] })

const MenuTab = ({ examData }: { examData: fetchExamDataType }) => {
  const searchParam = useSearchParams();
  const tab = searchParam.get('activeTab')
  const [activeTab, setActiveTab] = useState<number>(1);
  useEffect(() => {
    if (tab) {
      setActiveTab(Number(tab));
    }
  }, [tab]);
  return (
    <div>
      <SwipperTab setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className={`px-4 py-5 ${hind.className}`}>
        {activeTab === 1 && <ReusableComp desc={examData.overview?.overView ?? ''} />}
        {activeTab === 2 && <ReusableComp desc={examData.importantDate?.importantDate ?? ''} />}
        {activeTab === 3 && <ReusableComp desc={examData.eligibility?.eligibility ?? ''} />}
        {activeTab === 4 && <ReusableComp desc={examData.applicationForm?.applicationForm ?? ''} />}
        {activeTab === 5 && <ReusableComp desc={examData.admitCard?.admitCard ?? ''} />}
        {activeTab === 6 && <ReusableComp desc={examData.examPattern?.examPattern ?? ''} />}
        {activeTab === 7 && <ReusableComp desc={examData.syllabus?.syllabus ?? ''} />}
        {activeTab === 8 && <ReusableComp desc={examData.howToPrepare?.howToPrepare ?? ''} />}
        {activeTab === 9 && <ReusableComp desc={examData.books?.books ?? ''} />}
        {activeTab === 10 && <ReusableComp desc={examData.prevYearQues?.prevYearQues ?? ''} />}
        {activeTab === 11 && <ReusableComp desc={examData.result?.result ?? ''} />}
        {activeTab === 12 && <ReusableComp desc={examData.selectionProcess?.selectionProcess ?? ''} />}
        {activeTab === 13 && <ReusableComp desc={examData.answerKey?.answerKey ?? ''} />}
      </div>
    </div>
  );
};

export default MenuTab;
