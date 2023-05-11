import React from "react";
import { IPhoto } from "../../models/IPhoto";

interface IFotoProps {
  foto: IPhoto;
}

export const Foto: React.FC<IFotoProps> = ({ foto }) => {
  return (
    <li>
      <img src={foto.url} alt={foto.title} />
      <p>{foto.title}</p>
    </li>
  );
};
