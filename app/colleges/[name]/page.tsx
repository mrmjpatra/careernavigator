import CollegeDetailedPage from "@/components/CollegeDetails/CollegeDetails";
import { convertWord, getFormattedString } from "@/utils/functions";
import axios from "axios";
import { Poppins } from "next/font/google";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { fetchAllCollegeDataType } from "..";
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

const getMetaData = async (collegeName: string) => {
  const { data } = await axios.get(`${process.env.HOST}/api/college/name/${getFormattedString(collegeName)}`);
  const name = convertWord(data.message.collegeName);
  const desc: string = data.message.description;
  const description = desc.replace(/<[^>]+>/g, '');
  return { name, description };
}

// const getCollegeId = async (collegeName: string) => {
//   try {
//     const { data } = await axios.get(`${process.env.HOST}/api/college/name/${getFormattedString(collegeName)}`);
//     return data.message.id;
//   } catch (error) {
//     return null
//   }
// }



export async function generateMetadata({ params }: { params: { name: string } }) {
  try {
    const { name, description } = await getMetaData(params.name);
    return { title: name, description };
  } catch (error) {
    return {
      title: 'Colleges',
      description: 'Colleges'
    }
  }
}

const getCollegeData = async (collegeName: string): Promise<fetchAllCollegeDataType | null> => {
  try {
    const res = await fetch(`${process.env.HOST}/api/college/alldetails/${getFormattedString(collegeName)}`, { next: { revalidate: 60 } });
    const data = await res.json();
    return data.message;
  } catch (error) {
    console.log("Error in fetching college data", error);
    return null;
  }
}

// export async function generateStaticParams() {
//   const res = await fetch(`${process.env.HOST}/api/college/details`,{next:{revalidate:60}});
//   const data = await res.json();
//   const collegeData: any[] = data.message;
//   return collegeData.map(d => ({
//     name: getFormattedString(d.collegeName, '-')
//   }))
// }

const CollegePage = async ({ params }: { params: { name: string } }) => {
  const collegeDetails: fetchAllCollegeDataType | null = await getCollegeData(params.name);

  if (!collegeDetails) {
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
    <CollegeDetailedPage collegeDetails={collegeDetails} />
  );

};

export default CollegePage;

