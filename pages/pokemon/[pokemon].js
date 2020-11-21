import Head from "next/head";
import styles from "./Pokemon.module.css";

export default function Pokemon({ pokemon }) {
    return (
        <div className="container">
            <Head>
                <title>Pokemon: {pokemon?.name}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <main className={styles.container}>
                Welcome {pokemon?.name}!
                <img src={pokemon?.sprites.front_default} />
            </main>
        </div>
    );
}

export async function getStaticPaths() {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const pokemons = await result.json();

    let paths = pokemons.results.map((pokemon) => {
        return "/pokemon/" + pokemon.name;
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const result = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + params.pokemon
    );
    const pokemon = await result.json();

    return {
        props: {
            pokemon,
        },
    };
}
