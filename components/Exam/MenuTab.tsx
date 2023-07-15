"use client";
import { useState } from "react";
import SwipperTab from "./SwipperTab";
import ReusableComp from "./ReusableComp";

const MenuTab = ({ examId }: { examId: string }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const scroll = (direction: string) => {
    const scrollContainer = document.querySelector(".overflow-x-scroll");
    if (scrollContainer) {
      scrollContainer.scrollLeft += direction === "left" ? -100 : 100;
    }
  };
  return (
    <div>
      <SwipperTab setActiveTab={setActiveTab} activeTab={activeTab} />

      <div className="px-4 py-5" style={{ fontFamily: "Hind" }}>
        {activeTab === 1 && <ReusableComp examId={examId} title="Overview" api="overview" property="overView" />}

        {activeTab === 2 && <ReusableComp examId={examId} title="Important Dates" api="important-date" property="importantDate" />}

        {activeTab === 3 && <ReusableComp examId={examId} title="Eligibility" api="eligibility" property="eligibility" />}

        {activeTab === 4 && <ReusableComp examId={examId} title="Application Form" api="application-form" property="applicationForm" />}

        {activeTab === 5 && <ReusableComp examId={examId} title=" Admit Card" api="admit-card" property="admitCard" />}

        {activeTab === 6 && <ReusableComp examId={examId} title="Exam Pattern" api="exam-pattern" property="examPattern" />}

        {activeTab === 7 && <ReusableComp examId={examId} title="Syllabus" api="syllabus" property="syllabus" />}

        {activeTab === 8 && <ReusableComp examId={examId} title="How to Prepare" api="how-to-prepare" property="howToPrepare" />}

        {activeTab === 9 && <ReusableComp examId={examId} title="Books" api="books" property="books" />}

        {activeTab === 10 && <ReusableComp examId={examId} title="Previous Year Question Paper" api="previous-year-questions" property="prevYearQues" />}

        {activeTab === 11 && <ReusableComp examId={examId} title="Result" api="result" property="result" />}

        {activeTab === 12 && <ReusableComp examId={examId} title="Selection Process" api="selection-process" property="selectionProcess" />}

        {activeTab === 13 && <ReusableComp examId={examId} title="Answer Key" api="answerkey" property="answerKey" />}
      </div>
    </div>
  );
};

export default MenuTab;
