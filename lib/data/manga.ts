export interface Manga {
  id: string;
  title: string;
  image: string;
  description: string;
  genres: string[];
  releaseYear: number;
  chapters: number;
  author: string;
  rating: number | null;
  status: 'Ongoing' | 'Completed' | 'Upcoming' | 'Hiatus';
  characters?: string[];
}

export const mangaData: Manga[] = [
  {
    id: '1',
    title: 'Berserk',
    image: 'https://cdn.myanimelist.net/images/manga/1/157897.jpg',
    description: 'Guts, a former mercenary now known as the \'Black Swordsman,\' is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires.',
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Horror', 'Supernatural'],
    releaseYear: 1989,
    chapters: 364,
    author: 'Kentaro Miura',
    rating: 9.5,
    status: 'Hiatus'
  },
  {
    id: '2',
    title: 'One Piece',
    image: 'https://cdn.myanimelist.net/images/manga/3/55539.jpg',
    description: 'Gol D. Roger, a man referred to as the \'Pirate King,\' is set to be executed by the World Government. But just before his death, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the Pirate King is executed and the Great Age of Pirates begins.',
    genres: ['Action', 'Adventure', 'Comedy', 'Fantasy', 'Shounen'],
    releaseYear: 1997,
    chapters: 1000,
    author: 'Eiichiro Oda',
    rating: 9.2,
    status: 'Ongoing'
  },
  {
    id: '3',
    title: 'Chainsaw Man',
    image: 'https://cdn.myanimelist.net/images/manga/3/216464.jpg',
    description: 'Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.',
    genres: ['Action', 'Adventure', 'Award Winning', 'Supernatural'],
    releaseYear: 2018,
    chapters: 202,
    author: 'Tatsuki Fujimoto',
    rating: 8.8,
    status: 'Ongoing',
    characters: ['Denji', 'Pochita', 'Makima', 'Power', 'Aki Hayakawa', 'Himeno', 'Kishibe', 'Reze', 'Kobeni Higashiyama', 'Quanxi', 'Beam', 'Violence Fiend', 'Angel Devil', 'Katana Man', 'Santa Claus', 'Cosmo', 'Yoshida', 'Nayuta', 'Asa Mitaka', 'Yoru']

  },
  {
    id: '4',
    title: 'Vagabond',
    image: 'https://cdn.myanimelist.net/images/manga/1/259070.jpg',
    description: 'In 17th-century Japan, Shinmen Takezou is a wild, rough young man, in both his appearance and his actions. His aggressive nature has won him the collective reproach and fear of his village, leading him and his best friend, Matahachi Honiden, to run away in search of something grander than provincial life.',
    genres: ['Action', 'Adventure', 'Award Winning', 'Samurai', 'Historical'],
    releaseYear: 1998,
    chapters: 327,
    author: 'Takehiko Inoue',
    rating: 9.3,
    status: 'Hiatus'
  },
  {
    id: '5',
    title: 'Vinland Saga',
    image: 'https://cdn.myanimelist.net/images/manga/2/188925.jpg',
    description: 'Thorfinn, son of one of the Vikings\' greatest warriors, is among the finest fighters in the merry band of mercenaries run by the cunning Askeladd, an impressive feat for a person his age. However, Thorfinn is not part of the group for the plunder it entails—instead, for having caused his family great tragedy, the boy has sworn to kill Askeladd in a fair duel.',
    genres: ['Action', 'Adventure', 'Award Winning', 'Drama', 'Historical'],
    releaseYear: 2005,
    chapters: 218,
    author: 'Makoto Yukimura',
    rating: 9.0,
    status: 'Ongoing',
    characters: ['Miyamoto Musashi','Sasaki Kojiro','Otsu','Takuan Soho','Matahachi Honiden','Oko','Akemi','Yagyu Sekishusai','Yagyu Munenori','Inshun Hozoin','Ittosai','Takuan','Baiken Shishido','Seijuro Yoshioka','Denshichiro Yoshioka','Ueda Ryosuke','Jotaro','Tsujikaze Tenma','Ogawa Inei','Kojirō\'s Mother',]
  },
  {
    id: '6',
    title: 'Jujutsu Kaisen',
    image: 'https://cdn.myanimelist.net/images/manga/3/210341.jpg',
    description: 'Yuuji Itadori is a high school student who spends his days visiting his bedridden grandfather. Although he looks like your average teenager, his immense physical strength is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the school outcasts in the Occult Club.',
    genres: ['Action', 'Fantasy', 'School', 'Shounen', 'Supernatural'],
    releaseYear: 2018,
    chapters: 272,
    author: 'Gege Akutami',
    rating: 8.7,
    status: 'Completed'
  }
];

export function getMangaById(id: string): Manga | undefined {
  return mangaData.find(manga => manga.id === id);
}

export function getMangaByTitle(title: string): Manga | undefined {
  return mangaData.find(manga => manga.title.toLowerCase() === title.toLowerCase());
}
