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
  characters?: string[];
  openings?: {
    number: number;
    title: string;
    artist: string;
    youtubeUrl?: string;
  }[];
  endings?: {
    number: number;
    title: string;
    artist: string;
    youtubeUrl?: string;
  }[];
}

export const animeData: Anime[] = [
  {
    id: '1',
    title: 'Attack on Titan',
    image: 'https://cdn.myanimelist.net/images/anime/1948/120625.jpg',
    description: 'Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure.',
    genres: ['Action', 'Drama', 'Fantasy', 'Mystery'],
    releaseYear: 2013,
    episodes: 75,
    studio: 'WIT Studio, MAPPA',
    rating: 9.0,
    status: 'Completed',
    characters: ['Eren Yeager', 'Mikasa Ackerman', 'Armin Arlert', 'Levi Ackerman', 'Erwin Smith', 'Hange Zoë', 'Reiner Braun', 'Annie Leonhart', 'Bertholdt Hoover', 'Jean Kirstein', 'Sasha Blouse', 'Connie Springer'],
    openings: [
      {
        number: 1,
        title: 'Guren no Yumiya',
        artist: 'Linked Horizon',
        youtubeUrl: 'https://www.youtube.com/watch?v=8OkpRK2_gVs'
      },
      {
        number: 2,
        title: 'Jiyuu no Tsubasa',
        artist: 'Linked Horizon',
        youtubeUrl: 'https://www.youtube.com/watch?v=PbWFpzi8C94'
      },
      {
        number: 3,
        title: 'Shinzou wo Sasageyo',
        artist: 'Linked Horizon',
        youtubeUrl: 'https://www.youtube.com/watch?v=CID-sYQNCew'
      },
      {
        number: 4,
        title: 'Red Swan',
        artist: 'Yoshiki feat. Hyde',
        youtubeUrl: 'https://www.youtube.com/watch?v=r1XE8ON8fos'
      },
      {
        number: 5,
        title: 'Shoukei to Shikabane no Michi',
        artist: 'Linked Horizon',
        youtubeUrl: 'https://www.youtube.com/watch?v=0dK7JgKivQM'
      },
      {
        number: 6,
        title: 'My War',
        artist: 'Shinsei Kamattechan',
        youtubeUrl: 'https://www.youtube.com/watch?v=6TolbTZXDjI'
      },
      {
        number: 7,
        title: 'The Rumbling',
        artist: 'SiM',
        youtubeUrl: 'https://www.youtube.com/watch?v=2S4qGKmzBJE'
      },
      {
        number: 8,
        title: 'Saigo no Kyojin (The Last Titan)',
        artist: 'Linked Horizon',
        youtubeUrl: 'https://www.youtube.com/watch?v=d6qCbdXqsOs'
      }
    ],
    endings: [
      {
        number: 1,
        title: 'Utsukushiki Zankoku na Sekai',
        artist: 'Yōko Hikasa',
        youtubeUrl: 'https://www.youtube.com/watch?v=QBlYYOsdG-U'
      },
      {
        number: 2,
        title: 'Great Escape',
        artist: 'Cinema Staff',
        youtubeUrl: 'https://www.youtube.com/watch?v=sFdzNhJAdco'
      },
      {
        number: 3,
        title: 'Yuugure no Tori',
        artist: 'Shinsei Kamattechan',
        youtubeUrl: 'https://www.youtube.com/watch?v=rbfHY8mkhT8'
      },
      {
        number: 4,
        title: 'Akatsuki no Requiem',
        artist: 'Linked Horizon',
        youtubeUrl: 'https://www.youtube.com/watch?v=sC9zEzGRK50'
      },
      {
        number: 5,
        title: 'Name of Love',
        artist: 'Cinema Staff',
        youtubeUrl: 'https://www.youtube.com/watch?v=LnCDBel2JV0'
      },
      {
        number: 6,
        title: 'Shogeki',
        artist: 'Yuko Ando',
        youtubeUrl: 'https://www.youtube.com/watch?v=AZl8UDsqsoM'
      },
      {
        number: 7,
        title: 'Akuma no Ko',
        artist: 'Ai Higuchi',
        youtubeUrl: 'https://www.youtube.com/watch?v=-ZmAcmUSMHM'
      },
      {
        number: 8,
        title: 'Itterasshai',
        artist: 'Ai Higuchi',
        youtubeUrl: 'https://www.youtube.com/watch?v=DU2KGyQgso4'
      },
      {
        number: 9,
        title: 'Under the Tree',
        artist: 'SIM',
        youtubeUrl: 'https://www.youtube.com/watch?v=yKPka2qGRh8'
      },
      
    ],
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
    status: 'Ongoing',
    characters: ['Tanjirou Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Kyojuro Rengoku', 'Shinobu Kocho', 'Muzan Kibutsuji', 'Kanao Tsuyuri', 'Tengen Uzui'],
    openings: [
      {
        number: 1,
        title: 'Gurenge',
        artist: 'LiSA',
        youtubeUrl: 'https://www.youtube.com/watch?v=pmanD_s7G3U'
      },
      {
        number: 2,
        title: 'Akeboshi',
        artist: 'LiSA',
        youtubeUrl: 'https://www.youtube.com/watch?v=yGcm81aaTHg'
      },
      {
        number: 3,
        title: 'Zankyou Sanka',
        artist: 'Aimer',
        youtubeUrl: 'https://www.youtube.com/watch?v=SHxzLV2X86Q'
      },
      {
        number: 4,
        title: 'Kizuna no Kiseki',
        artist: 'MAN WITH A MISSION x milet',
        youtubeUrl: 'https://www.youtube.com/watch?v=VW13HOdckFw'
      },
      {
        number: 5,
        title: 'MUGEN',
        artist: 'MY FIRST STORY x Hyde',
        youtubeUrl: 'https://www.youtube.com/watch?v=ipIZ1Qem-iY'
      }
    ],
    endings: [
      {
        number: 1,
        title: 'from the edge',
        artist: 'FictionJunction feat. LiSA',
        youtubeUrl: 'https://www.youtube.com/watch?v=G0WaWmhgbiA'
      },
      {
        number: 2,
        title: 'Shirogane',
        artist: 'LiSA',
        youtubeUrl: 'https://www.youtube.com/watch?v=Nm9Qf5-CzA8'
      },
      {
        number: 3,
        title: 'Asa ga Kuru',
        artist: 'Aimer',
        youtubeUrl: 'https://www.youtube.com/watch?v=Lfa-7pKeWZU'
      }
    ]
  },
  {
    id: '4',
    title: 'Jujutsu Kaisen',
    image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
    description: 'Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item.',
    genres: ['Action', 'Demons', 'Supernatural', 'School'],
    releaseYear: 2020,
    episodes: 47,
    studio: 'MAPPA',
    rating: 8.6,
    status: 'Ongoing'
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
    status: 'Ongoing'
  },
];

export function getAnimeById(id: string): Anime | undefined {
  return animeData.find(anime => anime.id === id);
}

export function getAnimeByTitle(title: string): Anime | undefined {
  return animeData.find(anime => anime.title.toLowerCase() === title.toLowerCase());
}
