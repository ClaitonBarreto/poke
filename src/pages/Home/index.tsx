import { useEffect, useState } from "react"
import axios from "axios"
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs'
import PokemonContainer from "../../containers/PokemonContainer"

import { HomepageContainer, PokemonsWrapper, PrevNextButton, PrevNextWrapper } from './styles'

const Home = () => {

    const [pokemons, setPokemons] = useState<Pokemons>([])
    const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon")
    const [next, setNext] = useState<string>("")
    const [prev, setPrev] = useState<string>("")

    useEffect(() => {
        (async() => {
            const response = await axios.get(url)
            setNext(response.data.next)
            setPrev(response.data.previous)
            const rawPokemons = response.data.results

            const pokemons = rawPokemons.map(async (pokemon:Pokemon) => {
                const response = await axios.get(pokemon.url)
                const spriteUrl = response.data.sprites.front_default
                return {
                    name: pokemon.name,
                    url: pokemon.url,
                    spriteUrl
                }
            })

            setPokemons(await Promise.all(pokemons))
        })()
    }, [url])

    return (
        <HomepageContainer>
            <h1>Poke - A pokemons classifier and filter</h1>
            <input type="text" placeholder="Buscar"/>
            <button>Efetuar busca</button>
            <PokemonsWrapper>
                {pokemons.map((pokemon:Pokemon) => (
                    <PokemonContainer pokemon={pokemon}/>
                ))}
            </PokemonsWrapper>
            <PrevNextWrapper>
                {prev &&
                <PrevNextButton onClick={() => setUrl(prev)}>
                    <BsCaretLeft />
                </PrevNextButton>
                }
                <PrevNextButton onClick={() => setUrl(next)}>
                    <BsCaretRight />
                </PrevNextButton>
            </PrevNextWrapper>
        </HomepageContainer>
    )
}

export default Home