import { animeData } from "@/lib/data/anime";
import { mangaData } from "@/lib/data/manga";
import { usersData } from "@/lib/data/user";
import { AnimeStatus, MangaStatus, ReadStatus, WatchStatus } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";


async function main() {
  console.log("Seeding database...");

  for (const anime of animeData) {
    await prisma.anime.create({
      data: {
        id: anime.id,
        title: anime.title,
        image: anime.image,
        description: anime.description,
        genres: anime.genres,
        releaseYear: anime.releaseYear,
        episodes: anime.episodes,
        studio: anime.studio,
        status: anime.status as AnimeStatus,
        characters: anime.characters ?? [],
        openings: {
          create: anime.openings?.map((op) => ({
            number: op.number,
            title: op.title,
            artist: op.artist,
            youtubeUrl: op.youtubeUrl,
          })) ?? [],
        },
        endings: {
          create: anime.endings?.map((ed) => ({
            number: ed.number,
            title: ed.title,
            artist: ed.artist,
            youtubeUrl: ed.youtubeUrl,
          })) ?? [],
        },
      },
    });
  }

  for (const manga of mangaData) {
    await prisma.manga.create({
      data: {
        id: manga.id,
        title: manga.title,
        image: manga.image,
        description: manga.description,
        genres: manga.genres,
        releaseYear: manga.releaseYear,
        chapters: manga.chapters,
        author: manga.author,
        status: manga.status as MangaStatus,
        rating: manga.rating,
        characters: manga.characters ?? [],
      },
    });
  }

  for (const user of usersData) {
    await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        watchedAnime: {
          create: user.watchedAnime.map((wa) => ({
            animeId: wa.animeId,
            userRating: wa.userRating,
            status: wa.status.replace(/ /g, "") as WatchStatus,
            lastEpisode: wa.lastEpisode,
            favoriteCharacter: wa.favoriteCharacter,
            favoriteOpening: wa.favoriteOpening,
            favoriteEnding: wa.favoriteEnding,
            favoriteScene: wa.favoriteScene,
          })),
        },
        readManga: {
          create: user.readManga.map((rm) => ({
            mangaId: rm.mangaId,
            userRating: rm.userRating,
            status: rm.status.replace(/ /g, "") as ReadStatus,
            lastChapter: rm.lastChapter,
            favoriteCharacter: rm.favoriteCharacter,
            favoriteScene: rm.favoriteScene,
          })),
        },
      },
    });
  }

  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
