
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from '../../infra/Image';
import Text from '../../infra/Text';

const ModalRoot = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
`

const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    max-width: 400px;
    height: 50%;
    background-color: #fff;
`

const PokemonName = styled(Text)`
    color: blue;
`

interface PokemonModalProps {
    pokemon: Pokemon
    onClose: () => void
    isOpen: boolean
}
const PokemonModal = ({ pokemon, onClose, isOpen }: PokemonModalProps) => {

    const [, setPokemonData] = useState()
    

    useEffect(() => {
        if(isOpen) {
            (async() => {
                const response = await axios.get(pokemon.url)

                setPokemonData(response.data)
            })()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    // function sleep(ms:number) {
    // return new Promise(resolve => setTimeout(resolve, ms));
    // }

    return (
        <>
        {isOpen && (
            <ModalRoot onClick={onClose}>
                <PokemonContainer>
                    <PokemonName as='h1'>{pokemon.name}</PokemonName>
                    <Image src={pokemon.spriteUrl} alt="pokemon_container"/>
                </PokemonContainer>
            </ModalRoot>
        )}
        </>
    )
}

export default PokemonModal;