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
`

export const SNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.black};
    .navitems {
        margin: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
        transition: all 0.4s;
    }
    .navitems:hover {scale: 1.2;}
`