import styled, { css } from 'styled-components'
import {Tooltip} from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.background.light};
  padding: 1.4rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    margin-right: 1.6rem;
  }

  & + & {
    margin-top: 0.8rem;
  }

  ${props =>
    props.isErrored &&
    css`
      border: 2px solid #ac3030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}

  input {
    flex: 1;
    background: transparent;
    color: #f4ede8;
   font-size: 1.8rem;


    &::placeholder {
      color: ${({ theme }) => theme.colors.text.light};
    }
  }
`

export const Error = styled(Tooltip)`
  height: 2rem;
  margin-left: 1.6rem;

  span {
    background: #c53030;
    color: #f4ede8;

    &::before {
      border-color: #c53030 transparent;
    }
  }

  svg {
    margin: 0;
  }
`
