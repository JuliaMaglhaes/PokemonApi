import styles from "./styles.module.scss";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

export const PokemonCard = ({id, name, image, type, habbitat}) => {
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
                    {/* <div className={styles.slider}>
                        <Slider
                            
                        />

                    </div> */}
                </div>


            </div>
        )
}
