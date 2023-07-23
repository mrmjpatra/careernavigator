import CollegeDetailedPage from "@/components/CollegeDetails/CollegeDetails";
import Modal from "@/components/Modal";
import { getFormattedString } from "@/utils/functions";
import axios from "axios";
const getCollegeId = async (collegeName: string) => {
  const { data } = await axios.get(`${process.env.HOST}/api/college/name/${getFormattedString(collegeName)}`);
  return data.message.id;
}
const CollegePageModal = async({ params }: {params: { name: string}}) => {
  const id = await getCollegeId(params.name)
  return (
    <Modal>
      <CollegeDetailedPage id={id}/>
    </Modal>
  );
};

export default CollegePageModal;
