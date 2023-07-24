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
        <div className="">
          #{data.id}{" "}
          <strong>
            {data.names.find((o: any) => o.language.name === "en").name}
          </strong>
        </div>
        <div>
          Types: {data.types.map((type: any) => type.type.name).join(", ")}
        </div>
      </div>
    </Link>
  );
};

export default PokemonListItem;
