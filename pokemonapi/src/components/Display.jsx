import styles from './styles.module.css';

const Display = (props) =>  {
    return (
        <div>
            {
                props.pokemons.length > 0 && props.pokemons.map((pokemon, index) => {
                return (
                    <div className={styles.pokename} key={index}>• {pokemon.name}</div> 
                )}
            )}
        </div>
    )
}

export default Display;