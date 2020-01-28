import React from "react";
import { AvengerProps } from "../../shared/typings/Avenger.d";
import { getAvengerImage } from "./Avengers.const";

import "./Avenger.css";

export const Avenger = ({ id, name }: AvengerProps) => {
  return (
    <div className="avenger">
      <img src={getAvengerImage(id)} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
