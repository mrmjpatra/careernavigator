'use client'
import MenuTab from "@/components/Exam/MenuTab";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  }, [examNameLoading, examNameError,examNameList,params.examName]);




  return (
    <div className="px-4 py-5">
      <h1 className="text-2xl font-bold text-blue-600 px-3 pb-5" style={{ fontFamily: 'Poppins' }}>{params.examName?.toUpperCase()} Details Exam </h1>
      {
        examId ? <MenuTab examId={examId} /> :<div className="border-8 border-gray-400 border-t-8 
        border-t-blue-600  rounded-full w-14 h-14 animate-spin"></div>
      }
    </div>
  );
};

export default ExamPage;
