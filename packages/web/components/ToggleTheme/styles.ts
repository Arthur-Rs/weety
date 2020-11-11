import styled, { css } from 'styled-components'

interface ContainerProps {
  side: 'right' | 'left'
}

export const Container = styled.button<ContainerProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.background.normal};

  ${({ side }) =>
    side === 'right'
      ? css`
          right: 3.2rem;
        `
      : css`
          left: 3.2rem;
        `}

  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  bottom: 3.2rem;
  display: flex;
  height: 4.8rem;

  justify-content: center;
  position: absolute;
  width: 4.8rem;

  svg {
    height: 1.6rem;
    width: 1.6rem;
  }

  @media (max-width: 720px) {
    width: 6rem;
    height: 6rem;
    left: auto;
    bottom: auto;
    top: 3.2rem;
    right: 3.2rem;
    opacity: 0.7;

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`
