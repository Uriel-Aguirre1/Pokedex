import React, { useState } from 'react';

function PokemonListDeleted() {
  const [pokemons, setPokemons] = useState([
    { id: 1, name: "Pikachu",habilities:"electric",weight:"8" , height: "10", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
    { id: 2, name: "Charmander",habilities:"fire",weight:"7" , height: "11", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"},
    { id: 3, name: "Charizard",habilities:"fire",weight:"13" , height: "19", image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"},
    { id: 4, name: "Eevee",habilities:"normal", weight:"4" ,height: "7", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" },
    
  ]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const handlePokemonSelect = (pokemonId) => {
    
    const isSelected = selectedPokemons.includes(pokemonId);

    if (isSelected) {
      
      setSelectedPokemons(selectedPokemons.filter(id => id !== pokemonId));
    } else {
     
      setSelectedPokemons([...selectedPokemons, pokemonId]);
    }
  };

  const handleDeleteSelectedPokemons = () => {
    const updatedPokemons = pokemons.filter(pokemon => !selectedPokemons.includes(pokemon.id));
    setPokemons(updatedPokemons);
    setSelectedPokemons([]);
  };

  return (
    <>
    <div className='card-pokemon-deleted'>
     
      {pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <input
            type="checkbox"
            checked={selectedPokemons.includes(pokemon.id)}
            onChange={() => handlePokemonSelect(pokemon.id)}
          />
          
         <div className='card-info'>
          <span className='pokemon-id'>N° {pokemon.id}</span>
          <h3>{pokemon.name}</h3>
          <div className='card-img'>
          <img src={pokemon.image} alt="pokemon" />
          </div>
          
          <div className='info-pokemon'>
          <div className='group-info'>
									<p>Altura</p>
									<span>{pokemon.height}</span>
								</div>
                <div className='group-info'>
									<p>Peso</p>
									<span>{pokemon.weight}KG</span>
								</div>
          </div>
          </div>
        </div>
      ))}
      
    </div>
    <span className='advertencia'>
        Elimina 1 o mas Pokemones! (solo estos 4) 
      </span>
    <button className='btn-search-deleted' onClick={handleDeleteSelectedPokemons}>Eliminar seleccionados</button>
    </>
    
  );
}

export default PokemonListDeleted;
