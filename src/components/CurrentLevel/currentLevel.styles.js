import styled from "styled-components"

export const CurrentLevelWrapperStyled = styled.div`
  margin: ${({ theme }) => theme.spacings.large} 0;

  @media screen and (min-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacings.large};
  }
`
