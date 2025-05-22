"use client";

import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    // if already logged in, then send to homepage
    useEffect(() => {
        if(isAuthenticated) {
            router.push("/");
        }
    }, [isAuthenticated, router]);

    // loading display
    if (isLoading) {
        return (
            <div className="max-w-5xl mx-auto p-8 text-center">
                <p className="text-gray-600">Loading...</p>
            </div>
        );
    }

    // login form if not authenticated
    return (
        <div className="max-w-5xl mx-auto p-8">
            <AuthForm type="login" />
            <div className="text-center mt-6">
                <p className="text-gray-600">
                    Don&apos;t have an account?{' '}
                    <Link href="/register" className="text-blue-600 hover:underline">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
}