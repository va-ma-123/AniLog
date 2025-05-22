"use client";

import Profile from "@/components/Profile";
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // if not authenticated, and not loading, redirect back to the login page
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  // when checking for authentication, show loading
  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto p-8 text-center">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  // If not authenticated, display message
  if (!isAuthenticated || !user) {
    return (
      <div className="max-w-5xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-6">You need to log in to view your profile.</p>
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Log In
        </Link>
      </div>
    );
  }

  // If everything is fine, display the profile component
  return <Profile user={user} />;
}