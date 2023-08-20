import ExploreSchoolBoard from "@/components/Home/ExploreSchoolBoard";
import Header from "@/components/Home/Header";
import TopCategories from "@/components/Home/TopCategories";
import dynamic from "next/dynamic";
const HomeSwipper = dynamic(() => import('@/components/Home/HomeSwipper'));
const FeaturedCollege = dynamic(() => import('@/components/Home/FeaturedCollege'));
export default function Home() {
  return (
    <main className="bg-[#F2F6F9]">
      <section>
        {/* <Header/>
        <HomeSwipper/>
        <TopCategories/>
        <FeaturedCollege/>
        <ExploreSchoolBoard/> */}
      </section>
    </main>
  )
}
