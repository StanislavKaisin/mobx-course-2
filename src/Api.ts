export const BASE_URL = "https://pokeapi.co/api/v2";

export const detailFetcher = (name: string) => async () => {
  const details = await fetch(BASE_URL + "/pokemon/" + name).then((response) =>
    response.json()
  );
  const species = await fetch(details.species.url).then((response) =>
    response.json()
  );
  return { ...details, names: species.names };
};

export const listFetcher = async ({ pageParam = 0 })=> {
    return fetch(
    BASE_URL + "/pokemon?limit=100&offset=" + pageParam * 100
  ).then(response =>response.json()).then((response)=>{
    return {
      ...response,
      page: pageParam,
    };
  })
}