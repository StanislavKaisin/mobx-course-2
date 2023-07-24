import React from "react";
import { useQuery } from "react-query";
import PokemonListItem from "./PokemonListItem";
import SkeletonListItem from "./SkeletonListItem";
import { detailFetcher } from "../../Api";

const PokemonListItemWrapper = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon-detail", name],
    queryFn: detailFetcher(name),
    staleTime: 60 * 1000,
  });
  return (
    <>{!isLoading ? <PokemonListItem data={data} /> : <SkeletonListItem />}</>
  );
};

export default PokemonListItemWrapper;
