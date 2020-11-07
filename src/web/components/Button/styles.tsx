import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  border: 0;
  padding: 1.6rem 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  margin-top: 1.6rem;
  width: 100%;
  transition: background-color 0.2s;
  font-size: 1.8rem;

  &:hover {
    background: ${({ theme }) => shade(0.2, theme.colors.primary)};
  }
`
