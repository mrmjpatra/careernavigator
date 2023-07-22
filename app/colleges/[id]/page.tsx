import CollegeDetailedPage from "@/components/CollegeDetails/CollegeDetails";
import { convertWord } from "@/utils/functions";
import axios from "axios";

const getCollegeName = async (id: string) => {
  const { data } = await axios.get(`${process.env.HOST}/api/college/all/${id}`);
  const name = convertWord(data.message.collegeName)
  const desc: string = data.message.description;
  const description = desc.replace(/<[^>]+>/g, '');
  return { name, description };
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const {name,description} = await getCollegeName(params.id);
  return { title: name,description };
}

const CollegePage = async ({ params }: { params: { id: string } }) => {
  return (
    <CollegeDetailedPage id={params.id} />
  );
};

export default CollegePage;
