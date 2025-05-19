export interface Anime {
  id: string;
  title: string;
  image: string;
  description: string;
  genres: string[];
  releaseYear: number;
  episodes: number;
  studio: string;
  rating: number | null;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
}

export const animeData: Anime[] = [
  {
    id: '1',
    title: 'Attack on Titan',
    image: 'https://cdn.myanimelist.net/images/anime/1948/120625.jpg',
    description: 'Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure.',
    genres: ['Action', 'Drama', 'Fantasy', 'Mystery'],
    releaseYear: 2013,
    episodes: 25,
    studio: 'WIT Studio',
    rating: 9.0,
    status: 'Completed'
  },
  {
    id: '2',
    title: 'One Piece',
    image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
    description: 'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words revealed the existence of the greatest treasure in the world, One Piece. This revelation brought about the Grand Age of Pirates.',
    genres: ['Action', 'Adventure', 'Fantasy', 'Comedy'],
    releaseYear: 1999,
    episodes: 5000,
    studio: 'Toei Animation',
    rating: 8.8,
    status: 'Ongoing'
  },
  {
    id: '3',
    title: 'Demon Slayer',
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
    description: 'Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado\'s shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.',
    genres: ['Action', 'Demons', 'Historical', 'Supernatural'],
    releaseYear: 2019,
    episodes: 26,
    studio: 'Ufotable',
    rating: 8.7,
    status: 'Completed'
  },
  {
    id: '4',
    title: 'Jujutsu Kaisen',
    image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
    description: 'Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item.',
    genres: ['Action', 'Demons', 'Supernatural', 'School'],
    releaseYear: 2020,
    episodes: 24,
    studio: 'MAPPA',
    rating: 8.6,
    status: 'Completed'
  },
  {
    id: '5',
    title: 'One Punch Man',
    image: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg',
    description: 'The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.',
    genres: ['Action', 'Comedy', 'Sci-Fi', 'Supernatural'],
    releaseYear: 2015,
    episodes: 24,
    studio: 'Madhouse',
    rating: 8.5,
    status: 'Completed'
  },
  {
    id: '6',
    title: 'One Punch Man Season 3',
    image: 'https://cdn.myanimelist.net/images/anime/1170/121232.jpg',
    description: '3rd season of One Punch Man.',
    genres: ['Action', 'Comedy', 'Sci-Fi', 'Supernatural'],
    releaseYear: 2025,
    episodes: 0,
    studio: 'TBD',
    rating: null,
    status: 'Upcoming'
  },
];

export function getAnimeById(id: string): Anime | undefined {
  return animeData.find(anime => anime.id === id);
}

export function getAnimeByTitle(title: string): Anime | undefined {
  return animeData.find(anime => anime.title.toLowerCase() === title.toLowerCase());
}
