import React, { useEffect, useState } from "react"
import { api } from "../services/api";
import styles from "./styles.module.scss"
import { PokemonCard } from "../components/PokemonCard/PokemonCard"

export default function Home() {

  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(40);
  
  useEffect(() =>{
    async function fetchPokemons(){
      try{
        await api.get(`/pokemon?limit=${limit}`)
        .then((response) =>{
          const { results } = response.data;
          const arrayPokemons = results.map((pokemon) => {
            return fetch(pokemon.url)
            .then((response) =>{
              return response.json();
            })
          })
          return Promise.all(arrayPokemons)
        })
        .then((data) =>{
          setPokemons(data);
        })
      }catch{
        console.log('Erro')
      }
    }
    fetchPokemons()
   },[limit])
   console.log(pokemons)

return(
  <div>
    {pokemons.map((pokemon, index) =>{
      return (
          <div className={styles.cardPokemonContainer}>
            <div className={styles.geralContainer}>
              <PokemonCard 
                id = {pokemon.id}
                name = {pokemon.name}
                habbitat ={pokemon.abilities[0].ability.name}
                image = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
                type = {pokemon.types[0].type.name}
                key = {index}
                
              />
            </div>
          </div>
        )
    })}
  </div>
)



      /* {pokemons.map((pokemon) =>{
        return(
          <p>{pokemon.name}</p>          
        )
      })}
    <button onClick={() => setLimit(limit+5)}>Carregar mais</button> */

}
