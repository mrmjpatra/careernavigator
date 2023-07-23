import CoachingDetails from "@/components/Coaching/CoachingDetails";
import Modal from "@/components/Modal";
import { getFormattedString } from "@/utils/functions";
import axios from "axios";

const getCollegeId = async (coachingName: string) => {
  const { data } = await axios.get(`${process.env.HOST}/api/coaching/name/${getFormattedString(coachingName)}`);
  return data.message.id;
}

const CoachingModal = async ({ params }: { params: { name: string } }) => {
  const id = await getCollegeId(params.name)
  return (
    <Modal>
      <CoachingDetails id={id} />
    </Modal>
  );
};

export default CoachingModal;
