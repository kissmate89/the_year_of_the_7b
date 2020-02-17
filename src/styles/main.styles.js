import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
    body {
        margin: 0;
        min-height: 100vh;
    }

    a {
        text-decoration: none;
        transition: color 0.3s ease-in-out;
        color: ${({ theme }) => theme.colors.tertiaryColor};

        &:hover {
            color: ${({ theme }) => theme.colors.tertiaryHover};
        }
    }

    li {
        list-style: none;
    }
`
