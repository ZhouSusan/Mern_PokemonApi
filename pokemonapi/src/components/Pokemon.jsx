import styles from './styles.module.css';

const Pokemon = (props) => {
    const {pokemons, setPokemons} = props;

    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    };
    return (
        <div>
            <button onClick={getPokemon} className={styles.btn}>Fetch Pokemon</button>
        </div>
    )
}

export default Pokemon;