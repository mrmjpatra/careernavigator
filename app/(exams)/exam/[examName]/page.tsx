'use client'
import MenuTab from "@/components/Exam/MenuTab";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsEmojiFrownFill } from "react-icons/bs";

type fetchExamsNameType = {
  id: string,
  examName: string
}
const fetchExamName = async (examId: string) => {
  const { data } = await axios.get(`${process.env.HOST}/api/exam/${examId}`);
  const details: { id: string, examName: string } = data.message;
  return details.id;
}
const fetchExamsNameList = async () => {
  const { data } = await axios.get(`${process.env.HOST}/api/exam`);
  const details: fetchExamsNameType[] = data.message;
  return details;
}

const ExamPage = ({ params }: { params: { examName: string } }) => {

  const searchParams = useSearchParams()
  const activeTab = searchParams.get('activeTab')

  const { isLoading: examNameLoading, error: examNameError, data: examNameList } = useQuery({
    queryKey: ['examNameList'],
    queryFn: () => fetchExamsNameList()
  });
  const [examId, setExamId] = useState('');

  useEffect(() => {
    const loadExamId = async () => {
      if (!examNameLoading && !examNameError) {
        const find = examNameList?.find(exam => exam.examName === params.examName);
        if (find) {
          const res = await fetchExamName(find.id);
          setExamId(res)
        }
      }
    }
    loadExamId();
  }, [examNameLoading, examNameError, examNameList, params.examName]);

  if (!examNameLoading && examId === '') {
    return (
      <div className="h-40 flex items-center justify-center">
        <span className="bg-blue-600 text-white p-4 rounded-full mr-4 shadow-md shadow-blue-300">
          <BsEmojiFrownFill size={'2rem'} />
        </span>
        <h1 className="text-2xl text-blue-500 font-bold text-center">Details Not Added</h1>
      </div>
    )
  }


  return (
    <div className="px-4 py-5">
      <h1 className="text-2xl font-bold text-blue-600 px-3 pb-5" style={{ fontFamily: 'Poppins' }}>{params.examName?.toUpperCase()} Details Exam </h1>
      {
        examId ? <MenuTab examId={examId} tab={Number(activeTab)!==0?Number(activeTab):1??1} /> : <div className="border-8 border-gray-400 border-t-8 
        border-t-blue-600  rounded-full w-14 h-14 animate-spin"></div>
      }
    </div>
  );
};

export default ExamPage;
