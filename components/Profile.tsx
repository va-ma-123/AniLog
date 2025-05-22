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
            <div>
                <div>
                    <div>
                        <Image 
                            src={user.avatar}
                            alt={user.name}
                            fill
                        />
                    </div>
                    <div>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                        <div>
                            <div>
                                <span>{user.watchedAnime.length}</span>
                                <p>Anime</p>
                            </div>
                            <div>
                                <span>{user.readManga.length}</span>
                                <p>Manga</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <button
                        onClick={() => setActiveTab('anime')}
                    >
                        Anime List
                    </button>
                    <button
                        onClick={() => setActiveTab('manga')}
                    >
                        Manga List
                    </button>
                </div>
                <div>
                    {activeTab === 'anime' ? (
                        <div>
                            {allAnime.length > 0 ? (
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
                                <div>
                                    <p>
                                        You haven&apos;t added any anime to your list yet.
                                    </p>
                                    <Link href="/anime">
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
                                <div>
                                    <p>
                                        You haven&apos;t added any manga to your list yet.
                                    </p>
                                    <Link href="/manga">
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