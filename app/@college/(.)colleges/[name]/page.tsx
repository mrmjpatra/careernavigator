import { fetchAllCollegeDataType } from "@/app/colleges";
import CollegeDetailedPage from "@/components/CollegeDetails/CollegeDetails";
import Modal from "@/components/Modal";
import { getFormattedString } from "@/utils/functions";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

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
const CollegePageModal = async ({ params }: { params: { name: string } }) => {
  const collegeDetails: fetchAllCollegeDataType | null = await getCollegeData(params.name);
  return (
    <Modal>
      {
        !collegeDetails ? <div><h1>No Details Found</h1></div> :
          <CollegeDetailedPage collegeDetails={collegeDetails} />
      }
    </Modal>
  );
};

export default CollegePageModal;
