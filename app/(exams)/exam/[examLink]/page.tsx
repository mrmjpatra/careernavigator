import axios from "axios";
import { Poppins } from 'next/font/google';
import { convertWord, getFormattedString } from "@/utils/functions";
import ExamHomeComp from "@/components/Exam/ExamHomeComp";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

const getMetaData = async (examLink: string) => {
  const { data } = await axios.get(`${process.env.HOST}/api/exam/name/${getFormattedString(examLink)}`);
  const name = convertWord(data.message.examName);
  const desc: string = data.message.overview ? data.message.overview.overView : 'Over View of' + name;
  const description = desc.replace(/<[^>]+>/g, '');
  return { name, description };
}
export async function generateMetadata({ params }: { params: { examLink: string } }) {
  const { name, description } = await getMetaData(params.examLink);
  return { title: name, description };
}

const getExamId = async (examLink: string) => {
  const { data } = await axios.get(`${process.env.HOST}/api/exam/name/${getFormattedString(examLink)}`);
  return data.message.id;
}

type fetchExamList = {
  id: string
  examName: string
  examLink:string
  createdAt: string
  updatedAt: string
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.HOST}/api/exam/`);
  const data = await res.json();
  const examdata: fetchExamList[] = data.message;
  return examdata.map(d => ({
    examLink: d.examLink
  }))
}


const ExamPage = async ({ params }: { params: { examLink: string } }) => {
  const examId = await getExamId(params.examLink);

  return (
    <div className="px-4 py-5">
      <h1 className={`text-2xl font-bold text-blue-600 px-3 pb-5 ${poppins.className}`}>
        {getFormattedString(params.examLink).toUpperCase()} Details Exam </h1>

      <ExamHomeComp examId={examId} />

    </div>
  );
};

export default ExamPage;
