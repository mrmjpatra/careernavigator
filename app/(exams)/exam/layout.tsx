import React from "react";


export const metadata = {
    title: "Exams",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>{children}</>
    );
}
