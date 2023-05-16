import { rest } from "msw";
import { Artist, Song } from "../features/songs/slices/songsApiSlice";

const songs = [
  {
    id: 123,
    title: "Hope",
    mainArtistId: 1,
  },
  {
    id: 124,
    title: "MONTERO (Call Me By Your Name)",
    mainArtistId: 2,
  },
  {
    id: 125,
    title: "THATS WHAT I WANT",
    mainArtistId: 2,
  },
  {
    id: 126,
    title: "Clash",
    mainArtistId: 3,
  },
  {
    id: 127,
    title: "drivers license",
    mainArtistId: 4,
  },
];

const songDetails: Record<string, Song> = {
  123: {
    id: 123,
    title: "Hope",
    genre: "Alternative/Indie",
    duration: 270000,
    mainArtistId: 1,
    audioLanguage: "English",
  },
  124: {
    id: 124,
    title: "MONTERO (Call Me By Your Name)",
    genre: "Hip-Hop/Rap",
    duration: 220000,
    mainArtistId: 2,
    audioLanguage: "English",
  },
  125: {
    id: 125,
    title: "THATS WHAT I WANT",
    genre: "Hip-Hop/Rap",
    duration: 205000,
    mainArtistId: 2,
    audioLanguage: "English",
  },
  126: {
    id: 126,
    title: "Clash",
    genre: "Hip-Hop/Rap",
    duration: 235000,
    mainArtistId: 3,
    audioLanguage: "English",
  },
  "127": {
    id: 127,
    title: "drivers license",
    genre: "Pop",
    duration: 250000,
    mainArtistId: 4,
    audioLanguage: "English",
  },
};

const artists: Record<string, Artist> = {
  1: {
    id: 1,
    name: "Arlo Parks",
  },
  2: {
    id: 2,
    name: "Lil Nas X",
  },
  3: {
    id: 3,
    name: "Little Simz",
  },
  4: {
    id: 4,
    name: "Olivia Rodrigo",
  },
};

export const handlers = [
  rest.get("http://localhost:9000/songs", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(songs));
  }),

  rest.get("http://localhost:9000/songs/:id", (req, res, ctx) => {
    const { id }: any = req.params;
    return res(ctx.status(200), ctx.delay(500), ctx.json(songDetails[id]));
  }),

  rest.get("http://localhost:9000/artists/byIds", (req, res, ctx) => {
    const ids = req.url.searchParams.get("ids");
    const artistsFound = ids?.split(",").reduce((acc, id) => {
      const song = songDetails[id];
      const artist: Artist | undefined = artists[song.mainArtistId];
      if (artist) {
        acc.push(artist);
      }
      return acc;
    }, [] as Artist[]);
    return res(ctx.status(200), ctx.delay(500), ctx.json(artistsFound));
  }),
];
