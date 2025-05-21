'use client';

import { animeData } from "@/lib/data/anime";
import { mangaData } from "@/lib/data/manga";
import { User } from "@/lib/data/user";
import { useState } from "react";

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

        </div>
    )
}