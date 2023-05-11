import React from "react";
import { IAlbum } from "../../models/IAlbum";
import { Album } from "./Album";

interface IListaAlbumsProps {
  albums: IAlbum[];
}

export const ListaAlbums: React.FC<IListaAlbumsProps> = ({ albums }) => {
  return (
    <ul>
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </ul>
  );
};
