import { IPhoto } from "./IPhoto";
import { IUser } from "./IUser";

export interface IAlbum {
    userId: number;
    id: number;
    title: string;
    usuario?: IUser; // Esto es para la relación con el usuario.
    fotos?: IPhoto[]; // Esto es para la relación con las fotos.
  }