import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type Song = {
  id: number;
  title: string;
  genre?: string;
  duration?: number;
  mainArtistId: number;
  audioLanguage?: string;
  artist?: Artist;
};

export type Artist = {
  id: number;
  name: string;
};

export const songsApi = createApi({
  reducerPath: "songsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (build) => ({
    getAllSongs: build.query<Song[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const songsResult = await fetchWithBQ("songs");
        if (songsResult.error)
          return { error: songsResult.error as FetchBaseQueryError };
        const songs = songsResult.data as Song[];
        const ids = songs.map((song) => song.id);
        const artistsResult = await fetchWithBQ(
          `artists/byIds?ids=${ids.join(",")}`
        );

        if (artistsResult.error) {
          return { error: artistsResult.error as FetchBaseQueryError };
        }
        const artists = artistsResult.data as Artist[];

        const augmentedSongData = songs.map((song) => ({
          ...song,
          artist: artists.find((artist) => artist.id === song.mainArtistId),
        }));
        return { data: augmentedSongData as Song[] };
      },
    }),
    getSong: build.query({
      async queryFn({ songId }, _queryApi, _extraOptions, fetchWithBQ) {
        const songResult = await fetchWithBQ(`/songs/${songId}`);
        if (songResult.error)
          return { error: songResult.error as FetchBaseQueryError };
        const song = songResult.data as Song;
        // Here i am using the same endpoint for artists but we could as easily use a getOne artist by id, allowing for this endpoint to not be duplicated.
        const artistsResult = await fetchWithBQ(`artists/byIds?ids=${song.id}`);
        if (artistsResult.error) {
          return { error: artistsResult.error as FetchBaseQueryError };
        }
        const artists = artistsResult.data as Artist[];

        return { data: { ...song, artist: artists[0] } };
      },
    }),
  }),
});

export const { useGetAllSongsQuery, useGetSongQuery } = songsApi;
