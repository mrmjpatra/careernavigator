'use client'
import Header from "@/components/Home/Header";
import HomeSwipper from "@/components/Home/HomeSwipper";
import TopCategories from "@/components/Home/TopCategories";



export default function Home() {

  return (
    <main className="bg-[#F2F6F9]">
      <section>
        <Header/>
        <HomeSwipper/>
        <TopCategories/>
      </section>
    </main>
  )
}
