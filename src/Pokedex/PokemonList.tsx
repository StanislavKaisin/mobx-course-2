import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const POKEMON_LIST_ROUTE =
  "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";

const PokemonList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon-list"],
    queryFn: async () => {
      return fetch(POKEMON_LIST_ROUTE).then((response) => response.json());
    },
    staleTime: 60 * 1000,
  });

  return (
    <>
      {!isLoading &&
        data.results.map((e: any) => {
          return (
            <div key={e.name}>
              <Link to={`details/${e.name}`}>{e.name}</Link>
            </div>
          );
        })}
    </>
  );
};

export default PokemonList;
