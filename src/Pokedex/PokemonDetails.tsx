import React, { FC } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { detailFetcher } from "../Api";

interface PokemonDetailsProps {
  name?: string;
}

const POKEMON_DETAILS_ROUTE = "https://pokeapi.co/api/v2/pokemon/";

const PokemonDetails: FC<PokemonDetailsProps> = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon-list", name],
    queryFn: detailFetcher(name!),
    staleTime: 60 * 1000,
  });
  return <>{!isLoading && JSON.stringify(data)}</>;
};

export default PokemonDetails;
