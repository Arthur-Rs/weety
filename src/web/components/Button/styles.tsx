import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 1.6rem;
  padding: 1.6rem 0;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background: ${({ theme }) => shade(0.2, theme.colors.primary)};
  }
`
