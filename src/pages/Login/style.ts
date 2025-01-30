import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
export const SSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    padding-top: 1rem;
    color: ${colors.white};
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  form {
    min-width: 25rem;
    background-color: ${colors.primary};
    border: 0.2rem solid ${colors.primary};
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;

    label {
        color: ${colors.white};
        font-family: 'Big Shoulders Display';
        font-size: 1.5rem;
      }

    div {
      background-color: ${colors.white};
      border: 0.15rem solid ${colors.primary};
      border-radius: 0.6rem;
      display: flex;
      margin: 0.5rem 0;
      svg {
        height: 3rem;
        width: 3rem;
        padding: 0.3rem;
        color: ${colors.black};
      }
      input {
        width: 100%;
        font-size: 1rem;
        border: 0;
        background-color: transparent;
      }
    }
    small, a {
        text-decoration: none;
        color: ${colors.white};
        font-weight: bold;
        margin-top: 1rem;
    }
    a {
        text-decoration: underline;
    }
    button {
        cursor: pointer;
        margin-top: 1rem;
        align-self: flex-end;
        font-family: 'Big Shoulders Display';
        font-size: 1.5rem;
        color: ${colors.white};
        background-color: ${colors.terciary};
        border: 1px solid ${colors.terciary};
        padding: 0.5rem;
        border-radius: 0.6rem;
    }
  }
`