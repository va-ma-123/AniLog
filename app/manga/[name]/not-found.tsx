"use client";

import Link from "next/link";

export default function MangaNotFound() {
    return (
        <div className="max-w-4xl mx-auto p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Manga Not Found</h1>
            <p className="text-gray-600 mb-6">
                We couldn&apos;t find the manga you&apos;re looking for. It might have been removed or the name may have been mistyped.
            </p>
            <Link
                href="/manga"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
                Browse All Manga
            </Link>
        </div>
    );
};