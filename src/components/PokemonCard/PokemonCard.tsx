import styles from "./styles.module.scss";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import { useEffect } from "react";


export const PokemonCard = ({id, name, image, type, habbitat, hp, attack, defense, special1, special2, speed}) => {
    const style = `cardPokemon ${type}`

    useEffect(() => {
        function fetchSpecie(){
            const species = fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
            .then((response) =>{
                return response.json()
            })
            .then((data) => {
                // console.log(data.chain.evolves_to[0])
            })
        }
        fetchSpecie()
    })
    return(
        <div className={styles.container}>
            <div className={style}>
              <div className={styles.informationPokemon}>
                    <p>#0{id}</p>
                    <p>{type}</p>
                </div> 
                <div className={styles.imageNamePokemon}>
                    <img src={image}/>
                    <p>{name} - <span>{habbitat}</span></p>
                </div>
                <div className={styles.box}>
                    <div className={styles.slider}>
                        <p>HP</p>
                        <Slider
                            max = {300}
                            value = {hp}
                            trackStyle = {{backgroundColor: '#dff72a'}}
                            railStyle = {{backgroundColor: '#bfcee2'}}
                        />
                    </div>
                    <div className={styles.slider}>
                        <p>Ataque</p>
                        <Slider
                            max = {300}
                            value = {attack}
                            trackStyle = {{backgroundColor: '#ff0000'}}
                            railStyle = {{backgroundColor: '#bfcee2'}}
                        />
                    </div>
                    <div className={styles.slider}>
                        <p>Defesa</p>
                        <Slider
                            max = {300}
                            value = {defense}
                            trackStyle = {{backgroundColor: '#3653f6'}}
                            railStyle = {{backgroundColor: '#bfcee2'}}
                        />
                    </div>
                    <div className={styles.slider}>
                        <p>Especial 1</p>
                        <Slider
                            max = {300}
                            value = {special1}
                            trackStyle = {{backgroundColor: '#ff9700'}}
                            railStyle = {{backgroundColor: '#bfcee2'}}
                        />
                    </div>
                    <div className={styles.slider}>
                        <p>Especial 2</p>
                        <Slider
                            max = {300}
                            value = {special2}
                            trackStyle = {{backgroundColor: '#ff4f00'}}
                            railStyle = {{backgroundColor: '#bfcee2'}}
                        />
                    </div>
                    <div className={styles.slider}>
                        <p>Velocidade</p>
                        <Slider
                            max = {300}
                            value = {speed}
                            trackStyle = {{backgroundColor: '#2c103f'}}
                            railStyle = {{backgroundColor: '#bfcee2'}}
                        />
                    </div>
                </div>
            </div>
            </div>
        )
}
