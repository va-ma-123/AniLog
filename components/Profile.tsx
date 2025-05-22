'use client';

import { animeData } from "@/lib/data/anime";
import { mangaData } from "@/lib/data/manga";
import { User } from "@/lib/data/user";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProfileProps {
    user: User;
}

export default function Profile ({ user }: ProfileProps) {
    const [activeTab, setActiveTab] = useState<'anime' | 'manga'>('anime');

    const allAnime = user.watchedAnime.map(item => {
        const animeDetails = animeData.find(anime => anime.id === item.animeId);
        return {
            ...item,
            details: animeDetails,
        };
    }).filter(item => item.details !== undefined);

    const allManga = user.readManga.map(item => {
        const mangaDetails = mangaData.find(manga => manga.id === item.mangaId);
        return {
            ...item,
            details: mangaDetails,
        };
    }).filter(item => item.details !== undefined);

    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-6 m-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-24 h-24 relative">
                        <Image 
                            src={user.avatar}
                            alt={user.name}
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{user.name}</h1>
                        <p className="text-gray-600">{user.email}</p>
                        <div className="flex mt-4 gap-4">
                            <div>
                                <span className="text-lg font-bold">{user.watchedAnime.length}</span>
                                <p className="text-sm text-gray-600">Anime</p>
                            </div>
                            <div>
                                <span className="text-lg font-bold">{user.readManga.length}</span>
                                <p className="text-sm text-gray-600">Manga</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex border-b">
                    <button
                        className={`py-3 px-6 font-medium ${
                            activeTab === 'anime' ? 'bg-blue-600 text-white' : 'text-gray-700'
                        }`}
                        onClick={() => setActiveTab('anime')}
                    >
                        Anime List
                    </button>
                    <button
                        className={`py-3 px-6 font-medium ${
                            activeTab === 'manga' ? 'bg-blue-600 text-white' : 'text-gray-700'
                        }`}
                        onClick={() => setActiveTab('manga')}
                    >
                        Manga List
                    </button>
                </div>
                <div className="p-4">
                    {activeTab === 'anime' ? (
                        <div>
                            {allAnime.length > 0 ? (
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="">Title</th>
                                                <th className="">Progress</th>
                                                <th className="">Status</th>
                                                <th className="">My Rating (1-10)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allAnime.map(item => item.details && (
                                                <tr key={item.animeId}>
                                                    <td>
                                                        <Link href={`/anime/${item.details.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                                            <div>
                                                                <Image 
                                                                    src={item.details.image}
                                                                    alt={item.details.title}
                                                                    fill
                                                                />
                                                            </div>
                                                            <span>{item.details.title}</span>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        {item.lastEpisode} / {item.details.episodes}
                                                    </td>
                                                    <td>
                                                        <span>
                                                            {item.status}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <span>
                                                                {item.userRating !== null ? item.userRating.toFixed(0) : '-'}
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center p-8">
                                    <p className="text-gray-600">
                                        You haven&apos;t added any anime to your list yet.
                                    </p>
                                    <Link href="/anime" className="mt-2 inline-block text-blue-600 hover:underline">
                                        Browse Anime
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            {allManga.length > 0 ? (
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Progress</th>
                                                <th>Status</th>
                                                <th>My Rating (1-10)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allManga.map(item => item.details && (
                                                <tr key={item.mangaId}>
                                                    <td>
                                                        <Link href={`/manga/${item.details.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                                            <div>
                                                                <Image 
                                                                    src={item.details.image}
                                                                    alt={item.details.title}
                                                                    fill
                                                                />
                                                            </div>
                                                            <span>{item.details.title}</span>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        {item.lastChapter} / {item.details.chapters}
                                                    </td>
                                                    <td>
                                                        <span>
                                                            {item.status}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <span>
                                                                {item.userRating !== null ? item.userRating.toFixed(0) : '-'}
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center p-8">
                                    <p className="text-gray-600">
                                        You haven&apos;t added any manga to your list yet.
                                    </p>
                                    <Link href="/manga" className="mt-2 inline-block text-blue-600 hover:underline">
                                        Browse Manga
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}