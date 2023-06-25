'use client'
import Header from "@/components/Home/Header";
import NavigationBar from "@/components/NavigationBar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setIsOpen } from "@/redux/navbar/slice.nav";
import { useState } from "react";


export default function Home() {

  return (
    <main className="bg-[#F2F6F9]">
      <section>
        <Header/>
      </section>
    </main>
  )
}
