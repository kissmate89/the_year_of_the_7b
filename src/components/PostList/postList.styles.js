import styled from "styled-components"

export const PostListWrapper = styled.section`
  text-align: center;
`

export const ListWrapperStyled = styled.ul`
  padding-left: 0;
`

export const ListItemStyled = styled.li`
  margin: auto;
  padding: ${({ theme }) => theme.defaultSpacing} 0;
  font-size: ${({ theme }) => theme.fontSizes.large};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

export const CreatedDateStyled = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacings.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
`

export const PaginationStyled = styled.div`
  display: grid;
  max-width: 500px;
  gap: ${({ theme }) => theme.defaultSpacing};
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: ${({ theme }) => theme.defaultSpacing} 0;
  margin: auto;
  border-top: 1px solid ${({ theme }) => theme.secondaryColor};
`
