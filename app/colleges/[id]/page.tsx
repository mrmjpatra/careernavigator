import CollegeDetails from "@/components/PhotoDetails/CollegeDetails";
interface PhotoPageProps {
  params: {
    id: string;
  };
}
const CollegePage = async ({ params }: PhotoPageProps) => {
  return (
    <CollegeDetails />
  );
};

export default CollegePage;
