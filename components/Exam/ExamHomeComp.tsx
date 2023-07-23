import { fetchExamDataType } from "@/app/(exams)/exam";
import MenuTab from "./MenuTab"

const fetchExamData = async (examId: string): Promise<fetchExamDataType> => {
  const res = await fetch(`${process.env.HOST}/api/exam/${examId}`);
  const data = await res.json();
  return data.message;
}

const ExamHomeComp = async ({ examId }: { examId: string }) => {
  const examData:fetchExamDataType = await fetchExamData(examId);
  return (
    <div>
      <MenuTab examData={examData}/>
    </div>
  )
}

export default ExamHomeComp