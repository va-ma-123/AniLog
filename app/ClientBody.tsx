"use client";

import NavBar from "@/components/NavBar";
import { AuthProvider } from "@/lib/context/AuthContext";
import { useEffect } from "react";


export default function ClientBody({
    children
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        document.body.className = "antialiased bg-gray-50 min-h-screen";
    }, []);

    return (
        <AuthProvider>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <main className="flex-grow">
                    {children}
                </main>
            </div>
        </AuthProvider>
    )
}