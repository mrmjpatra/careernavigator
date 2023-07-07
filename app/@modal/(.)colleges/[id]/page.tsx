import CollegeDetailedPage from "@/components/CollegeDetails/CollegeDetails";
import Modal from "@/components/Modal";

const CollegePageModal = async({ params }: {params: { id: string}}) => {

  return (
    <Modal>
      <CollegeDetailedPage id={params.id}/>
    </Modal>
  );
};

export default CollegePageModal;
