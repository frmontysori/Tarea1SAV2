import React from "react";
import axios from "axios";
import { ListaAlbums } from "../molecules/ListaAlbums";
import { IAlbum } from "../../models/IAlbum";
import { IUser } from "../../models/IUser";
import { IPhoto } from "../../models/IPhoto";

export const ListaAlbumsWrapper = () => {
  const [albums, setAlbums] = React.useState<IAlbum[]>([]);
  const [cargando, setCargando] = React.useState(true);

  const traerAlbums = async () => {
    try {
      // Hacer la petición
      const [albums, photos, users] = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/albums"),
        axios.get("https://jsonplaceholder.typicode.com/photos"),
        axios.get("https://jsonplaceholder.typicode.com/users"),
      ]);

      const albumsConUsuariosYFotos = (albums.data as IAlbum[]).map((album) => {
        const usuarioAlbum = (users.data as IUser[]).find(
          (usuario) => usuario.id === album.userId
        );

        const fotosDeAlbum = (photos.data as IPhoto[]).filter(
          (foto) => foto.albumId === album.id
        );

        return {
          ...album,
          usuario: usuarioAlbum,
          fotos: fotosDeAlbum,
        };
      });

      // Guardar en el estado
      setAlbums(albumsConUsuariosYFotos);

      // Cambiar el estado de cargando
      setCargando(false);
    } catch (error) {
      console.error(error);
    }
  };

  //componentDidMount
  React.useEffect(() => {
    traerAlbums();
  }, []);

  if (cargando) {
    return <p>Cargando...</p>;
  }

  return <ListaAlbums albums={albums} />;
};
