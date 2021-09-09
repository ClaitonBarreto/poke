import styled from "styled-components";

export const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PokemonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 1rem;
    gap: 12px;
    width: 90%;
`
export const PokemonContainer = styled.div`
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 1px 2px 2px #333;
    cursor: pointer;
`

export const PrevNextWrapper = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`

export const PrevNextButton = styled.button`
    border: none;
    background: none;
    color: #000;
    font-size: 1.5rem;
`