import AnimeCard from "@/components/AnimeCard";
import MangaCard from "@/components/MangaCard";
import { animeData } from "@/lib/data/anime"
import { mangaData } from "@/lib/data/manga";
import Link from "next/link";

export default function Home() {

  // Display the top 3 anime and top 3 manga
  const featuredAnime = [...animeData]
    .sort((a,b) => (b.rating ?? -Infinity) - (a.rating ?? -Infinity))
    .slice(0, 3);

  const featuredManga = [...mangaData]
    .sort((a,b) => (b.rating ?? -Infinity) - (a.rating ?? -Infinity))
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg text-white p-8 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to AniLog</h1>
          <p className="text-lg mb-6">
            Track your favorite anime, rate openings and endings, and build your own personal anime journal.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/register"
              className="bg-white text-blue-600 font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition"
            >
              Sign Up
            </Link>
            <Link
              href="/anime"
              className="bg-transparent border border-white text-white font-medium px-6 py-2 rounded-full hover:bg-white/10 transition"
            >
              Browse Anime
            </Link>
          </div>
        </div>
      </section>

      {/** Display the top anime */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Top Rated Anime</h2>
          <Link 
            href="/anime"
            className="text-blue-600 hover:underline font-medium"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime}/>
          ))}
        </div>
      </section>

      {/** Display the top manga */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Top Rated Manga</h2>
          <Link 
            href="/manga"
            className="text-blue-600 hover:underline font-medium"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredManga.map((manga) => (
            <MangaCard key={manga.id} manga={manga}/>
          ))}
        </div>
      </section>
    </div>
  )
}