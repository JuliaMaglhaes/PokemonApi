import React, { useEffect, useState } from "react"
import { Header } from "../components/Header";
import { api } from "../services/api";

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
        console.log('seu ruim')
      }
    }
    fetchPokemons()
   },[limit])
   console.log(pokemons)

  return (
    <div>
      <Header/>
      {pokemons.map((pokemon) =>{
        return(
          <p>{pokemon.name}</p>          
        )
      })}
    <button onClick={() => setLimit(limit+5)}>Carregar mais</button>
    </div>
  )
}
