export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    watchedAnime: {
        animeId: string;
        userRating: number | null;
        status: 'Watching' | 'Completed' | 'Plan to Watch' | 'Dropped';
        lastEpisode: number;
        favoriteCharacter?: string;
        favoriteOpening?: string;
        favoriteEnding?: string;
        favoriteScene?: string;
        review?: string;
    }[];
    readManga: {
        mangaId: string;
        userRating: number | null;
        status: 'Reading' | 'Completed' | 'Plan to Read' | 'Dropped';
        lastChapter: number;
    }[];
}

export const usersData: User[] = [
    {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/default-avatar.png',
    watchedAnime: [
      {
        animeId: '1',
        userRating: 9,
        status: 'Completed',
        lastEpisode: 75,
        favoriteCharacter: 'Levi Ackerman',
        favoriteOpening: 'Guren no Yumiya',
        favoriteEnding: 'Great Escape',
        favoriteScene: 'Levi vs Beast Titan battle',
        review: 'One of the best anime ever created. The story gets deeper with each season, and the animation is top-notch.'
      },
      {
        animeId: '3',
        userRating: 8,
        status: 'Watching',
        lastEpisode: 12
      },
      {
        animeId: '5',
        userRating: 9,
        status: 'Completed',
        lastEpisode: 24
      }
    ],
    readManga: [
      {
        mangaId: '2',
        userRating: 9.5,
        status: 'Reading',
        lastChapter: 950
      },
      {
        mangaId: '6',
        userRating: 8.6,
        status: 'Reading',
        lastChapter: 120
      }
    ]
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: '/default-avatar.png',
    watchedAnime: [
      {
        animeId: '2',
        userRating: 7.8,
        status: 'Watching',
        lastEpisode: 90
      },
      {
        animeId: '4',
        userRating: 9.1,
        status: 'Completed',
        lastEpisode: 24
      },
      {
        animeId: '6',
        userRating: 8.5,
        status: 'Watching',
        lastEpisode: 10
      }
    ],
    readManga: [
      {
        mangaId: '1',
        userRating: 9.7,
        status: 'Completed',
        lastChapter: 364
      },
      {
        mangaId: '3',
        userRating: 8.9,
        status: 'Reading',
        lastChapter: 80
      },
      {
        mangaId: '5',
        userRating: 9.2,
        status: 'Reading',
        lastChapter: 150
      }
    ]
  }
];

export function getUserById(id: string): User | undefined {
    return usersData.find(user => user.id === id);
}

let currentUser: User | null = null;

export function getCurrentUser(): User | null {
    return currentUser;
}

// would have password as an argument too, but this is just mock
export function login(email: string): User | null {
    const user = usersData.find(user => user.email === email);
    if(user) {
        currentUser = user;
        return user;
    }
    return null;
}

export function logout(): void {
    currentUser = null;
}

// would have password as an argument too, but this is just mock
export function register(name: string, email: string): User | null {
    const newUser: User = {
        id: (usersData.length + 1).toString(),
        name,
        email,
        avatar: '/default-avatar.png',
        watchedAnime: [],
        readManga: []
    }

    currentUser = newUser;
    return newUser;
}