import CollegeDetailedPage from "@/components/CollegeDetails/CollegeDetails";
import { convertWord, getFormattedString } from "@/utils/functions";
import axios from "axios";

const getMetaData = async (collegeName: string) => {
  const { data } = await axios.get(`${process.env.HOST}/api/college/name/${getFormattedString(collegeName)}`);
  const name = convertWord(data.message.collegeName);
  const desc: string = data.message.description;
  const description = desc.replace(/<[^>]+>/g, '');
  return { name, description };
}

const getCollegeId = async (collegeName: string) => {
  const { data } = await axios.get(`${process.env.HOST}/api/college/name/${getFormattedString(collegeName)}`);
  return data.message.id;
}

export async function generateMetadata({ params }: { params: { name: string } }) {
  const { name, description } = await getMetaData(params.name);
  return { title: name, description };
}

const CollegePage = async ({ params }: { params: { name: string } }) => {
  const id = await getCollegeId(params.name)
  
  if (id) {
    return (
      <CollegeDetailedPage id={id} />
    );
  } else {
    return (
      <p>Loading....</p>
    )
  }

};

export default CollegePage;

