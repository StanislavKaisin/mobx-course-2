import React from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import PokemonListItemWrapper from "./PokemonListItem/PokemonListItemWrapper";
import { listFetcher } from "../Api";
import { observer } from "mobx-react-lite";
import styles from "./PokemonList.module.css";

const POKEMON_LIST_ROUTE =
  "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";

const PokemonList = ({ filter }: any) => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["pokemon-list"],
    queryFn: ({ pageParam = 0 }) => {
      return listFetcher({pageParam})},
    staleTime: 60 * 1000,
    getNextPageParam: (lastPage: any, allPages) => {
      let result;
      if (lastPage.next !== null) {
        const nextPage = lastPage.page + 1
        result = nextPage
      }
      return result
    },
  });

  return (
    <>
      {!isLoading &&
        data?.pages.map((d) =>
          d.results.filter(filter).map((e: any) => {
            return <PokemonListItemWrapper name={e.name} {...e} />;
          })
        )}
      {hasNextPage && (
        <button
          className={styles["load-more-btn"]}
          onClick={() => {
            fetchNextPage();
          }}>
          Load more
        </button>
      )}
    </>
  );
};

export default observer(PokemonList);
