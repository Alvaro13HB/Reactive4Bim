import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle"

export const SHeader = styled.header`
    background-color: ${colors.primary};
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    figure {
        cursor: pointer;
    }
`

export const SNav = styled.nav`
    nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--black);
    }
    nav div {
        margin: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
        transition: all 0.4s;
    }
    nav div:hover {scale: 1.2;}
`