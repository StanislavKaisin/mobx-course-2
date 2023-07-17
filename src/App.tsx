import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

// import { PokemonDetails } from "./Pokedex/PokemonDetails";
// import { PokemonList } from "./Pokedex/PokemonList";

const PokemonList = lazy(() => import("./Pokedex/PokemonList"));
const PokemonDetails = lazy(() => import("./Pokedex/PokemonDetails"));

const queryClient = new QueryClient();
// const history = createBrowserHistory();

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonList />,
  },
  {
    path: "details/:name",
    element: <PokemonDetails />,
  },
]);

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
