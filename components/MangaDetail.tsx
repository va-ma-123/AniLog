"use client";

import { Manga } from "@/lib/data/manga";
import { useState } from "react";
import Image from "next/image";

interface MangaDetailsProps {
    manga: Manga;
}

export default function MangaDetail({ manga }: MangaDetailsProps) {
    const [userRating, setUserRating] = useState<number | null>(null);
    const [readStatus, setReadStatus] = useState<string | null>(null);
    const [chaptersRead, setChaptersRead] = useState<number>(0);
    const [isLoggedIn] = useState(false);
    const [favoriteCharacter, setFavoriteCharacter] = useState<string>('');
    const [favoriteScene, setFavoriteScene] = useState<string>('');

    const handleRatingChange = (rating: number) => {
        if(!isLoggedIn) {
            alert('Please log in to rate manga');
            return;
        }
        setUserRating(rating);
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setReadStatus(e.target.value);
    };

    const handleChaptersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value >= 0 && value <= manga.chapters) {
            setChaptersRead(value);
        }
    };

    const handleSave = () => {
        if(!isLoggedIn) {
            alert('Please log in to save progress');
            return;
        }

        if(!userRating) {
            alert('Please provide a rating (1-10) before saving');
            return;
        }

        const ratingData = {
            mangaId: manga.id,
            userRating,
            status: readStatus || 'Reading',
            lastChapter: chaptersRead,
            favoriteCharacter: favoriteCharacter || undefined,
            favoriteScene: favoriteScene || undefined,
        };

        console.log('Rating data to be saved: ', ratingData);
        alert(`Rating saved for ${manga.title}!\nYour Rating: ${userRating}/10`);
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                    <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                        <Image 
                            src={manga.image}
                            alt={manga.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/** This is the user interaction section */}
                    <div className="mt-6 bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold text-lg mb-4">Your Progress</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Status</label>
                            <select 
                                value={readStatus || ''} 
                                onChange={handleStatusChange} 
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Select Status</option>
                                <option value="Reading">Reading</option>
                                <option value="Completed">Completed</option>
                                <option value="Plan to Read">Plan to Read</option>
                                <option value="Dropped">Dropped</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Episodes Watched ({chaptersRead}/{manga.chapters})
                            </label>
                            <input 
                                type="number"
                                min={0}
                                max={manga.chapters}
                                value={chaptersRead}
                                onChange={handleChaptersChange}
                                className="w-full p-2 border rounded"  
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Your Rating (1-10)</label>
                            <div className="flex flex-wrap gap-1">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                                    <button
                                        key={rating}
                                        className={`w-8 h-8 rounded ${
                                            userRating === rating ? 'bg-blue-600 text-white' : 'bg-gray-200'
                                        }`}
                                        onClick={() => handleRatingChange(rating)}
                                    >   
                                        {rating}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/** Favorites */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Favorite Character</label>
                            {manga.characters && manga.characters.length > 0 ? (
                                <select 
                                    value={favoriteCharacter}
                                    onChange={(e) => setFavoriteCharacter(e.target.value)}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Select Character</option>
                                    {manga.characters.map((character) => (
                                        <option key={character} value={character}>
                                            {character}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input 
                                    type="text"
                                    value={favoriteCharacter}
                                    onChange={(e) => setFavoriteCharacter(e.target.value)}
                                    placeholder="Enter your favorite character"
                                    className="w-full p-2 border rounded" />
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Favorite scene</label>
                            <textarea 
                                value={favoriteScene}
                                onChange={(e) => setFavoriteScene(e.target.value)}
                                placeholder="Describe your favorite scene"
                                className="w-full p-2 border rounded resize-none h-20"
                            />
                        </div>

                        <button
                            onClick={handleSave}
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-2/3">
                    <div className="flex justify-between items-start">
                        <h1 className="text-3xl font-bold">{manga.title}</h1>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">{manga.rating?.toFixed(1)}</span>
                            <span className="text-sm text-gray-600">Community Rating</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                        {manga.genres.map((genre) => (
                            <span
                                key={genre}
                                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-700 leading-relaxed">{manga.description}</p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <h3 className="text-sm text-gray-500">Release Year</h3>
                            <p className="font-medium">{manga.releaseYear}</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-500">Status</h3>
                            <p className="font-medium">{manga.status}</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-500">Chapters</h3>
                            <p className="font-medium">{manga.chapters}</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-500">Author</h3>
                            <p className="font-medium">{manga.author}</p>
                        </div>
                    </div>

                    {/** Display the characters */}
                    {manga.characters && manga.characters.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-4">Characters</h2>
                            <div className="flex flex-wrap gap-2">
                                {manga.characters.map((character) => (
                                    <span
                                        key={character}
                                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                                    >
                                        {character}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}
