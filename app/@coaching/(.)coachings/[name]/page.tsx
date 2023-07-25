import CoachingDetails from "@/components/Coaching/CoachingDetails";
import Modal from "@/components/Modal";
import { getFormattedString } from "@/utils/functions";
import axios from "axios";

const getCollegeId = async (coachingName: string) => {
  try {
    const { data } = await axios.get(`${process.env.HOST}/api/coaching/name/${getFormattedString(coachingName)}`);
    return data.message.id;
  } catch (error) {
    return null
  }
}

const CoachingModal = async ({ params }: { params: { name: string } }) => {
  const id = await getCollegeId(params.name);
  if (!id) {
    return(
      <>
      </>
    )
  }
  return (
    <Modal>
      <CoachingDetails id={id} />
    </Modal>
  );
};

export default CoachingModal;
