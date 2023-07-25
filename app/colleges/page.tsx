import CollegeHome from "@/components/colleges/CollegeHome";
import { fetchCollegeDataWithCourse, fetchDegree, fetchSpecialization, fetchStream } from "@/lib/helper-fetch";
import { sortCategory } from "@/utils/functions";


const CollegePage = async () => {
  const degrees = fetchDegree();
  const streams = fetchStream();
  const specializations = fetchSpecialization();
  // const colleges = fetchCollegeDataWithCourse();
  //Promise All
  const [degreeList, streamList, specializationList] = await Promise.all([degrees, streams, specializations]);
  //sorting the list
  const sortedDegreeList = sortCategory(degreeList ?? []);
  const sortedStreamList = sortCategory(streamList ?? []);
  const sortedSpecializationList = sortCategory(specializationList ?? []);
  return (
    <>
      <CollegeHome
        sortedDegreeList={sortedDegreeList}
        sortedStreamList={sortedStreamList}
        sortedSpecializationList={sortedSpecializationList}
      />
    </>
  )
}

export default CollegePage