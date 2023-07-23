import CoachingDetails from '@/components/Coaching/CoachingDetails'
import { convertWord, getFormattedString } from '@/utils/functions';
import axios from 'axios';

const getMetaData = async (coachingName: string) => {
    const { data } = await axios.get(`${process.env.HOST}/api/coaching/name/${getFormattedString(coachingName)}`);
    const name = convertWord(data.message.coachingName);
    const desc: string = data.message.description;
    const description = desc.replace(/<[^>]+>/g, '');
    return { name, description };
  }
  
  const getCollegeId = async (coachingName: string) => {
    const { data } = await axios.get(`${process.env.HOST}/api/coaching/name/${getFormattedString(coachingName)}`);
    return data.message.id;
  }
  
  export async function generateMetadata({ params }: { params: { name: string } }) {
    const { name, description } = await getMetaData(params.name);
    return { title: name, description };
  }

const SelectedCoachingPage = async({ params }: { params: { name: string } }) => {
    const id = await getCollegeId(params.name)
    return (
        <div>
            <CoachingDetails id={id} />
        </div>
    )
}

export default SelectedCoachingPage