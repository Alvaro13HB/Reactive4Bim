import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
    }

    p {
        font-family: 'Kulim Park';
        font-size: 2rem;
    }

    h1, h2, h3, h4, h5 {
        font-family: 'Big Shoulders Display';
        font-weight: 700;
    }
    
    html {font-size: 100%;} /* 16px */
    
    h1 {font-size: 4.210rem; /* 67.36px */}
    
    h2 {font-size: 3.158rem; /* 50.56px */}
    
    h3 {font-size: 3rem; /* 37.92px */}
    
    h4 {font-size: 1.777rem; /* 28.48px */}
    
    h5 {font-size: 1.333rem; /* 21.28px */}
    
    small {font-size: 0.750rem; /* 12px */}
`

export const colors = {
    primary: "#AB1212",
    secondary: "#FF4242",
    terciary: "#D96161",
    black: "#0A0905",
    white: "#F8F6F2"
}

