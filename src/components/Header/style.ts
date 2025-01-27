import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle"

export const SHeader = styled.header`
    background-color: ${colors.black};
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    figure {
        cursor: pointer;
    }
    @media(max-width: 800px){
        display: flex;
        flex-direction: row-reverse;
    }
`

export const SNav = styled.nav`
    display: flex;
    height: 5rem;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.black};
    .navitems {
        height: 5rem;
        margin: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
        list-style-type: none;
    }
    .navitems a {
        font-family: 'Big Shoulders Display';
        font-weight: 700;
        text-decoration: none;
        color: ${colors.white};
    }
    .navitems li {
        padding: 0 1rem;
        display: flex;
        align-items: center;
        height: 5rem;
    }
    .navitems li:hover {
        background-color: ${colors.primary};
    }

`