import React from "react";
import { Link } from "react-router-dom";
import styles from "./PokemonListItem.module.css";

const PokemonListItem = ({ data }: any) => {
  return (
    <Link to={`/details/${data.name}`} className={styles["item-container"]}>
      <div>
        <img
          src={data.sprites.front_default}
          alt={data.name}
          width="96"
          height="96"
        />
      </div>
      <div className={styles["item-content"]}>
        #{data.id} <strong>{data.name}</strong>
      </div>
      <div>
        Types: {data.types.map((type: any) => type.type.name).join(", ")}
      </div>
    </Link>
  );
};

export default PokemonListItem;
