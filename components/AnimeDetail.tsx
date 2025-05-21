"use client";

import { Anime } from "@/lib/data/anime";
import Image from "next/image";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

interface AnimeDetailProps {
    anime: Anime;
}

export default function AnimeDetail({ anime }: AnimeDetailProps ) {
    const [userRating, setUserRating] = useState<number | null>(null);
    const [watchStatus, setWatchStatus] = useState<string | null>(null);
    const [episodesWatched, setEpisodesWatched] = useState<number>(0);
    const [isLoggedIn] = useState(false);
    const [favoriteCharacter, setFavoriteCharacter] = useState<string>('');
    const [favoriteOpening, setFavoriteOpening] = useState<string>('');
    const [favoriteEnding, setFavoriteEnding] = useState<string>('');
    const [favoriteScene, setFavoriteScene] = useState<string>('');
    
    const handleRatingChange = (rating: number) => {
        if(!isLoggedIn) {
            alert('Please log in to rate anime');
            return;
        }
        setUserRating(rating);
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setWatchStatus(e.target.value);
    };

    const handleEpisodesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value >= 0 && value <= anime.episodes) {
            setEpisodesWatched(value);
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
            animeId: anime.id,
            userRating,
            status: watchStatus || 'Watching',
            lastEpisode: episodesWatched,
            favoriteCharacter: favoriteCharacter || undefined,
            favoriteOpening: favoriteOpening || undefined,
            favoriteEnding: favoriteEnding || undefined,
            favoriteScene: favoriteScene || undefined,
        };

        console.log('Rating data to be saved: ', ratingData);
        alert(`Rating saved for ${anime.title}!\nYour Rating: ${userRating}/10`);
    };
    
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                    <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                        <Image 
                            src={anime.image}
                            alt={anime.title}
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
                                value={watchStatus || ''} 
                                onChange={handleStatusChange} 
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Select Status</option>
                                <option value="Watching">Watching</option>
                                <option value="Completed">Completed</option>
                                <option value="Plan to Watch">Plan to Watch</option>
                                <option value="Dropped">Dropped</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Episodes Watched ({episodesWatched}/{anime.episodes})
                            </label>
                            <input 
                                type="number"
                                min={0}
                                max={anime.episodes}
                                value={episodesWatched}
                                onChange={handleEpisodesChange}
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
                            {anime.characters && anime.characters.length > 0 ? (
                                <select 
                                    value={favoriteCharacter}
                                    onChange={(e) => setFavoriteCharacter(e.target.value)}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Select Character</option>
                                    {anime.characters.map((character) => (
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
                            <label className="block text-sm font-medium mb-1">Favorite opening</label>
                            {anime.openings && anime.openings.length > 0 ? (
                                <select 
                                    value={favoriteOpening}
                                    onChange={(e) => setFavoriteOpening(e.target.value)}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Select opening</option>
                                    {anime.openings.map((op) => (
                                        <option key={op.number} value={op.title}>
                                            {op.number}. {op.title} - {op.artist}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input 
                                    type="text" 
                                    value={favoriteOpening} 
                                    onChange={(e) => setFavoriteOpening(e.target.value)}
                                    placeholder="Enter your favorite opening"
                                    className="w-full p-2 border rounded"
                                />
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Favorite ending</label>
                            {anime.endings && anime.endings.length > 0 ? (
                                <select 
                                    value={favoriteEnding}
                                    onChange={(e) => setFavoriteEnding(e.target.value)}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Select ending</option>
                                    {anime.endings.map((ed) => (
                                        <option key={ed.number} value={ed.title}>
                                            {ed.number}. {ed.title} - {ed.artist}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input 
                                    type="text" 
                                    value={favoriteEnding} 
                                    onChange={(e) => setFavoriteEnding(e.target.value)}
                                    placeholder="Enter your favorite ending"
                                    className="w-full p-2 border rounded"
                                />
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
                        <h1 className="text-3xl font-bold">{anime.title}</h1>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">{anime.rating?.toFixed(1)}</span>
                            <span className="text-sm text-gray-600">Community Rating</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                        {anime.genres.map((genre) => (
                            <span
                                key={genre}
                                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-700 leading-relaxed">{anime.description}</p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <h3 className="text-sm text-gray-500">Release Year</h3>
                            <p className="font-medium">{anime.releaseYear}</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-500">Status</h3>
                            <p className="font-medium">{anime.status}</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-500">Episodes</h3>
                            <p className="font-medium">{anime.episodes}</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-500">Studio</h3>
                            <p className="font-medium">{anime.studio}</p>
                        </div>
                    </div>

                    {/** Display the characters */}
                    {anime.characters && anime.characters.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-4">Characters</h2>
                            <div className="flex flex-wrap gap-2">
                                {anime.characters.map((character) => (
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

                    {/** Display the songs */}
                    {(anime.openings || anime.endings) && (
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-4">Theme Songs</h2>
                            {anime.openings && anime.openings.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="text-lg font-medium mb-2">Openings</h3>
                                    <div className="space-y-2">
                                        {anime.openings.map((op) => (
                                            <div key={op.number} className="flex items-center justify-between bg-gray-100 p-3 rounded">
                                                <div>
                                                    <span className="font-medium">OP{op.number}: </span>
                                                    <span>&quot;{op.title}&quot; by {op.artist}</span>
                                                </div>
                                                {op.youtubeUrl && (
                                                    <a 
                                                        href={op.youtubeUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        <FaYoutube className="w-6 h-6 text-red-600 text-xl hover:opacity-80 transition" />
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {anime.endings && anime.endings.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="text-lg font-medium mb-2">Endings</h3>
                                    <div className="space-y-2">
                                        {anime.endings.map((ed) => (
                                            <div key={ed.number} className="flex items-center justify-between bg-gray-100 p-3 rounded">
                                                <div>
                                                    <span className="font-medium">ED{ed.number}: </span>
                                                    <span>&quot;{ed.title}&quot; by {ed.artist}</span>
                                                </div>
                                                {ed.youtubeUrl && (
                                                    <a 
                                                        href={ed.youtubeUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        <FaYoutube className="w-6 h-6 text-red-600 text-xl hover:opacity-80 transition" />
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}