import React from "react";


export const metadata = {
    title: "Coachings",
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
