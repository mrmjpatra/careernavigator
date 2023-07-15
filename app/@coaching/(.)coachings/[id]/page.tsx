import CoachingDetails from "@/components/Coaching/CoachingDetails";
import Modal from "@/components/Modal";

const CoachingModal =  async({ params }: {params: { id: string}}) => {
    console.log(params.id)
  return (
    <Modal>
      <CoachingDetails id={params.id} />
    </Modal>
  );
};

export default CoachingModal;
