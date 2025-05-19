import { Anime } from "@/lib/data/anime";
import MediaCard from "./MediaCard";

interface AnimeCardProps {
    anime: Anime;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
    return (
        <MediaCard 
            title={anime.title}
            image={anime.image}
            rating={anime.rating}
            count={anime.episodes}
            status={anime.status}
            genres={anime.genres}
            type="anime"
        />
    );
}