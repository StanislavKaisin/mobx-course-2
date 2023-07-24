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

export const listFetcher = () => async () => {
  return await fetch(BASE_URL + "/pokemon?limit=1000&offset=0").then(
    (response) => response.json()
  );
};
