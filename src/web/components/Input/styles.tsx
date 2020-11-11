import styled, { css } from 'styled-components'
import { Tooltip } from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.background.light};
  border: 2px solid ${({ theme }) => theme.colors.background.light};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text.normal};
  display: flex;
  padding: 1.4rem;
  width: 100%;

  > svg {
    margin-right: 1.6rem;
    stroke: ${({ theme }) => theme.colors.text.normal};
  }

  & + & {
    margin-top: 0.8rem;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.red};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      > svg {
        stroke: ${({ theme }) => theme.colors.primary};
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      > svg {
        stroke: ${({ theme }) => theme.colors.primary};
      }
    `}

  input {
    background: transparent;
    color: ${({ theme }) => theme.colors.text.normal};
    flex: 1;
    font-size: 1.8rem;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.dark};
    }
  }
`

export const Error = styled(Tooltip)`
  height: 2rem;
  margin-left: 1.6rem;

  span {
    background: ${({ theme }) => theme.colors.red};
    color: #f4ede8;

    &::before {
      border-color: ${({ theme }) => theme.colors.red} transparent;
    }
  }

  svg {
    margin: 0;
    stroke: ${({ theme }) => theme.colors.red};
  }
`
