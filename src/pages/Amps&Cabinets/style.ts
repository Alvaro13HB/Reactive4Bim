import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle"

export const SAandC = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .esquerdo{
        color: ${colors.white};
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: start;
        margin: 2rem 0rem 2rem 2rem;
    }

    .filtros{
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: start;
        background-color: rgba(255, 66, 66, 0.8);
        border-radius: 15px;
        height: 100%;
        min-width: 15rem;
    }

    .checkers {
        display: flex;
        flex-direction: column;
        font-family: 'Kulim Park';
        font-size: 1.5rem;
    }

    .principal{
        color: ${colors.white};
        display: grid;
        grid-template-columns: auto;
        gap: 2rem;
        padding: 2rem;
        align-items: center;
        align-content: start;
        background-color: rgba(255, 66, 66, 0.8);
        margin: 2rem 2rem 2rem 2rem;
        border-radius: 30px;
        width: 100%;
        max-height: max-content;
    }

    .searchbar{
        grid-column: 1 / span 5;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .bar{
        display: flex;
        align-items: center;
        border-radius: 2rem;
        width: 100%;
        padding: 1rem;
        background-color: ${colors.black};
    }
    .bar input{
        background: transparent;
        flex: 2;
        border: 0;
        outline: none;
        padding: 1rem;
        color: var(--white);
        font-size: 1rem;
        font-family: 'Kulim Park';
    }

    ::placeholder{
        color: rgba(248, 246, 242, 0.5);
        text-decoration: underline;
        font-family: 'Kulim Park';
    }

    .bar button{
        background-color: transparent;
        border: 0;
        height: 2rem;
        width: 2rem;
        height: 100%;
        cursor: pointer;
    }
    .bar button img{
        width: 2rem;
        height: 2rem;
    }

    @media(max-width: 1640px){
    .searchbar{
        grid-column: 1 / span 4;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
}

@media(max-width: 1366px){
    .searchbar{
        grid-column: 1 / span 3;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
}

@media(max-width: 1000px){
    .searchbar{
        grid-column: 1 / span 2;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
}

@media(max-width: 800px){
    header {
        display: flex;
        flex-direction: row-reverse;
    }
    .searchbar{
        grid-column: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
}

`