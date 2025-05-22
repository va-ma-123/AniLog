"use client";
import MangaCard from "@/components/MangaCard";
import { mangaData } from "@/lib/data/manga";
import { useState } from "react";

export default function MangaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'rating' | 'title' | 'releaseYear'>('rating');

  const allGenres = Array.from(
    new Set(mangaData.flatMap(manga => manga.genres))
  ).sort();

  const filteredManga = mangaData
      .filter( manga => 
        manga.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedGenres.length === 0 || 
          selectedGenres.every(genre => manga.genres.includes(genre)))
      )
      .sort((a,b) => {
        //rating and releaseYear are descending order, but title is ascending order
        if (sortBy === 'rating') {
          return (b.rating ?? -Infinity) - (a.rating ?? -Infinity);
        } else if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        } else {
          return b.releaseYear - a.releaseYear;
        }
      });

  const handleGenreToggle = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre) // if already selected, unselect
        : [...prev, genre] // if not already selected, add to list
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Manga</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/** Display the filters on a left sidebar */}
        <div className="w-full lg:w-64 bg-white p-4 rounded-lg shadow-sm">
          <div className="mb-6">
            <label htmlFor="search" className="block font-medium mb-2">Search</label>
            <input 
              type="text" 
              id="search"
              placeholder="Search manga..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
          </div>
          <div className='mb-6'>
            <label className='block font-medium mb-2'>Sort By</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'rating' | 'title' | 'releaseYear')}
              className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value="rating">Rating (High to Low)</option>
              <option value="title">Title (A-Z)</option>
              <option value="releaseYear">Release Year (Newest)</option>
            </select>
          </div>
          <div>
            <h3 className='font-medium mb-2'>Genres</h3>
            <div className='space-y-2 max-h-64 overflow-y-auto'>
              {allGenres.map((genre) => (
                <div key={genre} className='flex items-center'>
                  <input 
                    type="checkbox" 
                    id={`genre-${genre}`}
                    checked={selectedGenres.includes(genre)}
                    onChange={() => {handleGenreToggle(genre)}}
                    className='mr-2'
                    />
                    <label htmlFor={`genre-${genre}`}>{genre}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/** Display a grid of manga */}
        <div className="flex-1">
          {filteredManga.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredManga.map(manga => (
                <MangaCard key={manga.id} manga={manga}/>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg text-center">
              <p className="text-gray-600">No manga found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedGenres([]);
                }}
                className="mt-4 text-blue-600 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};