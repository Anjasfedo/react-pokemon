import { use } from "react";

const fetchData = async (url: string) => {
  const res = await fetch(url);

  return res.json();
};

export const PokemonGrid = () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const data = use(fetchData(url));

  return <div>{data.title}</div>;
};
