import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';
import { Loader } from './Loader';
import PokemonListDeleted from './PokemonListDeleted';

export const PokemonList = () => {
    const {allPokemons, loading, filteredPokemons} = useContext(PokemonContext);

    return (
        <>
       <PokemonListDeleted/>
        {loading ? (
            <Loader/>
        ):(
            <div className='card-list-pokemon container'>
                {filteredPokemons.length ? (
                    <>
                    {filteredPokemons.map(pokemon => (
                        <CardPokemon pokemon={pokemon} key={pokemon.id} />
                    ))}
                    </>
                ) : (
                    <>
                    {allPokemons.map(pokemon => (
                        <CardPokemon pokemon={pokemon} key={pokemon.id}/>
                    ))}
                    </>
                )}
            </div>
        )}
        </>
    )
}




