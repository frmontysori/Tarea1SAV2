import React from "react";
import { IAlbum } from "../../models/IAlbum";
import { Foto } from "./Foto";

interface IAlbumProps {
  album: IAlbum;
}

export const Album: React.FC<IAlbumProps> = ({ album }) => {
  const renderFotos = () => {
    if (!album.fotos || album.fotos.length === 0) {
      return null;
    }

    return (
      <ul>
        {album.fotos.map((foto) => {
          return <Foto key={foto.id} foto={foto} />;
        })}
      </ul>
    );
  };

  return (
    <li>
      <p># {album.id}</p>
      <p>Propietario del álbum: {album.usuario?.name}</p>
      <h2>{album.title}</h2>

      {renderFotos()}
    </li>
  );
};
