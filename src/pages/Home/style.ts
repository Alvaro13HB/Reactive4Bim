import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle"

export const SHome = styled.main`
    section {
        color: ${colors.white};
        display: flex;
        min-height: calc(100vh - 5rem);
        justify-content: space-evenly;
    }
    section aside {
        display: flex;
        flex-direction: column;
        width: 30%;
        margin: 2rem 2rem 2rem 2rem;
        border-radius: 2rem;
        justify-content: start;
        text-align: center;
    }
    section aside img {
        align-self: center;
        margin-top: 5rem;
        margin-bottom: 5rem;
        width: 12rem;
        height: 12rem;
        border-radius: 15%;
    }
    section aside p {
        margin: 1.5rem 5rem;
        align-self: center;
    }
    section aside a{
        transition: all 0.4s;
        text-decoration: none;
        color: ${colors.white};
    }
    section aside a:hover{scale: 1.1;}

    .bloco1 {
        background-color: rgba(217, 97, 97, 0.8);
    }
    .bloco1 img {
        border: solid 5px ${colors.secondary};
    }
    .bloco2 {
        background-color: rgba(171, 18, 18, 0.8);
    }
    .bloco2 img {
        border: solid 5px ${colors.terciary};
    }
    .bloco3 {
        background-color: rgba(255, 66, 66, 0.8);
    }
    .bloco3 img {
        border: solid 5px ${colors.primary};
    }
`