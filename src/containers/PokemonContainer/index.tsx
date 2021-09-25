import { useState } from 'react';
import Image from '../../infra/Image';
import PokemonModal from '../PokemonModal';
import { Container, Sprite } from './styles'

interface PokemonContainerProps {
    pokemon: Pokemon
}
const PokemonContainer = ({ pokemon }:PokemonContainerProps) => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <PokemonModal pokemon={pokemon} onClose={() => setModalOpen(false)} isOpen={modalOpen}/>
            <Container key={pokemon.name} onClick={() => setModalOpen(true)}>
                <span>{pokemon.name}</span>
                <Sprite src={pokemon.spriteUrl} alt=""/>
            </Container>
        </>
    )
}

export default PokemonContainer;