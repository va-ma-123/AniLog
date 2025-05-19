import { Manga } from "@/lib/data/manga";
import MediaCard from "./MediaCard";

interface MangaCardProps {
    manga: Manga;
}

export default function MangaCard({ manga }: MangaCardProps) {
    return (
        <MediaCard 
            title={manga.title}
            image={manga.image}
            rating={manga.rating}
            count={manga.chapters}
            status={manga.status}
            genres={manga.genres}
            type="manga"
        />
    );
}