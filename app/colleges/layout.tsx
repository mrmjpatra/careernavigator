import { CollegeFilterProvider } from "@/components/colleges/FilterContext";
import React from "react";
export const metadata = {
  title: "Colleges",
  description: "Choose the best college",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CollegeFilterProvider>{children}</CollegeFilterProvider>;
}
