import React from "react";
import { useQuery } from "react-query";
import PokemonListItem from "./PokemonListItem";
import SkeletonListItem from "./SkeletonListItem";

const PokemonListItemWrapper = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon-detail", name],
    queryFn: async () => {
      const details = await fetch(url).then((response) => response.json());
      const species = await fetch(details.species.url).then((response) =>
        response.json()
      );
      return { ...details, names: species.names };
      // return fetch(url).then((response) => response.json());
    },
    staleTime: 60 * 1000,
  });
  return (
    <>{!isLoading ? <PokemonListItem data={data} /> : <SkeletonListItem />}</>
  );
};

export default PokemonListItemWrapper;
