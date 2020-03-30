import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        min-height: 100vh;
        font-family: "Raleway";
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        line-height: 1.5;
    }

    a, button {
        transition: color 0.3s ease-in-out;
        color: ${({ theme }) => theme.colors.tertiaryColor};

        &:hover {
            color: ${({ theme }) => theme.colors.tertiaryHover};
        }
    }

    a {
        text-decoration: none;
    }

    button {
        font-family: "Raleway";
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        font-size: ${({ theme }) => theme.defaultFontSize};
        border: none;
        cursor: pointer;
    }

    li {
        list-style: none;
    }
`
