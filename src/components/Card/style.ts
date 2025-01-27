import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SCard = styled.aside`
    aside{
        align-items: center;
        align-content: start;
        display: flex;
        flex-direction: column;
        height: 25rem;
        padding: 2rem;
        border-radius: 2rem;
        background-color: ${colors.black};
        text-decoration: none;
    }

    a{
        align-self: flex-end;
        text-decoration: none;
        color: var(--white);
    }

    figure img {
        max-width: 15rem;
        max-height: 12.5rem;
    }
`
