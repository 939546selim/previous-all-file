import Cardlist from './components/CardList';

import { useState, useEffect } from 'react';
const INITIAL_API = 'https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1'

export default function App() {
    const [apiEndPoint, setApiEndPoint] = useState(INITIAL_API);
    const [pokemonData, setPokemonData] = useState([]);

    async function getPokemonDeta(endpoint) {
        const response = await fetch(endpoint);
        const resultPokemon = await response.json();
        console.log(resultPokemon);
        setApiEndPoint(resultPokemon[0].next);
        const a = resultPokemon[0].results.map((item) => {
            return fetch(item.url);
        })

        console.log(a)

        const b = await Promise.all(a);
        console.log(b)
        const c = b.map((item) => {
            return item.json();

        })
        console.log(c)
        const d = await Promise.all(c);
        console.log(d)

        const finalPokemonData = d.map((item) => {
            return item[0]

        })
        console.log(finalPokemonData);

        setPokemonData((prev) => {
            return [...prev, ...finalPokemonData]

        })



    }

    function fetchMorePokemon(){
        getPokemonDeta(apiEndPoint);

    }





    useEffect(() => {
        getPokemonDeta(apiEndPoint);

    }, []);






    return (
        <>
            {/* <section>
                {pokemonData.map((item)=>{
                    return(<div>
                       { item.name}

                    </div>)

                })}


            </section> */}
            {apiEndPoint &&<button onClick={fetchMorePokemon}> get more pokemon</button>}
            <Cardlist pokemonData={pokemonData}/>



        </>
    )

}
