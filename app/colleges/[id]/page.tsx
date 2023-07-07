import CollegeDetailedPage from "@/components/CollegeDetails/CollegeDetails";

const CollegePage = async({ params }: {params: { id: string}}) => {
  return (
    <CollegeDetailedPage id={params.id} />
  );
};

export default CollegePage;
