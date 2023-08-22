import React, { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import PokemonListItemWrapper from "./PokemonListItem/PokemonListItemWrapper";
import { listFetcher } from "../Api";
import { observer } from "mobx-react-lite";
import styles from "./PokemonList.module.css";
import { useStore } from "../stores";
import { Link } from "react-router-dom";

const POKEMON_LIST_ROUTE =
  "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";

const PokemonList = ({ filter }: any) => {
  const {app} = useStore();
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

  useEffect(() => {
    window.scrollTo(0, app.scrollPositionY)
  }, [app])
  

  const handlePokemonClick = () => {
    app.handleScrollPositionChange(window.scrollY)
  }

  return (
    <>
      {!isLoading &&
        data?.pages.map((d) =>
          d.results.filter(filter).map((e: any) => {
            // return <PokemonListItemWrapper name={e.name} {...e} />;
           return ( <Link to={`/details/${e.name}`} className={styles['pokemon-link']} onClick={handlePokemonClick}>
                      <PokemonListItemWrapper name={e.name} {...e} />
                    </Link>)}))}
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
