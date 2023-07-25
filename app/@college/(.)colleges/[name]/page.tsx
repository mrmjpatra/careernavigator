import CollegeDetailedPage from "@/components/CollegeDetails/CollegeDetails";
import Modal from "@/components/Modal";
import { getFormattedString } from "@/utils/functions";
import axios from "axios";
const getCollegeId = async (collegeName: string) => {
  try {
    const { data } = await axios.get(`${process.env.HOST}/api/college/name/${getFormattedString(collegeName)}`);
    return data.message.id;
  } catch (error) {
    return null
  }
}
const CollegePageModal = async ({ params }: { params: { name: string } }) => {
  const id = await getCollegeId(params.name);
  if (!id) {
    return (
      <>
      </>
    )
  }
  return (
    <Modal>
      <CollegeDetailedPage id={id} />
    </Modal>
  );
};

export default CollegePageModal;
