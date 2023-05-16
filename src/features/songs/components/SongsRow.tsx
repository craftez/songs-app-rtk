import React from "react";
import { Link } from "react-router-dom";
import { Song } from "../slices/songsApiSlice";

export default function SongsRow({ song }: { song: Song }) {
  return (
    <tr key={song.id}>
      <th scope="row">{song.id}</th>
      <td>
        <Link to={`/songs/${song.id}`}>{song.title}</Link>
      </td>
      <td>{song?.artist?.name}</td>
    </tr>
  );
}
