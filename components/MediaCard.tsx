"use client";

import Link from "next/link";
import Image from "next/image";

interface MediaCardProps {
    title: string;
    image: string;
    rating: number | null;
    count: number;
    status: string;
    genres: string[];
    type: "anime" | "manga";
}

export default function MediaCard({
    title,
    image,
    rating,
    count,
    status,
    genres,
    type,
}: MediaCardProps) {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    const countLabel = `${count} ${type === "anime" ? "episodes" : "chapters"}`
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={`/${type}/${slug}`}>
                <div className="relative h-60 w-full">
                    <Image src={image} alt={title} fill className="object-cover"/>
                    {rating !== null && (
                        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">
                            {rating.toFixed(1)}
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-lg truncate">{title}</h3>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-600">{countLabel}</span>
                        <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
                            {status}
                        </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                        {genres.slice(0,3).map((genre) => (
                            <span
                                key={genre}
                                className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                            >
                                {genre}
                            </span>
                        ))}
                        {genres.length > 3 && (
                            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                                +{genres.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    )
}