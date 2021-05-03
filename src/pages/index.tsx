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
          <div className={styles.cardPokemonContainer}>
          {pokemons.map((pokemon, index) =>{
            return (
              <div className={styles.geralContainer}>
                <PokemonCard 
                  id = {pokemon.id}
                  name = {pokemon.name}
                  habbitat ={pokemon.abilities[0].ability.name}
                  image = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
                  type = {pokemon.types[0].type.name}
                  key = {index}
                  hp = {pokemon.stats[0].base_stat}
                  attack = {pokemon.stats[1].base_stat}
                  defense = {pokemon.stats[2].base_stat}
                  special1 = {pokemon.stats[3].base_stat}
                  special2 = {pokemon.stats[4].base_stat}
                  speed = {pokemon.stats[5].base_stat}
                />
            </div>
            )})}
          </div>
        <div className={styles.verMais}>
              <button onClick={() => setLimit(limit+8)}>
                <p>Carregar mais</p>
                </button> 
      </div>
  </div>
)


}
