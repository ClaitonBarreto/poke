import styled from "styled-components";

import Image from "../../infra/Image";

export const Container = styled.div`
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 1px 2px 2px #333;
    cursor: pointer;
    
    :hover img {
        filter: grayscale(0);
        transform: scale(1.1);
    }
`

export const Sprite = styled(Image)`
    filter: grayscale(1);
    transition: all .2s ease-in-out;

`