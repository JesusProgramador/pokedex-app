import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState([]);

  const loadPokemons = async () => {
    try {
      const resp = await pokemonApi.get(
        'https://pokeapi.co/api/v2/pokemon?limit=1200',
      );

      mapPokemonList(resp.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const mapPokemonList = pokemonList => {
    const newPokemonList = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {id, picture, name};
    });

    setSimplePokemonList(newPokemonList);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {isFetching, simplePokemonList};
};
