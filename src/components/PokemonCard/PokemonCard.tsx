import styles from "./styles.module.scss"

export const PokemonCard = ({id, name, image, type}) => {
    const style = `cardPokemon ${type}`
    return(
        <div className={style}>
              <div className={styles.informationPokemon}>
                    <p>{id}</p>
                    <p>{type}</p>
                </div> 
                <div className={styles.imageNamePokemon}>
                    <img src={image}/>
                    <p>{name}</p>
                </div>
            </div>
        )
}
