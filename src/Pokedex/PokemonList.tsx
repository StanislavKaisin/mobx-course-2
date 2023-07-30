import React from "react";
import { useQuery } from "react-query";
import PokemonListItemWrapper from "./PokemonListItem/PokemonListItemWrapper";
import { listFetcher } from "../Api";
import { observer } from "mobx-react-lite";

const POKEMON_LIST_ROUTE =
  "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";

const PokemonList = ({filter}: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon-list"],
    queryFn: listFetcher(),
    staleTime: 60 * 1000,
  });

  return (
    <>
      {!isLoading &&
        data.results.filter(filter).map((e: any) => {
          return <PokemonListItemWrapper name={e.name} {...e} />;
        })}
    </>
  );
};

export default observer(PokemonList);
