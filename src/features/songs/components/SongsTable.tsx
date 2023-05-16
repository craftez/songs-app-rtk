import React from "react";
import { Table } from "reactstrap";
import SongsRow from "./SongsRow";
import { Song } from "../slices/songsApiSlice";

export default function SongsTable({ data }: { data: Song[] }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Main Artist</th>
        </tr>
      </thead>
      <tbody>
        {data.map((song) => (
          <SongsRow song={song} key={song.id} />
        ))}
      </tbody>
    </Table>
  );
}
