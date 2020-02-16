import styled from "styled-components"

export const PostListWrapper = styled.section`
  text-align: center;
`

export const ListWrapperStyled = styled.ul`
  padding-left: 0;
`

export const ListItemStyled = styled.li`
  margin: auto;
  font-size: ${({ theme }) => theme.fontSizes.large};
  transition: font-size 0.3s ease-in-out;

  &:hover {
    font-size: 1.6rem;
  }
`
