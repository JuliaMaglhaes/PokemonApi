import styles from "./styles.module.scss";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

export const PokemonCard = ({id, name, image, type, habbitat, hp, attack, defense, special1, special2, speed}) => {
    const style = `cardPokemon ${type}`
    return(
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
                            trackStyle = {{backgroundColor: '#475655'}}
                            railStyle = {{backgroundColor: '#bfcee2'}}
                            
                        />
                    </div>
                    <div className={styles.slider}>
                        <p>Ataque</p>
                        <Slider
                            max = {300}
                            value = {attack}
                            trackStyle = {{backgroundColor: '#475655'}}
                            railStyle = {{backgroundColor: '#bfcee2'}}
                        />
                    </div>
                    <div className={styles.slider}>
                        <p>Defesa</p>
                        <Slider
                            max = {300}
                            value = {defense}
                            trackStyle = {{backgroundColor: '#475655'}}
                            railStyle = {{backgroundColor: '#bfcee2'}}
                        />
                    </div>
                    <div className={styles.slider}>
                        <p>Especial 1</p>
                        <Slider
                            max = {300}
                            value = {special1}
                            trackStyle = {{backgroundColor: '#475655'}}
                            railStyle = {{backgroundColor: '#bfcee2'}}
                        />
                    </div>
                    <div className={styles.slider}>
                        <p>Especial 2</p>
                        <Slider
                            max = {300}
                            value = {special2}
                            trackStyle = {{backgroundColor: '#475655'}}
                            railStyle = {{backgroundColor: '#bfcee2'}}
                        />
                    </div>
                    <div className={styles.slider}>
                        <p>Velocidade</p>
                        <Slider
                            max = {300}
                            value = {speed}
                            trackStyle = {{backgroundColor: '#475655'}}
                            railStyle = {{backgroundColor: '#bfcee2'}}
                        />
                    </div>

                </div>


            </div>
        )
}
