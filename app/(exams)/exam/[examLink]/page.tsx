import axios from "axios";
import { Poppins } from 'next/font/google';
import { convertWord, getFormattedString } from "@/utils/functions";
import ExamHomeComp from "@/components/Exam/ExamHomeComp";
import { BsFillEmojiFrownFill } from "react-icons/bs";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

const getMetaData = async (examLink: string) => {
  const { data } = await axios.get(`${process.env.HOST}/api/exam/name/${getFormattedString(examLink)}`);
  const name = convertWord(data.message.examName);
  const desc: string = data.message.overview ? data.message.overview.overView : 'Over View of' + name;
  const description = desc.replace(/<[^>]+>/g, '');
  return { name, description };
}
export async function generateMetadata({ params }: { params: { examLink: string } }) {
  try {
    const { name, description } = await getMetaData(params.examLink);
    return { title: name, description };
  } catch (error) {
    return {
      title: 'Exam',
      description: 'Exams'
    }
  }
}

const getExamId = async (examLink: string) => {
  try {
    const { data } = await axios.get(`${process.env.HOST}/api/exam/name/${getFormattedString(examLink)}`);
    return data.message.id;
  } catch (error) {
    return null
  }
}

type fetchExamList = {
  id: string
  examName: string
  examLink: string
  createdAt: string
  updatedAt: string
}

// export async function generateStaticParams() {
//   try {
//     const res = await fetch(`${process.env.HOST}/api/exam/`);
//     const data = await res.json();
//     const examdata: fetchExamList[] = data.message;
//     return examdata.map(d => ({
//       examLink: d.examLink
//     }))
//   } catch (error) {
//     return {
//       examLink: '/exam'
//     }
//   }
// }


const ExamPage = async ({ params }: { params: { examLink: string } }) => {
  const examId = await getExamId(params.examLink);
  if (!examId) {
    return (
      <div className="px-4 py-5 flex flex-col space-y-5 justify-center items-center">
        <div>
          <span className="bg-red-700 text-white rounded-full p-4 flex">
            <BsFillEmojiFrownFill size={'2rem'} />
          </span>
        </div>
        <h1 className={`text-red-900 text-4xl font-bold ${poppins.className}`}>No Details Found</h1>
      </div>
    )
  }
  return (
    <div className="px-4 py-5">
      <h1 className={`text-2xl font-bold text-blue-600 px-3 pb-5 ${poppins.className}`}>
        {getFormattedString(params.examLink).toUpperCase()} Details Exam </h1>

      <ExamHomeComp examId={examId} />

    </div>
  );
};

export default ExamPage;
