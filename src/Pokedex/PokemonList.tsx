import React from "react";
import { useQuery } from "react-query";
import PokemonListItemWrapper from "./PokemonListItem/PokemonListItemWrapper";

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
          return <PokemonListItemWrapper name={e.name} {...e} />;
        })}
    </>
  );
};

export default PokemonList;
